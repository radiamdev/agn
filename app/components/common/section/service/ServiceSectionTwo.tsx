import React from 'react'
import Container from '../../Container'

const ServiceSectionTwo = () => {
    return (
        <div
            className="w-screen bg-[#BF90008F]"
        >
            <Container tag="section" className="space-y-4 py-6">
                <div className="h-2 w-32 bg-secondary" />
                <h2 className="text-black font-semibold text-2xl">
                    Consultance en entrepreunariat
                </h2>
                <h1 className="text-secondary font-bold text-3xl">
                    Votre projet, notre expertise.
                </h1>
                <p className="text-black/80 text-md text-justify">{`Bénéficiez d’un accompagnement stratégique pour transformer vos idées en succès durables. Lancez, développez ou redynamisez votre activité avec l’expertise de notre équipe. À travers notre service de consultance en entrepreneuriat, nous vous aidons à structurer votre projet, à définir une stratégie de croissance solide et à sécuriser vos premiers succès.`}</p>
                <div className=""></div>
            </Container>
        </div>
    )
}

export default ServiceSectionTwo
