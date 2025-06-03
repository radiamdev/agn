import { HeaderLinkType, HomeCardPropsType, TestimonialType } from './type'

export const headerLinkData: HeaderLinkType[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Service',
        url: '/service',
    },
    {
        title: 'Téléchargements',
        url: '/telechargement',
    },
    {
        title: 'About',
        url: '/about',
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
        title: 'Parametre',
        img: '/image/home/card-1.png',
        description:
            'Notre expertise est à votre disposition pour faire de votre projet une réussite concrète. Explorez l’ensemble de nos prestations adaptées à vos objectifs. Découvrez notre gamme complète de services conçus pour soutenir votre croissance : consultance en entrepreneuriat, investissements et gestion de capital, consignation des navires, import-export et représentation commerciale…',
        buttonText: 'Voir nos services',
        buttonHref: '/service',
    },
    {
        title: 'Accédz à nos ressources',
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
        buttonText: 'Voir nos services',
        buttonHref: '/about',
    },
]

export const paymentData: TestimonialType[] = [
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
