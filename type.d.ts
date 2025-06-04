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
