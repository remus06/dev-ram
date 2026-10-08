import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const { name, email, phone, message, company } = body ?? {};

  // Honeypot anti-spam : champ invisible pour les humains, rempli seulement par les bots.
  if (typeof company === 'string' && company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (phone !== undefined && (typeof phone !== 'string' || phone.length > 30)) {
    return NextResponse.json({ error: 'invalid_phone' }, { status: 400 });
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
    return NextResponse.json({ error: 'invalid_message' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Formulaire de contact : RESEND_API_KEY, CONTACT_TO_EMAIL ou CONTACT_FROM_EMAIL manquant.');
    return NextResponse.json({ error: 'server_not_configured' }, { status: 500 });
  }

  const safe = (s: string) => s.replace(/[<>\r\n]/g, ' ').trim();

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Site Alliance Corps Esprit] Message de ${safe(name)}`,
        text: [`Nom : ${safe(name)}`, `E-mail : ${email}`, phone ? `Téléphone : ${safe(phone as string)}` : null, '', message]
          .filter((l) => l !== null)
          .join('\n')
      })
    });

    if (!res.ok) {
      console.error('Échec envoi Resend :', res.status, await res.text());
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erreur envoi contact :', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
