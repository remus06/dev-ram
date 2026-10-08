// Toutes les informations du cabinet, reprises de l'ancien site www.alliancecorpsesprit.com.
// Une seule source : modifier ici met à jour tout le site.

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alliancecorpsesprit.fr';

// Domaine de recette : le site n'y est jamais indexé par les moteurs de recherche.
export const isStaging = siteUrl.includes('s-fservices.fr');

export const site = {
  name: 'Alliance Corps Esprit',
  tagline: 'Le chemin pour entrer en amitié avec soi…',
  practitioner: 'Nawel Billali',
  title: 'Hypnologue & Sophrologue',
  subtitle: 'Praticienne de thérapie brève orientée solution & énergétique',
  methods: 'Hypnose ericksonienne, Access Bars, Sophrologie (titre RNCP)',
  phone: '06 76 48 69 27',
  phoneHref: 'tel:+33676486927',
  bookingUrl: 'https://liberlo.com/profil/nawal-billali',
  address: {
    street: 'Résidence la Verrerie, Bât. A',
    postalCode: '13112',
    city: 'La Destrousse',
    region: "Bouches-du-Rhône — région d'Aubagne",
    note: 'Parking visiteurs gratuit'
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R%C3%A9sidence+la+Verrerie+13112+La+Destrousse',
  hours: [
    { days: 'Du mardi au jeudi', time: '9h00 – 19h00' },
    { days: 'Samedi', time: '9h30 – 18h00' }
  ],
  hoursNote: 'Uniquement sur rendez-vous',
  legal: {
    status: 'Entrepreneur individuel',
    siren: '791 220 718',
    ape: '8690F'
  },
  memberships: [
    {
      name: 'Syndicat des Métiers de l’Hypnose (SDMH)',
      url: 'https://syndicat-hypnose.com/annuaire-sdmh/6204/billali-nawal/'
    },
    {
      name: 'Syndicat des Sophrologues Professionnels (SSP)',
      url: 'https://www.syndicat-sophrologues-professionnels.fr/nbillali.html'
    }
  ],
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/Alliance-Corps-Esprit-314572278901977/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nawel-billali-02a59422/' }
  ],
  medicalNotice: "Ne jamais interrompre un traitement en cours sans l'avis de votre médecin.",
  mutuelleNotice: 'Des mutuelles remboursent les séances : renseignez-vous auprès de la vôtre.'
} as const;

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/approches', label: 'Approches' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' }
] as const;
