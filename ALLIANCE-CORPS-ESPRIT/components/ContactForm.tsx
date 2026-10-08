'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field = 'mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-sage focus:outline-none';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      e.currentTarget?.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-3xl border border-sage/30 bg-sage-light p-8">
        <p className="font-display text-2xl font-medium">Merci, votre message a bien été envoyé.</p>
        <p className="mt-2 text-ink/80">Je vous réponds dans les meilleurs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Nom
          <input name="name" required minLength={2} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Téléphone <span className="font-normal text-muted">(facultatif)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        E-mail
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea name="message" required minLength={10} rows={6} className={field} />
      </label>
      {/* Honeypot anti-spam : invisible pour les humains */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Société
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="text-xs leading-relaxed text-muted">
        Vos données servent uniquement à répondre à votre demande. Voir la{' '}
        <Link href="/confidentialite" className="underline">politique de confidentialité</Link>.
      </p>
      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-clay-light px-4 py-3 text-sm">
          L&apos;envoi a échoué. Réessayez ou appelez le <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a>.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </button>
    </form>
  );
}
