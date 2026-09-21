'use client';

import { useLanguage } from '@/lib/language-context';

export function PrivacyContent() {
  const { lang } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl text-ink mb-10">
          {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}
        </h1>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Données collectées' : 'Data collected'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'Le formulaire de contact collecte votre nom, votre adresse email et le message que vous rédigez, afin de pouvoir vous répondre. Ces données sont transmises par email à Ramy MAHDJOUBI et ne sont ni revendues, ni utilisées à des fins commerciales tierces.'
                : 'The contact form collects your name, email address and message so we can reply to you. This data is sent by email to Ramy MAHDJOUBI and is never resold or used for third-party commercial purposes.'}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Conservation' : 'Retention'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'Les messages sont conservés le temps nécessaire au traitement de votre demande. Vous pouvez demander leur suppression à tout moment par email.'
                : 'Messages are kept for as long as needed to handle your request. You may ask for their deletion at any time by email.'}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Cookies & traceurs' : 'Cookies & trackers'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'Ce site n\u2019utilise aucun cookie publicitaire ni traceur analytique tiers. Seule une préférence de langue (FR/EN) est enregistrée localement dans votre navigateur (localStorage), sans transmission à un serveur.'
                : 'This site uses no advertising cookies or third-party analytics trackers. Only a language preference (FR/EN) is stored locally in your browser (localStorage), never sent to a server.'}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Vos droits (RGPD)' : 'Your rights (GDPR)'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'Conformément au RGPD, vous disposez d\u2019un droit d\u2019accès, de rectification et de suppression de vos données. Pour l\u2019exercer, contactez ramy.mahdjoubi@gmail.com.'
                : 'In accordance with GDPR, you have the right to access, rectify and delete your data. To exercise it, contact ramy.mahdjoubi@gmail.com.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
