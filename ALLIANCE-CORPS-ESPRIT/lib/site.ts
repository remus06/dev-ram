// Toutes les informations du cabinet au même endroit.
// Sources : fiche Google « Nawal BILLALI » (adresse, coordonnées, horaires, avis),
// ancien site Wix alliancecorpsesprit.com (textes, tarifs, Facebook),
// registre RNE via infosociétés (SIREN, forme juridique).

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alliancecorpsesprit.fr';

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
  booking: 'https://liberlo.com/profil/nawal-billali',
  hours: [
    { label: 'Mardi — jeudi', value: '9h00 – 19h00', days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '19:00' },
    { label: 'Samedi', value: '9h30 – 18h00', days: ['Saturday'], opens: '09:30', closes: '18:00' }
  ],
  // Vidéo du hero générée avec Higgsfield (servie par leur CDN).
  // Pour l'héberger soi-même : télécharger le mp4 dans public/videos/ et mettre '/videos/hero.mp4'.
  heroVideo:
    'https://d8j0ntlcm91z4.cloudfront.net/user_3KPnPl19D9JuyhsM2qDki5awzVK/hf_20261008_140844_d34604c0-5e6c-4817-a60e-d8fb09785df3.mp4'
} as const;

export const links = {
  maps: `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat}%2C${site.geo.lng}`,
  waze: `https://waze.com/ul?ll=${site.geo.lat}%2C${site.geo.lng}&navigate=yes`,
  googleReviews:
    'https://www.google.com/maps/place/Nawal+BILLALI/@43.3752237,5.6071947,17z/data=!4m8!3m7!1s0x12c998f76310b891:0x64ec929e38824571!8m2!3d43.3752237!4d5.6071947!9m1!1b1'
};

export type SocialKey = 'instagram' | 'tiktok' | 'facebook' | 'whatsapp';

// Instagram et TikTok : aucun compte trouvé — coller ici les URL des profils.
export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'instagram', label: 'Instagram', href: '' },
  { key: 'tiktok', label: 'TikTok', href: '' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Alliance-Corps-Esprit-314572278901977/' },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/33676486927' }
];

export const navLinks = [
  { href: '#approche', label: 'Approche' },
  { href: '#outils', label: 'Outils' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#cabinet', label: 'Le cabinet' },
  { href: '#avis', label: 'Avis' }
];

export const practices = [
  'Sophrologie',
  'Hypnose ericksonienne',
  'Méthode Vittoz',
  'Access Bars',
  'EFT',
  'Psycho-Bio-Acupressure',
  'DEEPLI',
  'VaguExpans',
  "Relation d'aide"
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
    title: 'Énergétique',
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

// Tarifs repris de l'ancien site (page « Tarifs & Prestations »).
export const prices = {
  individual: [
    { name: 'Hypnose', duration: '1h30', price: '80 €' },
    { name: 'Soins énergétiques', duration: '1h30*', price: '80 €' },
    { name: 'VaguExpans', duration: '1h', price: '80 €' },
    { name: 'Access Bars', duration: '1h30*', price: '80 €' },
    { name: 'Sophrologie', duration: '45 min à 1h', price: '60 €' },
    { name: "Étudiant jusqu'à 20 ans", duration: '', price: '70 €' }
  ],
  shared: [
    { name: 'Sophro Team', duration: '2 à 4 pers. · 1h', price: '35 €' },
    { name: 'Atelier à thème', duration: '4h', price: '90 €' }
  ],
  notes: [
    'Le premier rendez-vous dure 2h.',
    "* Les soins énergétiques peuvent durer plus de 1h30 selon ce que le corps a à libérer : le tarif peut alors évoluer, sans jamais dépasser 100 €. Toute heure commencée est due.",
    "Séances à partager, ateliers et groupes : contactez-moi directement par téléphone.",
    "Annulation : merci de prévenir 48h avant votre rendez-vous, sauf cas de force majeure. Un rendez-vous non décommandé sera facturé.",
    'Certaines mutuelles remboursent les séances de bien-être. Partenaire Santéclair.'
  ]
};

// Avis Google repris mot pour mot (prénom + initiale). Note globale : 5,0 sur 17 avis.
export const rating = { value: '5,0', count: 17 };

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

// Mentions légales — registre RNE (infosociétés), à faire valider par la cliente.
export const legal = {
  company: 'ALLIANCE CORPS ESPRIT',
  form: 'SARL au capital de 5 000 €',
  siren: '790 479 745',
  siret: '790 479 745 00016',
  vat: 'FR28790479745',
  ape: '9609Z',
  registeredOffice: 'ZAC La Tuilerie, Rés. La Tuilerie Bât. A, 13112 La Destrousse',
  director: 'Nour-el Houda Nawel Billali',
  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France',
    site: 'https://www.ovhcloud.com'
  }
};
