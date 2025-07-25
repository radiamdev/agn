import { MailType } from '@/type';
import React from 'react'

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

export interface PoliticSectionPropsType {
    titleOne: string
    titleTwo: string
    contentOne: React.ReactNode
    contentTwo: React.ReactNode
    haveEmail: boolean
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

export interface EcommerceItemProps {
    title: string
    imageSrc: string
    content: React.ReactNode
    isReversed: boolean
}

export interface EcommerceSectionProps {
    titleOne: string
    titleTwo: string
    contentOne: React.ReactNode
    contentTwo: React.ReactNode
    imageOne: string
    imageTwo: string
}

export interface LegalMentionProps0 {
    number0?: string,
    title0?: string,
    description0?: string[]
}

export interface LegalMentionProps1 {
    number?: string,
    title?: string,
    description?: string[]
}

export interface LegalMentionProps {
    left?: LegalMentionProps0,
    right?: LegalMentionProps1
}