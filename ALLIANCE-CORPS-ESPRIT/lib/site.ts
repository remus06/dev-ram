// Toutes les informations du cabinet au même endroit.
// Sources : fiche Google « Nawal BILLALI » (adresse, coordonnées, horaires, avis),
// ancien site Wix alliancecorpsesprit.com (textes, LinkedIn, SIREN, adhésions),
// registre RNE via infosociétés (SIREN 791 220 718 : entrepreneur individuel, APE 8690F),
// notes de la cliente du 14/10/2026 (tarifs, Bon à savoir, Instagram, syndicats).

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alliance.s-fservices.fr';

// Site de recette (sous-domaine de s-fservices.fr) : jamais indexé par les moteurs de recherche,
// pour ne pas concurrencer le futur domaine de la cliente.
export const isStaging = siteUrl.includes('s-fservices.fr') || process.env.NEXT_PUBLIC_NOINDEX === '1';

export const site = {
  name: 'Alliance Corps Esprit',
  practitioner: 'Nawal Billali',
  role: 'Sophrologue · Hypnologue',
  tagline: 'Le chemin pour entrer en amitié avec soi',
  description:
    "Sophrologie, hypnose ericksonienne, méthode Vittoz et soins énergétiques à La Destrousse, près d'Aubagne. Nawal Billali vous accompagne pour apaiser le stress, le sommeil et les émotions.",
  phone: {
    display: '+33 6 76 48 69 27',
    href: 'tel:+33676486927',
    e164: '+33676486927'
  },
  address: {
    // Google indique « Résidence La Verrerie, Bâtiment Arrerie » ; l'ancien site « Bât A ».
    street: 'Résidence La Verrerie, Bât. A',
    postalCode: '13112',
    city: 'La Destrousse',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'FR'
  },
  geo: { lat: 43.3752237, lng: 5.6071947 },
  parking: 'Parking visiteurs gratuit',
  // Prise de rendez-vous : lien de la page de réservation Google Agenda (remplace Liberlo).
  // Tant qu'il est vide, les boutons « Prendre rendez-vous » mènent au formulaire de contact.
  booking: '',
  // Portrait de Nawal pour la section « Mon approche » : déposer la photo dans public/images/
  // et indiquer son chemin ici (ex. '/images/nawal.jpg'). Vide = emplacement réservé.
  portrait: '',
  hours: [
    { label: 'Mardi — jeudi', value: '9h00 – 19h00', days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '19:00' },
    { label: 'Samedi', value: '9h30 – 18h00', days: ['Saturday'], opens: '09:30', closes: '18:00' }
  ],
  // Vidéo du hero (optionnelle) : l'image fixe public/images/hero-seance.jpg est animée en CSS.
  // Pour une vidéo : mettre le mp4 dans public/videos/ et indiquer '/videos/hero.mp4'.
  heroVideo: ''
} as const;

// Attributs des boutons « Prendre rendez-vous » : Google Agenda (nouvel onglet) si renseigné, sinon le formulaire.
const bookingUrl: string = site.booking;
export const bookingLink: { href: string; target?: string; rel?: string } = bookingUrl
  ? { href: bookingUrl, target: '_blank', rel: 'noopener noreferrer' }
  : { href: '/#contact' };

export const links = {
  maps: `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat}%2C${site.geo.lng}`,
  waze: `https://waze.com/ul?ll=${site.geo.lat}%2C${site.geo.lng}&navigate=yes`,
  // Fiche Google du cabinet (lien fourni par la cliente).
  googleReviews: 'https://maps.app.goo.gl/NLWysxf7GHTsDUm96',
  // Ouvre directement la fenêtre « Laisser un avis » (Place ID de la fiche, vérifié).
  writeReview: 'https://search.google.com/local/writereview?placeid=ChIJkbgQY_eYyRIRcUWCOJ6S7GQ'
};

export type SocialKey = 'instagram' | 'tiktok' | 'facebook' | 'linkedin' | 'whatsapp';

