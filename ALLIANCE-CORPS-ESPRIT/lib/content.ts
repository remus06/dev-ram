// Textes repris de l'ancien site (orthographe corrigée, contenu inchangé).
import { images, type SiteImage } from './images';

export type Block = { h: string } | { p: string } | { ul: string[] } | { ol: string[] };

export type Page = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  image: SiteImage;
  body: Block[];
};

export type Approche = Page & { category: 'corporel' | 'energetique' };

export const categories = {
  corporel: { title: 'Corporel & sensoriel', image: images.hypnoseCoaching },
  energetique: { title: 'Énergétique', image: images.energetique }
} as const;

export const approches: Approche[] = [
  {
    slug: 'hypnose',
    category: 'corporel',
    title: 'Hypnose ericksonienne',
    kicker: 'Hypnose thérapeutique',
    summary:
      "L'hypnose ericksonienne s'inscrit dans les thérapies brèves. C'est un profond état d'éveil à soi, contrairement à ce que l'on pourrait croire.",
    description:
      "Hypnose ericksonienne et thérapeutique à La Destrousse, région d'Aubagne : un état d'ouverture à soi pour accéder à ses ressources. Séances avec Nawel Billali.",
    image: images.hypnose,
    body: [
      { h: "Qu'est-ce que l'hypnose ?" },
      {
        p: "L'hypnose ericksonienne s'inscrit dans les thérapies brèves orientées solutions. À ne pas confondre avec l'hypnose de spectacle."
      },
      {
        p: "Il est très difficile de définir l'hypnose en disant que c'est un simple état modifié de conscience (EMC). Certes, la personne sous hypnose est dans un état de conscience décalé permettant la communication facile avec les parties profondes qui sont au cœur du problème. L'état hypnotique permet de suspendre provisoirement l'esprit critique, la limitation des pensées ainsi que les croyances qui parasitent l'existence de l'être. Il ouvre sur un champ de possibilités, de créativité, de ressources pour trouver en soi une nouvelle manière d'agir plus écologique."
      },
      {
        p: "Le sujet est accompagné par la voix du praticien, qui est juste là pour le guider en utilisant les portes d'entrée du sujet afin de faciliter l'émergence de cet état privilégié indispensable au changement."
      },
      {
        p: "Savez-vous que l'état modifié de conscience est un état naturel ? C'est un état dans lequel chacun se retrouve quotidiennement, absorbé par un film, un roman ou dans une rêverie… ce n'est que ça."
      },
      {
        p: "La transe hypnotique favorise la communication avec la partie inconsciente, que j'appelle aussi la tour de contrôle, qui veille sur notre bien-être, notre homéostasie, et ouvre sur l'hémisphère droit, zone de la créativité et du rêve, un lieu riche en ressources."
      },
      {
        p: "Le travail de Milton Erickson consiste à dépotentialiser le cerveau gauche (conscient) pour permettre l'activation du cerveau droit (inconscient) pendant la transe, puis à solliciter de nouveau le cerveau gauche pour effectuer une synthèse du travail accompli."
      },
      {
        p: "Milton Erickson, psychiatre et hypnothérapeute, a révolutionné le monde de la psychothérapie en concevant l'inconscient non seulement comme une source de conflit, mais aussi comme un réservoir de solutions. Pour lui, l'état modifié de conscience aide à contourner les résistances pour accéder aux ressources et capacités oubliées."
      },
      {
        p: "J'aime l'idée que l'inconscient est comme un enfant libre, imprévisible et créatif ; il peut explorer d'autres chemins illimités, de nouvelles possibilités d'être soi à notre insu. Alors, selon vous, l'état hypnotique est-il une soumission, ou n'est-il pas un état d'ouverture à soi sans filtres ?"
      },
      { h: "L'hypnose, pour qui, pourquoi ?" },
      {
        p: "L'hypnose est un bel outil de changement rapide, une fenêtre vers soi. Tout le monde peut en faire l'expérience — adultes, adolescents, enfants, femmes enceintes — sauf les personnes souffrant de pathologie psychiatrique dissociative, dans le cadre du développement personnel et/ou thérapeutique."
      },
      {
        p: "L'hypnose est souvent utilisée pour : le sevrage tabagique, l'addiction (en complément d'un accompagnement addictologue), les comportements compulsifs, la douleur, les troubles digestifs, les troubles psychologiques (stress, phobies, anxiété), les maladies psychosomatiques, les maladies de la peau (eczéma, psoriasis…), la spasmophilie, les troubles de la voix et du chant, mais aussi les problèmes de trac, de mémoire, et bien d'autres."
      },
      {
        p: "Il est très important de noter que la thérapie par l'hypnose est une thérapie active : l'engagement du sujet est un facteur déterminant de sa réussite. Dans cet état de transe, le sujet ose voir, dire, être et, mieux encore, transformer et améliorer le cours de sa vie sans l'influence du praticien ; ce dernier ne fait qu'ouvrir le chemin vers l'inconscient, aux confins de nos souvenirs."
      }
    ]
  },
  {
    slug: 'sophrologie',
    category: 'corporel',
    title: 'Sophrologie',
    kicker: 'La science de la conscience',
    summary:
      'La science de la conscience et des valeurs de l’être. Une méthode prophylactique, pédagogique et thérapeutique, un soutien à la médecine — et une philosophie de vie.',
    description:
      "Sophrologie à La Destrousse (13112) : gestion du stress, sommeil, préparation aux examens, acouphènes, douleur. Sophrologue titre RNCP, région d'Aubagne.",
    image: images.sophrologie,
    body: [
      { h: 'Quelques mots sur la sophrologie' },
      {
        p: "La sophrologie est une méthode scientifique, un ensemble de pratiques psycho-corporelles, une véritable philosophie de vie, une pédagogie susceptible d'influer sur les phénomènes de la conscience. Elle est née à Madrid en 1960, des recherches du neuropsychiatre Alfonso Caycedo."
      },
      {
        p: "C'est une synthèse de différentes techniques et d'exercices basés sur la détente ; elle harmonise le corps et l'esprit afin d'accéder à un état de bien-être global. La sophrologie éveille la conscience en dynamisant les ressources positives de l'être et aide à l'autonomie."
      },
      {
        p: "Elle permet de donner naissance à de meilleures possibilités d'adaptation, de prendre conscience de ses ressources et de ses capacités, de porter un nouveau regard sur soi, sur les autres et sur la vie. Elle est pratiquée dans de nombreux secteurs médicaux, sociaux, éducatifs, et en entreprise."
      },
      { p: 'Ses racines grecques indiquent sa signification :' },
      { ul: ['SOS : harmonie, équilibre', 'PHREN : esprit, conscience', 'LOGOS : science, étude'] },
      { h: 'Les trois principes de la sophrologie' },
      {
        ol: [
          "Le principe de l'action positive : toute action positive dirigée vers la conscience se répercute positivement sur tous les éléments psychiques, et inversement.",
          "Le principe de la réalité objective : se rendre compte de l'état de sa propre conscience et tenir compte de l'état de conscience du sujet.",
          "Le principe du schéma corporel comme réalité vécue : issu de la neurophysiologie, il sert à faire progresser la conscience de soi."
        ]
      },
      { h: "À qui s'adresse la sophrologie ?" },
      {
        p: "Son principal postulat étant la recherche du bien-être, la sophrologie s'adresse à tous ceux qui souhaitent mieux vivre leur quotidien : adolescents, adultes et personnes âgées. Elle peut également s'appliquer aux enfants. Qu'elle soit thérapeutique, pédagogique ou prophylactique, elle délivre un message positif en proposant une philosophie de vie dont le but est la recherche de l'équilibre et de l'harmonie."
      },
      { h: "Champs d'application" },
      { p: 'Prophylaxie — dans le cadre de la prévention de la santé physique et mentale :' },
      {
        ul: [
          'Gérer le stress, les émotions',
          'Prévenir les maladies fonctionnelles',
          'Rechercher le bien-être',
          'Développer sa concentration',
          'Développement personnel, estime et confiance en soi'
        ]
      },
      { p: 'Pédagogie — découverte, conquête et transformation :' },
      {
        ul: [
          'Préparer un examen, un entretien',
          'Améliorer ses performances sportives',
          'Préparer une intervention chirurgicale',
          'Optimiser son potentiel et ses capacités',
          'Accueillir un enfant',
          'Changement de situation (divorce, licenciement, mariage…)'
        ]
      },
      { p: 'Thérapie — soutien complémentaire à la médecine :' },
      {
        ul: [
          'Mieux vivre avec ses acouphènes, l’hyperacousie',
          'Équilibrer son poids',
          'Combattre l’anxiété, les troubles du sommeil',
          'Gérer la douleur',
          'Gérer les dépendances et addictions, sevrage tabagique'
        ]
      }
    ]
  },
  {
    slug: 'methode-vittoz',
    category: 'corporel',
    title: 'Méthode Vittoz',
    kicker: 'La rééducation du contrôle cérébral',
    summary:
      "Découvrir comme l'enfant au réveil. Une thérapie et une pédagogie humaniste, à médiation corporelle et sensorielle, qui vise la sécurité intérieure et l'autonomie.",
    description:
      "La méthode Vittoz, approche psychocorporelle qui rééquilibre le fonctionnement du cerveau et apaise le mental par des exercices simples basés sur les sensations. La Destrousse.",
    image: images.vittoz,
    body: [
      {
        p: "La méthode Vittoz doit son nom au médecin suisse Roger Vittoz (1863-1925), contemporain de Freud. Il découvre en 1906 que le cerveau émet une « onde », perceptible par la main après un certain entraînement, dont les caractéristiques correspondent à la nature de l'activité cérébrale. Il met au point sa méthode de rééducation du contrôle cérébral en 1910 et publie en 1911 son traité « Traitement des psychonévroses par la rééducation du contrôle cérébral »."
      },
      {
        p: "Le Dr Vittoz est l'un des premiers psychosomaticiens à s'intéresser aux conséquences physiques du stress, des blessures intérieures et des émotions, et à avoir eu l'intuition de la plasticité neuronale. Son objectif était de s'attaquer à la cause du déséquilibre et non au simple symptôme, et de donner au patient son autonomie — « les moyens de se guérir lui-même » — en renforçant les ressources de son moi conscient."
      },
      {
        p: "C'est une thérapie à médiation corporelle et sensorielle, une philosophie, une méthode simple, une technique de changement, une ouverture sur la conscience de soi. Elle s'adresse à la personne dans sa globalité — physique, morale, intellectuelle et spirituelle — au moyen d'exercices simples et pratiques que le sujet intègre dans son quotidien. Elle appartient au courant des thérapies humanistes, d'orientation phénoménologique."
      },
      { h: 'Les principes de la méthode' },
      {
        p: "Contrairement aux psychothérapies de type verbal, cette méthode s'intéresse à l'organe (le cerveau) et non à la pensée. Le cerveau humain fonctionne de deux façons opposées mais indissociables :"
      },
      {
        ul: [
          'La réceptivité : il reçoit des informations concrètes transmises par les cinq sens.',
          "L'émissivité : il est capable de synthèse, de réflexion, de jugement, d'expression, de décision."
        ]
      },
      {
        p: "Un cerveau trop émissif se trouve en tension, ce qui provoque des dysfonctionnements et des troubles nerveux. Nous privilégions souvent l'émissivité au détriment de la réceptivité. La méthode Vittoz rééduque ces deux activités essentielles, dont l'harmonie est une condition de l'équilibre cérébral."
      },
      {
        p: "La rééducation de la réceptivité s'exerce par des actes conscients et l'accueil des sensations pures, qui permettent de retrouver le goût de la vie. Celle de l'émissivité s'effectue par des exercices mentaux qui assouplissent la concentration, et par les actes de la volonté, qui permettent de trouver la liberté et la force de se reconstruire."
      },
      {
        p: "Cette gymnastique cérébrale fortifie le conscient et rétablit l'équilibre : confiance en soi, justesse des sensations, précision de la pensée, concentration souple, capacité à faire des choix, gestion juste des émotions. La répétition des exercices favorise la création de nouveaux circuits neuronaux et la mise en place de « bonnes habitudes cérébrales »."
      },
      { h: "À qui s'adresse-t-elle ?" },
      {
        p: "À tous ceux qui se sentent stressés, anxieux, déprimés, angoissés, fatigués, dispersés ; à ceux qui souffrent de troubles nerveux (phobies, obsessions, hyperémotivité…), de troubles de la mémoire, de la concentration, du sommeil. C'est une excellente méthode pour les enfants, mais aussi pour les « bien-portants », en prévention."
      }
    ]
  },
  {
    slug: 'psycho-bio-acupressure',
    category: 'energetique',
    title: 'Psycho-Bio-Acupressure (PBA)',
    kicker: 'Libération émotionnelle',
    summary:
      'Une technique de libération des blocages émotionnels liés aux expériences du passé et de rééquilibrage énergétique, simple et efficace, mise au point par le Dr Jean-Noël Delatte.',
    description:
      'La Psycho-Bio-Acupressure (PBA) : libération des blocages émotionnels et rééquilibrage énergétique par une acupressure simplifiée à 5 points. La Destrousse.',
    image: images.pba,
    body: [
      {
        p: "Une méthode basée sur les propriétés quantiques du cerveau. C'est une technique de libération émotionnelle et de rééquilibrage énergétique simple et efficace, mise au point après 20 ans de recherches par le Dr Jean-Noël Delatte, médecin qui s'est intéressé à l'acupuncture, l'homéopathie et la mésothérapie."
      },
      {
        p: "La PBA permet de libérer les blocages émotionnels liés aux mauvaises expériences du passé, enregistrées par l'inconscient à notre insu. Ces blocages se logent dans le lobe temporal (l'amygdale, centre de la peur et de l'anxiété, et l'hippocampe, centre des apprentissages)."
      },
      {
        p: "C'est une sorte d'acupuncture simplifiée à 5 points : une stimulation successive par une légère pression, en veillant sans cesse à rester sur le bon système énergétique. Cinq points constituent un circuit d'acupressure qui laisse une empreinte sur le corps et dans le cerveau, chaque point ayant sa correspondance au niveau des aires cérébrales. Il existe 22 circuits, correspondant chacun à une énergie perturbatrice."
      },
      {
        p: "Le praticien utilise les circuits selon un protocole défini après anamnèse, et fixe l'objectif en accord avec le sujet."
      },
      { h: 'Comment se déroule une séance ?' },
      {
        p: "La première phase est le rééquilibrage de l'énergie, par la pression de points précis qui impriment sur le corps un circuit spécifique à l'émotion que nous souhaitons transformer. Ces circuits sont groupés en protocoles selon la problématique ; en quelques minutes, le sujet se sent plus serein."
      },
      {
        p: "La seconde concerne la libération des blocages émotionnels. Le praticien les identifie par une étude du pouls du sujet et son propre ressenti, puis permet de les déloger par l'action conjointe de la verbalisation, pour la prise de conscience, et de la libération d'endorphines liée à l'application des circuits."
      },
      {
        p: "Si une psychothérapie d'un autre type s'avère nécessaire, son effet sera potentialisé par l'utilisation en parallèle de la PBA. Au bout de quelques semaines, le sujet se sent plus en accord avec sa nature profonde, recentré, libéré de ses freins sans avoir à revenir sur les histoires du passé."
      }
    ]
  },
  {
    slug: 'eft',
    category: 'energetique',
    title: 'EFT',
    kicker: 'Emotional Freedom Techniques',
    summary:
      "Une technique de thérapie brève et de rééquilibrage énergétique, à l'approche holistique, qui surprend par sa simplicité et libère rapidement des émotions négatives qui encombrent.",
    description:
      "L'EFT (Emotional Freedom Techniques) : libérer les émotions négatives par le tapotement des méridiens, sans revivre les souvenirs douloureux. La Destrousse, région d'Aubagne.",
    image: images.eft,
    body: [
      {
        p: "Gary Craig, ingénieur de Stanford passionné par la psychologie, s'intéresse à toutes les méthodes qui donnent des résultats. Il découvre et perfectionne une technique qu'il baptise EFT en 1993, aux États-Unis, après avoir suivi la formation TFT (Thought Field Therapy) de Roger Callahan, psychologue et hypnothérapeute spécialisé dans les phobies. Il cherche alors à simplifier la méthode, à la rendre plus rapide et accessible à tous."
      },
      {
        p: "Depuis des millénaires, les Chinois ont décrit un système de circuits énergétiques qui traverse le corps : les méridiens, sur lesquels sont fondées l'acupuncture, l'acupression et bien d'autres techniques. En tapotant près des extrémités des méridiens, l'EFT agit sur notre santé émotionnelle."
      },
      {
        p: "Dans les thérapies conventionnelles, on travaille sur le souvenir, et le sujet revit parfois plus d'une fois la douleur émotionnelle. L'EFT respecte le souvenir et travaille au niveau de la véritable cause. Il est seulement important de se souvenir de son problème ; les tapotements harmonisent le système énergétique et un calme intérieur prend la place de l'émotion négative."
      },
      {
        p: "Cette technique s'adresse à toutes les personnes souhaitant faire la démarche de se prendre en charge ; elle fonctionne sur les adultes comme sur les enfants. Comme toute relation d'aide, il est important que le demandeur soit motivé."
      },
      {
        p: "Elle part du postulat que le corps enregistre la souffrance : à travers le traitement énergétique du malaise enregistré dans le corps, on apaise le malaise psychologique. Elle permet aussi de travailler des troubles provenant de l'enfance préverbale, enregistrés dans le corps sans souvenirs précis."
      }
    ]
  },
  {
    slug: 'access-bars',
    category: 'energetique',
    title: 'Access Bars®',
    kicker: 'Access Consciousness®',
    summary:
      "Développée par Gary Douglas et Dain Heer dans les années 1990, une approche de libération des mémoires par le toucher, qui aide à découvrir ce qui fonctionne pour la personne.",
    description:
      "Bars d'Access Consciousness® à La Destrousse : douce stimulation de 32 points crâniens pour une relaxation profonde et le lâcher-prise. Nawel Billali, facilitatrice Access Bars.",
    image: images.accessBars,
    body: [
      { h: "Les Bars d'Access Consciousness®, qu'est-ce que c'est ?" },
      {
        p: "C'est une douce stimulation de 32 points crâniens formant 16 barres énergétiques, chacune reliée à un domaine précis de la vie."
      },
      {
        p: "L'activation de ces points libère des mémoires stockées dans le corps et agit comme un véritable nettoyage, qui crée de l'espace pour d'autres possibilités positives et pour l'intuition. Les croyances, jugements, émotions — tout ce que le mental utilise pour envoyer des réponses automatiques — évoluent vers un champ de possibilités plus large."
      },
      {
        p: "L'effet est immédiat : une relaxation profonde et une sensation de légèreté apaisent après le soin. Chaque séance est une occasion de déblayer les mémoires négatives qui vous maintiennent captif."
      },
      {
        p: "Les séances sont accessibles à tous, y compris aux femmes enceintes, car il s'agit d'une douce stimulation. Access Consciousness favorise la réceptivité, le lâcher-prise et l'ouverture d'esprit. Le praticien ne « donne » rien qui vienne de lui-même : ni le sujet ni le praticien ne peuvent savoir ce qui va se passer pendant et après la séance."
      },
      { h: 'Les processus corporels' },
      {
        p: "Bien plus que des points sur la tête, Access Consciousness, ce sont aussi des processus corporels qui nourrissent et libèrent le corps, et la verbalisation dite « déblayage ». Gary Douglas dit : « Faites savoir aux corps le cadeau qu'ils sont, et ils seront un cadeau pour vous ! »"
      },
      {
        p: "Vous pouvez aussi recevoir le processus corporel Facelift d'Access Consciousness, qui associe un travail sur le corps à un nettoyage des croyances limitantes."
      }
    ]
  }
];

