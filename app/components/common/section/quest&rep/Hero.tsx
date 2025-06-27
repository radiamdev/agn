'use client'

import Button from "../../Button"
import Link from "next/link"
import Container from "../../Container"
import React from "react"
import { useGSAP } from "@gsap/react"
import { textRevealAnimation } from "@/data.global"
import gsap from "gsap"

const desc = "Cette rubrique a été conçue pour répondre de manière claire, rapide et précise aux interrogations les plus fréquemment posées par nos visiteurs, clients, partenaires et investisseurs. Que vous soyez en phase de découverte de nos services, engagé dans une collaboration avec notre équipe ou simplement curieux d’en savoir plus sur notre fonctionnement, vous trouverez ici des réponses utiles sur les aspects essentiels de notre agence : consultance, investissements, import-export, consignation maritime, représentation commerciale, et bien plus encore. Notre objectif est de vous offrir un accompagnement personnalisé, fondé sur la transparence et la confiance. Si toutefois votre question ne figure pas dans cette section, n’hésitez pas à nous contacter directement : notre équipe reste à votre écoute pour vous guider efficacement."

export default function Hero() {
    const textRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {

        gsap.from(textRef.current?.children as HTMLCollection, {
            ...textRevealAnimation,
            stagger: 0.2,
            ease: 'power4.out',
            duration: 2
        })

    }, [])
    return (
        <section className="bg-[url('/image/question/hero.webp')] bg-cover bg-center md:h-[508px] mt-[70px] md:mt-[150px]">
            <Container>
                <div ref={textRef} className="space-y-12  py-[40px]">
                    <div className="space-y-6">
                        <div className='hidden md:block h-2 w-[100px] bg-white' ></div>
                        <h1 className='text-white font-semibold text-3xl md:text-4xl md:max-w-[500px] font-rubik' >
                            Bienvenue dans la section Questions/Réponses de l&apos;AGENCE NASSER-AGN
                        </h1>
                    </div>
                    <p className="text-white font-light max-w-[1000px]">
                        {desc}
                    </p>
                    <div>
                        <Link href={'/contact'} > <Button label="Contact" variant="ghost-white"></Button></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}