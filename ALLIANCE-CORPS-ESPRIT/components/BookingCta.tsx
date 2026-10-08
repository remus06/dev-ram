import { site } from '@/lib/site';

export function BookingCta() {
  return (
    <section className="container-page mt-20">
      <div className="rounded-3xl bg-sage-dark px-6 py-12 text-center text-white md:px-12 md:py-16">
        <p className="font-display text-3xl font-medium md:text-4xl">Prendre soin de soi commence par un premier rendez-vous</p>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Le premier rendez-vous dure 2h. Consultations uniquement sur rendez-vous, à La Destrousse.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-sage-dark hover:bg-sand">
            Réserver en ligne
          </a>
          <a href={site.phoneHref} className="btn border border-white/40 text-white hover:border-white">
            Appeler le {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
