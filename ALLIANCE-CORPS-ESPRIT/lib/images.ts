// Images reprises de l'ancien site Wix.
// Elles sont encore servies par static.wixstatic.com : à rapatrier dans public/images/
// avant la fermeture du site Wix (voir README, section « Images »).

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`;

export const images = {
  portrait: { src: wix('b9a024_93afd398ec084fe2ac4d64156c2fb28d.jpg'), alt: 'Nawel Billali, sophrologue et hypnothérapeute' },
  cabinet: { src: wix('b9a024_8ece53cb4b4f4fc3afb72a6c33bec0e9.jpg'), alt: 'Cabinet de sophrologie à La Destrousse' },
  hypnoseCoaching: { src: wix('b9a024_f5781b108ea14700b84e933506202e91.jpg'), alt: 'Hypnose thérapeutique et coaching' },
  relaxation: { src: wix('b9a024_7da8506bac844cd4a241123614853dfc.jpg'), alt: 'Relaxation et bien-être' },
  energetique: { src: wix('b9a024_f9053a7fbda940cbbdf853eecab056a2~mv2.jpg'), alt: 'Soins énergétiques' },

  hypnose: { src: wix('b9a024_7cac76d0504149e79b2be796075f6da4~mv2.jpg'), alt: 'Hypnose ericksonienne' },
  sophrologie: { src: wix('b9a024_91b590dcd59dd400f9a7f593e4222638.jpg'), alt: 'Sophrologie et sommeil' },
  vittoz: { src: wix('b9a024_aab296abb2f4445ebbbf7769e9f78894.jpg'), alt: 'Méthode Vittoz' },
  pba: { src: wix('b9a024_cec56eca27074a12a9de4acf701de245.jpg'), alt: 'Psycho-Bio-Acupressure' },
  eft: { src: wix('b9a024_5e99831f27a74cab931e2132d185c735~mv2_d_2509_1959_s_2.jpg'), alt: 'EFT, technique de libération émotionnelle' },
  accessBars: { src: wix('b9a024_cd4be63a837641909b40213afee3a024~mv2.jpg'), alt: 'Séance Access Bars à La Destrousse' },

  acouphenes: { src: wix('b9a024_8abb189766334ae790b372a41842433f~mv2.jpg'), alt: 'Acouphènes et sophrologie' },
  hyperacousie: { src: wix('b9a024_45378ad7dddd4ba9953f83160ce02343~mv2.jpg'), alt: 'Hyperacousie, vertiges de Ménière et sophrologie' },
  fibromyalgie: { src: wix('b9a024_935b28743ed7478aa4f9bc8fb50cc339.jpg'), alt: 'Fibromyalgie et sophrologie' },

  logoSdmh: { src: wix('b9a024_32eb487269654bd6aea81977c4094fe0~mv2.png'), alt: 'Membre du Syndicat des Métiers de l’Hypnose' },
  logoSsp: { src: wix('b9a024_228b34e1b1ce413cb53844ea7e01be0f~mv2.png'), alt: 'Membre du Syndicat des Sophrologues Professionnels' }
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
