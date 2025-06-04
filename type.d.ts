export interface HeaderLinkType {
    title: string
    url: string
}

export interface HomeCardPropsType {
    img: string
    title: string
    description: string
    buttonText: string
    buttonHref: string
}

export interface PaymentType {
    image: string
    title: string
    phoneNumber?: string
}

export interface InformationDataType {
    icon: JSX.Element
    text: string
    isLink?: boolean
    href?: string
}

export interface TestimonialType {
    text: string
    name: string
    work: string
}

export interface ActivityDataType {
    text: string
    imageSrc: string
}

export interface DownloadCardType {
    title: string
    text: string
    buttonText: string
    link?: string
}

export interface TermOfUseSectionType {
    title: string
    miniTitle: string
    text: string
    image: string
    proverbs: string
    isReversed: boolean
    haveBgColor: boolean
}
