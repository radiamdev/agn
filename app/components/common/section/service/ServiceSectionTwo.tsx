import React from 'react'
import Container from '../../Container'
import ServiceSectionTwoCard from './ServiceSectionTwoCard'
import { Image } from '@mantine/core'

const data = [
    {
        icon: '/icons/consultance.png',
        description: "Consultance expertise avec 12 mois d'accompagnement",
    },
    {
        icon: '/icons/audit.png',
        description: 'Audit Général',
    },
    {
        icon: '/icons/redaction.png',
        description: 'Rédaction de tout rapport, contrat et lettre',
    },
    {
        icon: '/icons/recuperation.png',
        description: 'Etude rectificative ou modificative',
    },
    {
        icon: '/icons/prestataire.png',
        description: "Prestataire de service pour la création d'une Fondation",
    },
    {
        icon: '/icons/financier.png',
        description:
            'Etablissements des Etats Financiers (Bilan, Compte de Résultat, Trésorerie)',
    },
    {
        icon: '/icons/gerance.png',
        description: "Contrats de gérance, d'affermage et de concession",
    },
    {
        icon: '/icons/audit1.png',
        description: 'Audit Sectoriel',
    },
    {
        icon: '/icons/etude.png',
        description:
            "Etude et conception des documents de dépôts aux appels d'offres",
    },
    {
        icon: '/icons/prestataire.png',
        description:
            "Prestataire de service pour la création d'une Association",
    },
    {
        icon: '/icons/prestataire.png',
        description: "Prestataire de service pour la création d'une ONG",
    },
    {
        icon: '/icons/consultance.png',
        description: "Consultance projet avec 12 mois d'accompagnement",
    },
]

const ServiceSectionTwo = () => {
    return (
        <section className="w-screen bg-[#BF90008F]">
            <Container tag="section" className="space-y-4 py-6">
                <div className="h-2 w-32 bg-secondary" />
                <h2 className="text-black font-semibold text-2xl">
                    Consultance en entrepreunariat
                </h2>
                <h1 className="text-secondary font-bold text-3xl">
                    Votre projet, notre expertise.
                </h1>
                <p className="text-black/80 text-md text-justify">{`Bénéficiez d’un accompagnement stratégique pour transformer vos idées en succès durables. Lancez, développez ou redynamisez votre activité avec l’expertise de notre équipe. À travers notre service de consultance en entrepreneuriat, nous vous aidons à structurer votre projet, à définir une stratégie de croissance solide et à sécuriser vos premiers succès.`}</p>

                {/* Card container */}
                <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-4 gap-12 py-8">
                    <div className="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <div key={item.description}>
                                <ServiceSectionTwoCard
                                    icon={item.icon}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-[40%] relative">
                        <div className="bg-white shadow-xl flex flex-col items-center p-3 relative min-h-32">
                            <div className="border border-black p-2 rounded-full bg-white w-12 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src="/icons/encadrement.png"
                                    alt="icon"
                                    className="!w-full !h-auto"
                                />
                            </div>

                            <div className="space-y-6 lg:pr-16">
                                <p className="text-center mt-6 font-semibold text-xl">
                                    Encadrement universitaire :
                                </p>
                                <ol className="space-y-4">
                                    <li>
                                        1- Accompagnement : Rapport de stage de
                                        fin d&apos;études universitaires
                                    </li>
                                    <li>
                                        2- Accompagnement : Projet de fin
                                        d&apos;études universitaires
                                    </li>
                                    <li>
                                        3- Accompagnement : Etudes des
                                        recherches de fin d&apos;études
                                        universitaires
                                    </li>
                                </ol>
                            </div>
                        </div>
                        {/* Illustration image */}
                        <div className="absolute top-0 -right-25 w-xs h-auto hidden lg:block">
                            <Image
                                src="/image/service/businessman.png"
                                alt="illustration"
                                className="!w-full !h-auto"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ServiceSectionTwo
