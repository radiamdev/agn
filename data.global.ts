import { HeaderLinkType, HomeCardPropsType } from './type'

export const headerLinkData: HeaderLinkType[] = [
    {
        title: 'Home',
        url: '/home',
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
        url: '/home',
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
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at maiores itaque ut error quam laboriosam qui adipisci facilis exercitationem.',
        buttonText: 'Voir nos services',
    },
    {
        title: 'Accédz à nos ressources',
        img: '/image/home/card-2.png',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at maiores itaque ut error quam laboriosam qui adipisci facilis exercitationem.',
        buttonText: 'Télécharger nos document',
    },
    {
        title: 'Notre parcours, votre avenir',
        img: '/image/home/card-3.png',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at maiores itaque ut error quam laboriosam qui adipisci facilis exercitationem.',
        buttonText: 'Voir nos services',
    },
]
