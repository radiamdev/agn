import {
    ActivityDataType,
    DownloadCardType,
    HeaderLinkType,
    HomeCardPropsType,
    PaymentType,
    TermOfUseSectionType,
    TestimonialType,
} from './type'

export const headerLinkData: HeaderLinkType[] = [
    {
        title: 'Accueil',
        url: '/',
    },
    {
        title: 'Service',
        url: '/service',
    },
    {
        title: 'À propos',
        url: '/about',
    },
    {
        title: 'Téléchargements',
        url: '/telechargement',
    },
    {
        title: 'Question',
        url: '/question',
    },
]

export const privacyHeaderData: HeaderLinkType[] = [
    {
        title: 'Politique de confidentialité',
        url: '/privacyPolicy',
    },
    {
        title: 'Politique des cookies',
        url: '/cookiesPolicy',
    },
    {
        title: 'Conditions d’utilisation',
        url: '/termsOfUse',
    },
    {
        title: 'E--Commerce',
        url: '/ecommerce',
    },
]

export const footerPrincipalLinksData: HeaderLinkType[] = [
    {
        title: 'Accueil',
        url: '/',
    },
    {
        title: 'A propos',
        url: '/about',
    },
    {
        title: 'Services',
        url: '/service',
    },
    {
        title: 'Contact',
        url: '/contact',
    },
    {
        title: 'Question',
        url: '/question',
    },
]

export const footerSecondaryLinksData: HeaderLinkType[] = [
    {
        title: 'Politique de confidentialité',
        url: '/privacyPolicy',
    },
    {
        title: 'Politique des cookies',
        url: '/cookiesPolicy',
    },
    {
        title: 'Conditions d’utilisation',
        url: '/termsOfUse',
    },
    {
        title: 'E--Commerce',
        url: '/ecommerce',
    },
]

export const homeCardData: HomeCardPropsType[] = [
    {
        title: 'Découvrez nos services',
        img: '/image/home/card-1.png',
        description:
            'Notre expertise est à votre disposition pour faire de votre projet une réussite concrète. Explorez l’ensemble de nos prestations adaptées à vos objectifs. Découvrez notre gamme complète de services conçus pour soutenir votre croissance : consultance en entrepreneuriat, investissements et gestion de capital, consignation des navires, import-export et représentation commerciale…',
        buttonText: 'Voir nos services',
        buttonHref: '/service',
    },
    {
        title: 'Accédez à nos ressources',
        img: '/image/home/card-2.png',
        description:
            'Téléchargez gratuitement nos documents. Nous avons mis en place un contenu professionnel spécifié pour vous, afin de vous guider et vous orienter dans vos démarches administratives pour pouvoir bénéficier les services de l’entreprise AGN.',
        buttonText: 'Télécharger nos document',
        buttonHref: '/telechargement',
    },
    {
        title: 'Notre parcours, votre avenir',
        img: '/image/home/card-3.png',
        description:
            'Depuis nos débuts, nous avons accompagné des centaines de personnes vers la réussite. Découvrez comment l’entreprise AGN est née, son évolution, et ce qui nous anime chaque jour.',
        buttonText: 'Lire notre histoire',
        buttonHref: '/about',
    },
]

export const paymentData: PaymentType[] = [
    {
        title: 'Orange Money Madagascar',
        image: '/image/home/orange.png',
        phoneNumber: '+261320223443',
    },
    {
        title: 'Airtel Money Madagascar',
        image: '/image/home/airtel.png',
        phoneNumber: '+261337245077',
    },
    {
        title: 'Mvola Madagascar',
        image: '/image/home/telma.png',
        phoneNumber: '+261340256725',
    },
    {
        title: 'TPE Terminal de Paiement Electronique',
        image: '/image/home/TPL.png',
    },
    {
        title: 'E-commerce Paiement en ligne (bientôt disponible)',
        image: '/image/home/e-commerce.png',
    },
    {
        title: 'VIREMENT BANCAIRE Société Générale Madagasikara',
        image: '/image/home/BRED.png',
    },
    {
        title: "VIA NOS AGENCES Paiement en espèces à l'agent AGN",
        image: '/image/home/AGENCE.png',
    },
]

