import { Project } from './types';

export function getProjects(lang: 'fr' | 'en'): Project[] {
  return [
    {
      id: 'atmo',
      title: lang === 'fr' ? "Ingénierie qualité de l'air" : 'Air quality engineering',
      category: lang === 'fr' ? 'Data & bases de données' : 'Data & databases',
      status: 'completed',
      context:
        lang === 'fr'
          ? "Mise en place de l'inventaire spécialisé annuel sur l'historique 2008-2023 pour l'observatoire de la qualité de l'air."
          : 'Implementation of the specialized annual inventory on the 2008-2023 history for the air quality observatory.',
      results:
        lang === 'fr'
          ? 'Quantification des émissions PES et GES permettant un suivi précis et des études territoriales ciblées. Projet abouti.'
          : 'Quantification of PES and GHG emissions allowing precise monitoring and targeted territorial studies. Completed.',
      story:
        lang === 'fr'
          ? "Au sein de l'observatoire, nous avons travaillé sur un volume important de sources de données à la maille régionale pour cet inventaire historique 2008-2023.||L'enjeu quotidien est de coordonner le travail d'une grande équipe pour assurer le traitement de données et le reporting sur des secteurs clés : industrie, transports, déchets, énergie, bientôt agricole.||Je gère plusieurs bases de données, les calculs et l'automatisation des processus de quantification des émissions PES et GES, ainsi que la visualisation en dashboards."
          : "Within the observatory, we worked on a large volume of regional-scale data sources for this 2008-2023 historical inventory.||The daily challenge is coordinating a large team to ensure data processing and reporting on key sectors: industry, transport, waste, energy, soon agriculture.||I manage several databases, the calculations and automation of PES/GHG emission quantification, and the dashboard visualizations.",
      stack: ['PostgreSQL', 'PostGIS', 'Python', 'QGIS', 'PgAdmin'],
      image: 'https://images.unsplash.com/photo-1590055531615-f16d36fed8a1?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1590055531615-f16d36fed8a1?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    {
      id: 'koukiz',
      title: 'Koukiz31 | Cookies Premium',
      category: lang === 'fr' ? 'E-commerce & growth' : 'E-commerce & growth',
      status: 'in-progress',
      context:
        lang === 'fr'
          ? 'Lancement d\u2019une marque de cookies avec livraison à domicile sur Toulouse. Projet en cours.'
          : 'Launch of a premium cookie brand with home delivery in Toulouse. Ongoing.',
      results:
        lang === 'fr'
          ? 'Construction d\u2019une identité forte et d\u2019un tunnel de vente performant pour la livraison locale.'
          : 'Building a strong identity and a high-performing sales funnel for local delivery.',
      story:
        lang === 'fr'
          ? 'L\u2019ambition est claire : devenir le réflexe gourmand à Toulouse. Nous construisons une plateforme capable de gérer des livraisons à flux tendus.||Le projet est en phase de build. L\u2019interface utilisateur est peaufinée pour être aussi soignée que les cookies eux-mêmes.||L\u2019accent est mis sur l\u2019acquisition client locale et la fluidité du parcours de commande pour maximiser la conversion.'
          : 'The ambition is clear: becoming the go-to treat in Toulouse. We are building a platform for just-in-time deliveries.||The project is in build phase. The interface is fine-tuned to be as polished as the cookies themselves.||The focus is on local customer acquisition and checkout smoothness to maximize conversion.',
      stack: ['React', 'Growth', 'UI/UX', 'Analytics'],
      link: 'https://koukiz31.fr',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    {
      id: 'aquadora',
      title: lang === 'fr' ? 'Offshore BI Ops' : 'Offshore BI Ops',
      category: lang === 'fr' ? 'Analytics & plongée' : 'Analytics & diving',
      status: 'completed',
      context:
        lang === 'fr'
          ? 'Pilotage data de fermes aquacoles offshore (Daurade Royale). Projet abouti.'
          : 'Data-driven management of offshore aquaculture farms (Royal Sea Bream). Completed.',
      results:
        lang === 'fr'
          ? 'Optimisation du cycle de production et monitoring zootechnique via des dashboards Power BI.'
          : 'Production cycle optimization and zootechnical monitoring through Power BI dashboards.',
      story:
        lang === 'fr'
          ? "Travailler en mer sur de la Daurade Royale demande une rigueur totale. J'ai transformé des milliers de lignes de données brutes en dashboards BI exploitables.||Le suivi de la croissance et de la santé des poissons a été automatisé pour des décisions plus rapides sur site.||En tant que responsable d'équipe de plongée, j'ai aussi coordonné les opérations sous-marines pour l'installation de récifs et de capteurs."
          : 'Working at sea on Royal Sea Bream requires total rigor. I transformed thousands of rows of raw data into actionable BI dashboards.||We automated growth and fish health tracking for faster on-site decisions.||As a diving team leader, I also coordinated underwater operations for reef and sensor installation.',
      stack: ['Power BI', 'Offshore', 'Operations', 'GreenTech'],
      image: 'https://images.unsplash.com/photo-1516900448138-8ff8e7216374?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1516900448138-8ff8e7216374?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1524311583145-d5593bd3522a?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    {
      id: 'sfservice',
      title: 'S-F Service | SEO & Web',
      category: lang === 'fr' ? 'Digital growth' : 'Digital growth',
      status: 'in-progress',
      context:
        lang === 'fr'
          ? "Refonte de la présence digitale d'une entreprise toulousaine. Projet en cours."
          : 'Redesign of the digital presence for a Toulouse company. Ongoing.',
      results:
        lang === 'fr'
          ? 'Optimisation du SEO local pour viser le haut du pack local Google Maps.'
          : 'Local SEO optimization aiming for the top of the Google Maps local pack.',
      story:
        lang === 'fr'
          ? "Pour une entreprise de services, la visibilité locale est vitale. Nous construisons une vitrine performante, optimisée pour la conversion.||Le build est en cours sur s-fservice.fr. L'accent est mis sur la structure technique pour garantir un référencement naturel pérenne.||L'objectif : faire de ce site le premier point d'entrée des clients toulousains."
          : 'For a service company, local visibility is vital. We are building a high-performance showcase optimized for conversion.||The build is ongoing on s-fservice.fr, with a focus on technical structure for sustainable organic ranking.||The goal: making this site the primary entry point for customers in Toulouse.',
      stack: ['React', 'SEO technique', 'Tailwind'],
      link: 'https://s-fservice.fr',
      image: 'https://images.unsplash.com/photo-1581578731522-a20478d45903?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1581578731522-a20478d45903?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    {
      id: 'pecheurs',
      title: lang === 'fr' ? 'Pêcheurs responsables' : 'Responsible fishermen',
      category: lang === 'fr' ? 'Impact & stratégie' : 'Impact & strategy',
      status: 'completed',
      context:
        lang === 'fr'
          ? 'Client : Association Home. Coopération pour la durabilité marine en Algérie. Projet abouti.'
          : 'Client: Association Home. Cooperation for marine sustainability in Algeria. Completed.',
      results:
        lang === 'fr'
          ? 'Rédaction d\u2019une charte de pêche durable et création d\u2019outils de sensibilisation.'
          : 'Drafting of a sustainable fishing charter and creation of awareness tools.',
      story:
        lang === 'fr'
          ? "Travailler avec l'Association Home a été une aventure humaine forte. Des outils ont été conçus pour sensibiliser les communautés locales aux enjeux marins.||La stratégie durable a été coordonnée en s'appuyant sur l'agenda 2063 de l'Union Africaine.||L'objectif était de créer un pont entre expertise scientifique et savoir-faire ancestral des pêcheurs."
          : "Working with Association Home was a strong human adventure. Tools were designed to raise awareness of marine issues among local communities.||The sustainable strategy was coordinated based on the African Union's 2063 agenda.||The goal was to bridge scientific expertise and the ancestral know-how of fishermen.",
      stack: ['Stratégie', 'Environnement', 'Coopération internationale'],
      image: 'https://images.unsplash.com/photo-1524311583145-d5593bd3522a?auto=format&fit=crop&q=80&w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1524311583145-d5593bd3522a?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=1200'
      ]
    }
  ];
}
