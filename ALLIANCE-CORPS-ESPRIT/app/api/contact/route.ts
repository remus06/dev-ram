import { NextRequest, NextResponse } from 'next/server';

// Envoi du formulaire de contact par e-mail via Resend (même principe que le site observebyte.fr).
// Variables d'environnement : RESEND_API_KEY, CONTACT_TO_EMAIL (destinataire), CONTACT_FROM_EMAIL (expéditeur,
// domaine vérifié sur Resend). Sans clé ni destinataire, l'API répond 503 et le formulaire propose le téléphone.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limite simple contre les envois en rafale : 5 messages par adresse IP sur 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  // Champ piège : rempli uniquement par les robots, on fait comme si tout allait bien.
  if (str(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const message = str(body.message, 5000);

  if (name.length < 2) return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: 'invalid_message' }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ error: 'invalid_consent' }, { status: 400 });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local';
  if (tooMany(ip)) return NextResponse.json({ error: 'too_many' }, { status: 429 });

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Alliance Corps Esprit <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    console.error('RESEND_API_KEY ou CONTACT_TO_EMAIL manquant : message de contact non envoyé.');
    return NextResponse.json({ error: 'server_not_configured' }, { status: 503 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Site Alliance Corps Esprit] Message de ${name.replace(/[<>\r\n]/g, '')}`,
        text: [`Nom : ${name}`, `E-mail : ${email}`, phone ? `Téléphone : ${phone}` : null, '', message]
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