export const testimonialData: TestimonialType[] = [
    {
        name: 'AHAMADA CHARIFOU Cheik Saïd Bacar',
        work: 'Directeur général, entreprise de distribution et d import-export ',
        text: 'Nous avons fait appel à l entreprise AGN pour nous aider à structurer notre démarche d importexport. Leur professionnalisme et leur maîtrise des procédures nous ont permis de gagner en efficacité et de sécuriser nos opérations à l international',
    },
    {
        name: 'STEPHANE Zaohaoz',
        work: 'Gérant d une société œuvrant dans le secteur du bâtiment et travaux publics (BTP) ',
        text: "La qualité du service et la disponibilité de l'équipe del’entreprise AGN ont été déterminantes dans la réussite de notre projet de restructuration. Leur approche sur mesure nous a apporté des solutions concrètes et rapidement applicables.",
    },
    {
        name: 'RAZAFITSALAMA Remi',
        work: "Fondateur d'une PME dans l'agroalimentaire",
        text: 'Grâce à l’accompagnement de l’entreprise AGN, notre projet de création d’entreprise a pu voir le jour dans les meilleures conditions. Leur expertise en stratégie et en gestion nous a permis d’éviter de nombreuses erreurs. Aujourd’hui, nous sommes fiers de notre évolution.',
    },
    {
        name: 'TAHINDRAZANA Ahamadi Germain',
        work: "Président d'une association",
        text: "La création de mon association était un rêve que je ne savais pas comment concrétiser. C’est grâce à l’accompagnement professionnel de l’AGENCE NASSER-AGN que ce projet est devenu réalité. Leur équipe nous a guidés depuis la structuration administrative jusqu’à la définition de nos axes d’intervention. Leur soutien stratégique et leur expertise juridique ont été déterminants pour la reconnaissance officielle de notre association. Aujourd'hui, notre organisation est pleinement opérationnelle et impacte positivement la communauté. Merci à l'AGN pour leur professionnalisme et leur engagement à nos côtés",
    },
    {
        name: 'DESIREE Sylvie',
        work: 'Etudiante de cinquième année en Gestion et Management',
        text: "Grâce à l’accompagnement personnalisé de l’AGENCE NASSER-AGN, j’ai pu concrétiser monprojet d’étude universitaire avec succès. Leur équipe m’a soutenu dans toutes les étapes de mon mémoire, en m’offrant des conseils pratiques, des analyses pertinentes et une méthodologie rigoureuse. Leur expertise et leur disponibilité ont largement contribué à l’obtention de mon diplôme de Master II avec mention. Aujourd'hui, je me sens mieux préparé pour mon avenir professionnel. Je recommande vivement l'AGN à tous les étudiants qui recherchent un encadrement sérieux et un soutien de qualité",
    },
    {
        name: 'RASOANIRINA Véronique',
        work: 'Gérante d’une épicerie',
        text: "Je faisais face à un problème complexe en matière de fiscalité qui menaçait la stabilité de mon entreprise. Ne sachant pas comment m'en sortir, j'ai sollicité l'AGENCE NASSER-AGN.Leur équipe d'experts m'a accompagné à chaque étape : analyse de ma situation, régularisation de mes obligations fiscales, et mise en place d’une stratégie durable pour éviter tout futur litige. Grâce à leur professionnalisme, mon dossier a été réglé rapidement et mon entreprise a pu repartir sur de bonnes bases. Je suis pleinement satisfait des services de l'AGN et je recommande leur accompagnement à toute entreprise souhaitant sécuriser sa situation fiscale.",
    },
]

export const nifStatInfos = [
    'STAT : 74908 41 2017 0 00865',
    'NIF : 5002818832',
    'RCS : Mahajanga 2018 A 00016',
]

export const activityData: ActivityDataType[] = [
    {
        text: 'Consultance en entrepreneuriat',
        imageSrc: '/image/about/activity-consultance.png',
    },
    {
        text: 'Investissements et gestion de capital',
        imageSrc: '/image/about/activity-invest.png',
    },
    {
        text: 'Consignation des navires',
        imageSrc: '/image/about/activity-consingation.png',
    },
    {
        text: 'Import-export',
        imageSrc: '/image/about/activity-import-export.png',
    },
    {
        text: 'Représentation commerciale',
        imageSrc: '/image/about/activity-representation.png',
    },
]

