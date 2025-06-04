import { Image } from '@mantine/core'
import React from 'react'
import Container from '../../Container'
import Link from 'next/link'
import Button from '../../Button'

const HeroService = () => {
    return (
        <div className="w-screen bg-primary">
            <Container
                tag="section"
                className="flex lg:flex-row flex-col-reverse items-end justify-center min-h-screen gap-8"
            >
                <div className="lg:w-1/2 w-full flex flex-col gap-8 pb-20">
                    <div className="h-2 w-32 bg-white" />
                    <h1 className="font-bold text-4xl text-white">
                        Nos services
                    </h1>
                    <p className="text-white/80 font-semibold text-lg text-justify lg:text-left leading-relaxed">{`Chez AGENCE NASSER-AGN, nous plaçons l’excellence et la performance au cœur de notre mission. Notre équipe expérimentée accompagne les entrepreneurs, investisseurs, armateurs et commerçants dans la concrétisation de leurs ambitions, en proposant des solutions sur mesure adaptées à chaque besoin. Découvrez l’ensemble de nos services pensés pour propulser votre projet vers le succès.`}</p>
                    <Link href={'/contact'}>
                        {' '}
                        <Button label="Contact" variant="primary" />{' '}
                    </Link>
                </div>
                <div className="lg:w-1/2 w-full flex items-end justify-center pt-24">
                    <Image
                        src="/image/service/hero_illustration.png"
                        alt="hero image"
                        className="!w-sm !h-auto !object-contain"
                    />
                </div>
            </Container>
        </div>
    )
}

export default HeroService