export const articles: Page[] = [
  {
    slug: 'acouphenes',
    title: 'Acouphènes & sophrologie',
    kicker: 'Article',
    summary:
      "L'acouphène est un bruit perçu uniquement par la personne, sans stimulus sonore extérieur. La sophrologie aide à s'en différencier et à le mettre à distance.",
    description:
      'Acouphènes : comprendre ce bruit subjectif et ce que la sophrologie apporte pour le mettre à distance et retrouver du confort. Sophrologue à La Destrousse.',
    image: images.acouphenes,
    body: [
      {
        p: "L'acouphène est un bruit subjectif, entendu uniquement par le sujet, sans aucun stimulus sonore extérieur. Il correspond à des bourdonnements ou des sifflements continus dans une oreille, parfois les deux, ou dans la tête."
      },
      { p: 'Les sons entendus peuvent être de différentes natures :' },
      { ul: ['des sons graves (bourdonnements)', 'des sons aigus (sifflements)', 'continus ou pulsatiles'] },
      {
        p: "Les sons perçus sont le plus souvent complexes et peuvent s'apparenter à une sonnerie, un sifflement, un bruit de vapeur, de moteur, un grincement, un chant de cigale."
      },
      { h: 'Il existe deux formes d’acouphène' },
      {
        ol: [
          "L'acouphène subjectif, dont l'origine peut se situer à n'importe quel niveau des voies auditives, du conduit de l'oreille externe jusqu'au cerveau.",
          "L'acouphène objectif, peu fréquent : les bruits entendus résultent d'anomalies vasculaires, de contractions anormales des muscles de la sphère ORL, ou de défauts structuraux de l'oreille interne."
        ]
      },
      {
        p: "Les origines des acouphènes ne sont pas toutes connues. Ils peuvent être associés à différentes affections : troubles de l'oreille externe, moyenne ou interne, syndrome de Ménière, neurinome de l'acoustique, traumatisme crânien, hypertension, troubles endocriniens…"
      },
      { h: 'Apport de la sophrologie' },
      {
        p: "La sophrologie est un outil simple et efficace qui permet d'apprendre à se différencier de son acouphène et/ou de son hyperacousie, et de prendre conscience que l'on n'est pas « l'acouphène » mais une personne ayant un acouphène."
      },
      {
        p: "Il n'est pas question de nier l'existence de ce bruit parasite, souvent accompagné d'hyperacousie, de vertiges ou d'une baisse de l'audition, mais de « faire sien ce que l'on ne peut changer ». Le travail sophrologique aide à se défocaliser, à mettre son acouphène à distance et à reprendre sa vie en main. C'est également un très bon outil pour gérer le stress, l'angoisse et les émotions."
      },
      {
        p: "La technique s'appuie sur des protocoles spécifiques, validés par la commission d'étude des acouphènes de l'Observatoire national de la sophrologie. Les exercices, axés sur l'écoute et la conscience du corps, la respiration, l'éveil des sens et la visualisation positive, apaisent le système nerveux et aident à diminuer la gêne perçue. La personne peut ainsi envisager sa vie autrement, prendre conscience de ses capacités et sortir de l'isolement."
      }
    ]
  },
  {
    slug: 'hyperacousie-vertiges',
    title: 'Hyperacousie, vertiges de Ménière & sophrologie',
    kicker: 'Article',
    summary:
      "Intolérance aux bruits du quotidien, vertiges, maladie de Ménière : comprendre ces troubles de l'oreille interne et le rôle des exercices sophrologiques.",
    description:
      "Hyperacousie, vertiges et maladie de Ménière : définitions et apport de la sophrologie pour renforcer l'équilibre. Sophrologue à La Destrousse, région d'Aubagne.",
    image: images.hyperacousie,
    body: [
      { h: "Qu'est-ce que l'hyperacousie ?" },
      {
        p: "L'hyperacousie est un dysfonctionnement de l'oreille interne. L'ouïe n'est pas plus fine, mais la personne perçoit les bruits beaucoup plus fort, ce qui la pousse à s'isoler pour fuir le bruit. L'audition n'est pas atteinte, mais le niveau de tolérance est réduit face à des niveaux sonores que d'autres jugent banals."
      },
      {
        p: "L'exposition à ces sons peut provoquer des douleurs ou des acouphènes qui durent plus ou moins longtemps. Contrairement à une idée reçue, si une personne hyperacousique se force à s'exposer aux sons qui la font souffrir au lieu de s'en protéger, son hyperacousie s'aggrave. Elle est souvent la séquelle d'un traumatisme acoustique et accompagne l'acouphène dans 40 % des cas."
      },
      { h: "Qu'est-ce que les vertiges ?" },
      {
        p: "Une impression de mouvement du corps ou de l'environnement, très souvent une impression de rotation. Le système vestibulaire de l'oreille, atteint lors des épisodes de vertige, est responsable de l'orientation dans l'espace et de la posture."
      },
      { h: 'La maladie de Ménière' },
      {
        p: "C'est une affection de l'oreille interne : un dysfonctionnement de la sécrétion et de la résorption de ses liquides, qui engendre des poussées d'œdème définies par l'association de quatre symptômes :"
      },
      {
        ul: [
          'crises de vertige',
          'acouphènes de tonalité grave',
          "sensation de plénitude de l'oreille",
          "baisse de l'acuité auditive"
        ]
      },
      {
        p: "Elle touche les hommes comme les femmes. L'oreille interne dysfonctionnant, les exercices sophrologiques proposent de renforcer les autres activateurs de l'équilibre."
      }
    ]
  },
  {
    slug: 'fibromyalgie',
    title: 'Fibromyalgie & sophrologie',
    kicker: 'Article',
    summary:
      "Douleurs diffuses, fatigue constante, sommeil perturbé : la sophrologie aide à rompre le cercle vicieux de la douleur et de l'anxiété.",
    description:
      'Fibromyalgie : comprendre la maladie et ce que la sophrologie apporte face à la douleur, la fatigue et l’anxiété. Sophrologue à La Destrousse.',
    image: images.fibromyalgie,
    body: [
      { h: "Qu'est-ce que la fibromyalgie ?" },
      {
        p: "La fibromyalgie a été reconnue par l'Organisation mondiale de la santé et est traitée en rhumatologie. Elle touche principalement des femmes de 30 ans et plus. Ses premiers symptômes sont les douleurs articulaires, la fatigue et les troubles du sommeil."
      },
      {
        p: "Elle se caractérise par des douleurs diffuses dans tout le corps et une fatigue physique constante. La personne a la sensation d'être en état d'épuisement perpétuel, le cycle du sommeil profond étant perturbé. Le facteur déclenchant reste inconnu ; on peut soupçonner des chocs psychologiques, émotionnels ou physiques. En tout cas, le stress est un facteur aggravant."
      },
      {
        p: "Pour soulager les symptômes, le traitement médical associe différentes molécules ; plusieurs autres pistes sont à l'étude en complément. L'éducation du patient face à la maladie est primordiale, avec le soutien de son entourage. En dehors des traitements conventionnels, différentes approches se sont révélées utiles, comme la sophrologie."
      },
      { h: "L'apport de la sophrologie" },
      {
        p: "La personne atteinte ressent une fatigue chronique et un état anxieux qui s'auto-entretiennent, une peur permanente de souffrir davantage ; elle réduit donc ses activités, finit par s'isoler et perd confiance en elle. En agissant simultanément sur ces différents symptômes, la sophrologie permet de modifier le comportement et d'enrayer le cercle vicieux."
      },
      {
        p: "Elle apprend à faire face à ses émotions, à aborder la maladie différemment pour ne plus la subir. La personne reprend confiance en elle et gagne en qualité de vie. Les exercices sont axés sur la conscience du corps, la respiration, l'éveil des sens et la visualisation positive, pour envisager sa vie autrement qu'à travers la maladie."
      }
    ]
  }
];

