'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site, socials } from '@/lib/site';
import { PhoneIcon, SocialIcon } from './Icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const errors: Record<string, string> = {
  invalid_name: 'Merci d’indiquer votre nom.',
  invalid_email: 'L’adresse e-mail semble incorrecte.',
  invalid_message: 'Votre message est un peu court (10 caractères minimum).',
  invalid_consent: 'Merci de cocher la case d’accord pour l’envoi du message.',
  too_many: 'Plusieurs messages viennent d’être envoyés : réessayez dans quelques minutes.'
};

const whatsapp = socials.find((s) => s.key === 'whatsapp')?.href;

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, consent: data.consent === 'on' })
      });
      if (res.ok) {
        form.reset();
        setStatus('sent');
        return;
      }
      const body = await res.json().catch(() => ({}));
      setError(errors[body.error] ?? '');
      setStatus('error');
    } catch {
      setError('');
      setStatus('error');
    }
  }

  return (
    <section className="write" id="contact">
      <div className="wrap">
        <div className="write__intro">
          <span className="eyebrow rv">Contact</span>
          <h2 className="h2 rv s1">
            Écrivez-moi,
            <br />
            <em>je vous réponds.</em>
          </h2>
          <p className="lead rv s2">
            Une question sur une séance, une demande de rendez-vous ? Laissez-moi un message : je vous recontacte
            rapidement. Pour un échange de vive voix, appelez-moi.
          </p>
          <div className="go-btns rv s3">
            <a className="btn-line" href={site.phone.href}>
              <PhoneIcon /> {site.phone.display}
            </a>
            {whatsapp && (
              <a className="btn-line" href={whatsapp} target="_blank" rel="noopener noreferrer">
                <SocialIcon name="whatsapp" /> WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="write__card rv s2">
          {status === 'sent' ? (
            <div className="write__done" role="status">
              <h3>Merci, votre message est bien parti.</h3>
              <p>Je vous réponds dès que possible, en général sous 48h.</p>
              <button type="button" className="btn-line" onClick={() => setStatus('idle')}>
                Écrire un autre message
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <label className="field">
                  <span>Nom et prénom</span>
                  <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} />
                </label>
                <label className="field">
                  <span>
                    Téléphone <i>(facultatif)</i>
                  </span>
                  <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
                </label>
              </div>
              <label className="field">
                <span>E-mail</span>
                <input name="email" type="email" autoComplete="email" required maxLength={200} />
              </label>
              <label className="field">
                <span>Votre message</span>
                <textarea name="message" rows={5} required minLength={10} maxLength={5000} />
              </label>
              {/* Champ piège anti-spam : invisible pour les visiteurs, rempli seulement par les robots. */}
              <label className="form__trap" aria-hidden="true">
                Entreprise
                <input name="company" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              <label className="check">
                <input name="consent" type="checkbox" required />
                <span>
                  J’accepte que ces informations soient utilisées pour répondre à ma demande (voir la{' '}
                  <Link href="/confidentialite">politique de confidentialité</Link>).
                </span>
              </label>
              {status === 'error' && (
                <p className="form__error" role="alert">
                  {error ||
                    `Le message n’a pas pu être envoyé. Vous pouvez m’appeler au ${site.phone.display} ou m’écrire sur WhatsApp.`}
                </p>
              )}
              <button className="btn-play form__submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