// Les réseaux sans URL ne sont pas affichés. TikTok : coller l'URL du profil pour faire apparaître l'icône.
export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/sante_physique_et_mentale/' },
  { key: 'tiktok', label: 'TikTok', href: '' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Alliance-Corps-Esprit-314572278901977/' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nawel-billali-02a59422/' },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/33676486927' }
];

export const navLinks = [
  { href: '#approche', label: 'Approche' },
  { href: '#outils', label: 'Outils' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#cabinet', label: 'Le cabinet' },
  { href: '#avis', label: 'Avis' }
];

export const toolGroups = [
  {
    title: 'Corporel & sensoriel',
    tools: [
      {
        name: 'Hypnose ericksonienne',
        text: "Une thérapie brève héritée de Milton Erickson. Loin des idées reçues, c'est un état d'éveil à soi, qui s'appuie sur l'observation fine de la personne pour mobiliser ses propres ressources."
      },
      {
        name: 'Sophrologie',
        text: "Née en 1960 des travaux d'Alfonso Caycedo, elle s'appuie sur la respiration, la détente du corps et la conscience pour retrouver l'équilibre entre émotions, pensées et comportements."
      },
      {
        name: 'Méthode Vittoz',
        text: "Mise au point par le Dr Roger Vittoz, contemporain de Freud : des exercices simples, intégrés au quotidien, pour retrouver une sécurité intérieure et devenir acteur de sa vie."
      }
    ]
  },
  {
    title: 'Énergétique & émotionnel',
    tools: [
      {
        name: 'Psycho-Bio-Acupressure',
        text: "Développée par le Dr Jean-Noël Delatte : une légère pression sur des points précis pour libérer les blocages émotionnels liés aux expériences passées et rééquilibrer l'énergie."
      },
      {
        name: 'EFT',
        text: "L'Emotional Freedom Technique, créée par Gary Craig : une approche holistique et étonnamment simple pour apaiser les émotions qui encombrent."
      },
      {
        name: 'Access Bars',
        text: "Issue d'Access Consciousness®, une approche par le toucher de points de la tête, pour relâcher les tensions, conditionnements et croyances qui pèsent au quotidien."
      },
      {
        // Texte à faire valider par la cliente.
        name: 'Déprogrammation psycho-émotionnelle',
        text: "Repérer et désamorcer les charges émotionnelles et les processus inconscients qui entretiennent les mêmes schémas, pour s'en libérer à la racine."
      }
    ]
  }
];

export const fields = [
  {
    title: 'Prophylaxie',
    text: 'Préserver sa santé, retrouver un état de bien-être, vivre en conscience et devenir plus présent à soi et aux autres.'
  },
  {
    title: 'Développement personnel',
    text: 'Oser vivre pleinement sa vie, renforcer sa confiance en soi et son image, prendre la parole avec aisance.'
  },
  {
    title: 'Pédagogie',
    text: 'Améliorer sa concentration, sa mémoire, ses performances intellectuelles et physiques, se préparer à un examen.'
  },
  {
    title: 'Thérapie',
    text: 'Troubles anxieux, alimentaires, du sommeil, addictions, mal-être, douleurs, acouphènes, vertiges, hyperacousie.'
  }
];

// Tarifs (notes de la cliente du 14/10/2026).
export const prices = {
  individual: [
    { name: 'Séance adulte', duration: '1h à 1h30', price: '80 €' },
    { name: 'Séance enfant', duration: '45 min', price: '60 €' },
    { name: 'Séance étudiant', duration: "jusqu'à 21 ans", price: '70 €' },
    { name: 'VaguExpans', duration: '', price: '80 €' }
  ],
  notes: [
    "Annulation : merci de prévenir 48h avant votre rendez-vous, sauf cas de force majeure. Un rendez-vous non décommandé sera facturé.",
    'Certaines mutuelles remboursent les séances de bien-être : renseignez-vous auprès de la vôtre. Partenaire Santéclair.',
    "Ne jamais interrompre un traitement médical en cours sans l'avis de votre médecin."
  ]
};

// Avis Google repris mot pour mot (prénom + initiale). Note globale : 5,0 sur 18 avis (fiche vérifiée le 14/10/2026).
export const rating = { value: '5,0', count: 18 };

export const reviews = [
  {
    author: 'Nathalie R.',
    text: "Je recommande vivement Nawal c’est une thérapeute exceptionnelle elle est à l’écoute et sa thérapie permet de se sentir vraiment mieux dès la 1 ère séance. Elle n’oblige en rien au niveau du nombre de séances quand on se sent mieux on n’y va plus. Elle a su m’apaiser et m’enlever les angoisses que j’avais depuis plus de 10 ans."
  },
  {
    author: 'Elisabeth M.',
    text: "Je recommande vivement cette hypnothérapeute ! C’est une professionnelle d’une grande compétence, à l’écoute, bienveillante et profondément humaine. Elle prend le temps de comprendre, d’expliquer et d’accompagner avec beaucoup de douceur et justesse. Je recommande les yeux fermés !"
  },
  {
    author: 'Sonia D.',
    text: "J ai consultée pour une simple séance et l incroyable a eu lieu une vraie libération suite à un soin quantique. Une thérapeute passionnée, profondément humaine qui ne regarde pas le temps mais le besoin, une écoute dans le respect de la personne et une grande disponibilité dans le suivi ."
  },
  {
    author: 'Pistach S.',
    text: "Personne dotée d'une bienveillance et d'une énergie positive qui vous met en confiance. Son travail effectué sur moi depuis 3 séances a été très efficace. Sérénité, sommeil, énergie vitale. Je la remercie du fond du coeur."
  },
  {
    author: 'Sébastien T.',
    text: "Nawel est une personne solaire qui me suit depuis maintenant ... Beaucoup d'années ! A l'écoute, douce et pertinente, je vais continuer de la consulter encore bien longtemps !"
  },
  {
    author: 'Marion A.',
    text: "Nawal est très à l'écoute et bienveillante. Je suis extrêmement reconnaissante qu'on me l'ai recommandée car c'est une praticienne incroyable ! Je la recommande les yeux fermés !"
  },
  {
    author: 'AnneC T.',
    text: "Praticienne découverte, par hasard, je l'ai conseillée à plusieurs personnes qui sont enthousiastes comme moi au sujet de Nawel et du bien-être éprouvé après une séance chez elle. Cette personne vous veut et vous fait du bien."
  },
  {
    author: 'Chris L.',
    text: "Je recommande cette praticienne très compétente et à l écoute de ses patients. Son travail est remarquable, j ai pu voir l amélioration au fil des séances et une libération de mes souffrances enchaînées. Merci Nawel"
  }
];

// Mentions légales — entreprise individuelle de la praticienne (SIREN de l'ancien site, confirmé au registre RNE :
// entrepreneur individuel actif, APE 8690F). L'ancienne SARL (790 479 745) est en liquidation.
export const legal = {
  owner: 'Nour-el Houda Nawel Billali',
  form: 'Entrepreneur individuel (EI)',
  tradeName: 'Alliance Corps Esprit',
  siren: '791 220 718',
  ape: '8690F — Activités de santé humaine non classées ailleurs',
  // Médiateur de la consommation (obligatoire) : nom et site de l'organisme auquel la praticienne a adhéré.
  // Vide = ligne non affichée. Le SDMH propose « Médiation Consommation Développement » (medconsodev.eu).
  mediator: { name: '', site: '' },
  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France',
    site: 'https://www.ovhcloud.com'
  }
};

// Adhésions professionnelles (logos en pied de page, liens vers les fiches d'adhérente de l'ancien site).
export const memberships = [
  {
    name: 'Syndicat des Sophrologues Professionnels',
    short: 'SSP',
    logo: '/images/logos/ssp-membre.png',
    width: 193,
    height: 235,
    href: 'https://www.syndicat-sophrologues-professionnels.fr/nbillali.html'
  },
  {
    name: "Syndicat des Métiers de l'Hypnose",
    short: 'SDMH',
    logo: '/images/logos/sdmh-membre.png',
    width: 242,
    height: 277,
    href: 'https://syndicat-hypnose.com/annuaire-sdmh/6204/billali-nawal/'
  }
];