export const champsAction = [
  {
    title: 'Prophylaxie',
    text: 'Préserver sa santé, retrouver un état de bien-être, vivre en conscience et devenir plus présent à soi et aux autres.'
  },
  {
    title: 'Développement personnel',
    text: 'Changer pour oser vivre pleinement sa vie, renforcer sa confiance en soi et son image, prendre la parole avec aisance.'
  },
  {
    title: 'Pédagogie',
    text: 'Améliorer sa concentration, sa mémoire, ses performances intellectuelles et physiques, se préparer à un examen.'
  },
  {
    title: 'Thérapie',
    text: 'Troubles anxieux, alimentaires, du sommeil, addictions, mal-être ; douleurs, acouphènes, vertiges et hyperacousie.'
  }
];

export const tarifs = {
  individuel: [
    { label: 'Hypnose', duration: '1h30', price: 80 },
    { label: 'Soins énergétiques', duration: '1h30*', price: 80 },
    { label: 'VaguExpans', duration: '1h', price: 80 },
    { label: 'Access Bars', duration: '1h30*', price: 80 },
    { label: "Étudiant jusqu'à 20 ans", duration: '', price: 70 },
    { label: 'Sophrologie', duration: '45 min à 1h', price: 60 }
  ],
  partage: [
    { label: 'Sophro Team (2 à 4 personnes)', duration: '1h', price: 35 },
    { label: 'Atelier à thème', duration: '4h', price: 90 }
  ],
  ateliers: ['Sophro Team', 'Douleur & mieux-être', 'Atelier du mois'],
  infos: [
    'Le premier rendez-vous dure 2h.',
    "* Les séances de soins énergétiques peuvent durer plus de 1h30, selon ce que le corps a à libérer : le tarif est alors susceptible d'évoluer, sans jamais dépasser 100 €. Toute heure commencée est due.",
    'Pour toute annulation, merci de prévenir 48h avant votre rendez-vous, sauf cas de force majeure.',
    'Un rendez-vous non décommandé pénalise une autre personne et la prive de soin ; il vous sera donc facturé.'
  ]
};