export const downloadCardData: DownloadCardType[] = [
    {
        title: 'Investissez avec stratégie',
        text: 'Découvrez notre feuille de route pour orienter vos investissements vers le succès durable. Visualisez notre Plan d’investissement détaillé : une vision stratégique et structurée pour maximiser la rentabilité de votre engagement auprès de l’entreprise AGN.',
        buttonText: "Plan d'investissement",
        link: '#',
    },
    {
        title: 'Votre avenir commence ici',
        text: 'Identifiez-vous officiellement comme investisseur et ouvrez la porte à de nouvelles opportunités. Remplissez votre Fiche de l’investisseur pour officialiser votre intérêt et nous permettre de vous proposer des solutions adaptées à votre profil et à vos objectifs financiers.',
        buttonText: "Fiche de l'investisseur",
        link: '#',
    },
    {
        title: 'Sécurisez votre engagement',
        text: 'Un cadre clair et sécurisé pour bâtir votre investissement en toute confiance. Accédez à notre Contrat d’investissement type, conçu pour encadrer votre engagement avec clarté, sécurité juridique et transparence.',
        buttonText: "Contrat d'investissement(PDF)",
        link: '#',
    },
    {
        title: 'Donnez vie à vos projets',
        text: 'Remplissez votre demande de financement pour transformer vos ambitions en réalités concrètes. Utilisez ce formulaire de Demande de financements AGN pour solliciter un appui financier et donner vie à vos projets d’entreprise ou d’investissement.',
        buttonText: 'Demande des financement AGN',
        link: '#',
    },
    {
        title: 'La clarté au service de votre décision',
        text: 'Visualisez nos tarifs transparents pour avancer sereinement avec l’entreprise AGN. Consultez notre grille Tarif-AGN pour avoir une vision claire de nos prestations, de nos services et des coûts associés.',
        buttonText: 'Tarif AGN',
        link: '#',
    },
    {
        title: 'Une équipe solide pour vos projets ambitieux',
        text: 'Découvrez notre organisation interne et les experts qui vous accompagnent. Téléchargez notre Organigramme-AGN pour mieux comprendre la structure de notre agence et l’organisation de nos pôles d’expertise.',
        buttonText: 'Organigramme AGN',
        link: '#',
    },
]

export const threeTermOfUseSection: TermOfUseSectionType[] = [
    {
        title: 'AGRO FARM WORLD  ',
        miniTitle: "Partenaire pour la promotion de l'agrobusiness",
        image: '/image/termOfUse/agro.png',
        text: 'Ensemble, nous semons les bases d’un agrobusiness moderne, durable et moteur de  développement local.  AGRO FARM WORLD nous accompagne dans le développement de projets agricoles  et agroalimentaires durables, en apportant son expertise en agriculture, élevage et  pisciculture.',
        proverbs: ' Cultiver aujourd’hui, nourrir demain ',
        isReversed: false,
        haveBgColor: false,
    },
    {
        title: 'ENTREPRISE ROUKKAYAH',
        miniTitle:
            'Partenaire pour la construction de bâtiments et travaux publics (BTP)',
        image: '/image/termOfUse/entreprise.png',
        text: 'En collaborant avec ce pilier du BTP, nous donnons vie à des projets structurants et  durables pour nos communautés.  ENTREPRISE ROUKKAYAH est notre alliée de confiance pour la réalisation de nos  infrastructures : bâtiments administratifs, bassins piscicoles, centres techniques et plus  encore.',
        proverbs: 'Bâtir solide, construire l’avenir',
        isReversed: true,
        haveBgColor: true,
    },
    {
        title: 'UNIVERSITE MASOANDRO (UM)',
        miniTitle: 'Partenaire pour la recherche et le développement',
        image: '/image/termOfUse/university.png',
        text: 'Grâce à ce partenariat académique, nous transformons les idées en solutions  concrètes pour le progrès de la société.   En collaboration avec l’Université Masoandro, nous favorisons la recherche appliquée  et l’innovation, en intégrant la jeunesse universitaire à nos initiatives de terrain.',
        proverbs: 'La lumière au service de la nation',
        isReversed: true,
        haveBgColor: false,
    },
]

export const twoTermOfUseSection: TermOfUseSectionType[] = [
    {
        title: 'ONG-ASP AFRICA SOS PRISONNIER',
        miniTitle: 'Partenaire pour la charité dans les prisons',
        image: '/image/termOfUse/ASP.png',
        text: 'Ce partenariat traduit notre engagement commun pour la dignité humaine et l’action  solidaire dans les milieux carcéraux.  En partenariat avec l ONG-ASP (AFRICA SOS PRISONNIER), nous agissons pour le  respect de la dignité humaine en milieu carcéral, à travers des actions humanitaires et  des dons ciblés.',
        proverbs: 'La lumière au service de la nation',
        isReversed: false,
        haveBgColor: false,
    },
    {
        title: 'DJOMANI MEDIA',
        miniTitle: 'Partenaire pour la communication',
        image: '/image/termOfUse/djomani.png',
        text: 'DJOMANI MEDIA est notre relais de communication engagé, pour informer, valoriser  et connecter nos initiatives au grand public.  Avec DJOMANI MEDIA, nous assurons une communication moderne, dynamique et  adaptée à nos actions, en renforçant notre visibilité à travers les médias traditionnels  et numériques.',
        proverbs: 'La lumière au service de la nation',
        isReversed: true,
        haveBgColor: false,
    },
]
