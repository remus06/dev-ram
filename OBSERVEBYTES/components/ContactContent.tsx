'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { UpworkIcon } from './UpworkIcon';

type Status = 'idle' | 'loading' | 'success' | 'error';

const T = {
  fr: {
    title: 'Contact & devis',
    desc: 'Un projet data ou un besoin d\u2019automatisation ? Je réponds sous 48h.',
    name: 'Nom complet',
    email: 'Email pro',
    service: 'Service souhaité',
    message: 'Détails de votre besoin',
    submit: 'Envoyer ma demande',
    sending: 'Envoi en cours…',
    success: 'Message envoyé ! Merci pour votre confiance, je reviens vers vous sous 48h.',
    error: 'L\u2019envoi a échoué. Réessayez ou écrivez-moi directement à ramy.mahdjoubi@gmail.com.',
    again: 'Envoyer un autre message',
    upwork: 'Profil Upwork',
    location: 'Basé à Toulouse / Blagnac',
    services: ['BI & Dashboards', 'Automatisation', 'Site vitrine & SEO', 'Autre']
  },
  en: {
    title: 'Contact & quote',
    desc: 'A data project or an automation need? I reply within 48h.',
    name: 'Full name',
    email: 'Business email',
    service: 'Desired service',
    message: 'Project details',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Message sent! Thanks for your trust, I\u2019ll get back to you within 48h.',
    error: 'Sending failed. Please retry or write to ramy.mahdjoubi@gmail.com directly.',
    again: 'Send another message',
    upwork: 'Upwork profile',
    location: 'Based in Toulouse / Blagnac',
    services: ['BI & Dashboards', 'Automation', 'Website & SEO', 'Other']
  }
};

export function ContactContent() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      service: data.get('service'),
      message: data.get('message'),
      company: data.get('company') // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h1 className="font-display text-4xl text-ink">{t.title}</h1>
            <p className="text-muted">{t.desc}</p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-ink font-medium">ramy.mahdjoubi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-ink font-medium">07 53 13 18 97</span>
              </div>
              <a
                href="https://www.upwork.com/freelancers/~0142354e34b6c25d71"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-accent transition-colors"
              >
                <UpworkIcon className="w-5 h-5 text-[#14a800]" />
                <span className="text-ink font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                  {t.upwork} <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

            <div className="p-5 bg-white border border-line rounded-xl flex items-center gap-3">
              <MapPin className="w-5 h-5 text-clay shrink-0" />
              <p className="text-sm font-medium text-ink">{t.location}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-line rounded-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-accent-light text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium text-ink mb-6 max-w-sm mx-auto">{t.success}</p>
                  <button onClick={() => setStatus('idle')} className="text-accent font-medium underline">
                    {t.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — laissé vide par les humains, masqué visuellement et du lecteur d'écran */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] w-px h-px opacity-0"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted">{t.name}</label>
                      <input required name="name" type="text" className="w-full px-4 py-3 bg-paper border border-line rounded-md focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted">{t.email}</label>
                      <input required name="email" type="email" className="w-full px-4 py-3 bg-paper border border-line rounded-md focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted">{t.service}</label>
                    <select name="service" className="w-full px-4 py-3 bg-paper border border-line rounded-md focus:ring-2 focus:ring-accent outline-none">
                      {t.services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted">{t.message}</label>
                    <textarea required name="message" rows={5} minLength={10} className="w-full px-4 py-3 bg-paper border border-line rounded-md focus:ring-2 focus:ring-accent outline-none" />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 text-sm text-clay">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{t.error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-accent hover:bg-accent-dark disabled:opacity-60 text-paper font-medium rounded-md transition-colors"
                  >
                    {status === 'loading' ? t.sending : t.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
