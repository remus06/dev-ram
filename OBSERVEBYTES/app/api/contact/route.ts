import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const { name, email, message, service, company } = body ?? {};

  // Honeypot anti-spam : champ invisible pour les humains, rempli seulement par les bots.
  if (typeof company === 'string' && company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json({ error: 'invalid_message' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'ramy.mahdjoubi@gmail.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ObserveByte <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('RESEND_API_KEY manquante — impossible d\u2019envoyer le message de contact.');
    return NextResponse.json({ error: 'server_not_configured' }, { status: 500 });
  }

  const safe = (s: string) => s.replace(/[<>]/g, '');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[ObserveByte] Nouveau message de ${safe(name)}`,
        text: [
          `Nom : ${name}`,
          `Email : ${email}`,
          service ? `Service souhaité : ${service}` : null,
          '',
          message
        ]
          .filter(Boolean)
          .join('\n')
      })
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Échec envoi Resend :', res.status, detail);
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erreur envoi contact :', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
