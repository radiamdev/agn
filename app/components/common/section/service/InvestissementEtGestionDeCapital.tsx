'use client'

import React from 'react'
import Container from '../../Container'
import ServiceSectionOneCard from './ServiceSectionOneCard'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
    {
        icon: '/icons/elevage.png',
        title: 'Elevage',
        price: '20 000 000 - 40 000 000',
    },
    {
        icon: '/icons/pisciculture.png',
        title: 'Pisciculture',
        price: '41 000 000 - 80 000 000',
    },
    {
        icon: '/icons/agriculture.png',
        title: 'Agriculture',
        price: '81 000 000 - 100 000 000',
    },
    {
        icon: '/icons/education.png',
        title: 'Éducation Supérieur',
        price: '1100 000 000 - 1 000 000 000',
    },
]

const InvestissementEtGestionDeCapital = () => {
    const containerRef = React.useRef<HTMLElement>(null)
    const cardContainerRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 40%',
                end: 'bottom center',
            }
        })

        tl
            .from(cardContainerRef.current?.children as HTMLCollection, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.3,
            })
    }, [])

    return (
        <section ref={containerRef} className="w-full bg-white">
            <Container tag="section" className="space-y-4 py-6">
                <div className="h-2 w-32 bg-secondary" />
                <h2 className="text-black font-semibold text-2xl">
                    Investissements et gestion de capital
                </h2>
                <h1 className="text-secondary font-bold text-3xl">
                    Optimisez vos investissements, sécurisez votre avenir.
                </h1>
                <p className="text-black/80 text-md text-justify">{`Nous vous aidons à faire fructifier votre capital avec rigueur et vision. Maximisez la rentabilité de vos investissements grâce à notre accompagnement stratégique. Nous vous conseillons dans l’allocation de votre capital, l’analyse des opportunités, et la sécurisation de votre patrimoine, avec une approche personnalisée et rigoureuse.`}</p>
                <div ref={cardContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    {services.map((service, index) => (
                        <ServiceSectionOneCard
                            key={service.title + index}
                            icon={service.icon}
                            title={service.title}
                            price={service.price}
                        />
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="flex items-center gap-2 rounded-xl hover:cursor-pointer bg-gray-200">
                        <p className="h-full py-2 md:py-3 px-5 md:px-8 rounded-lg bg-secondary-fade-2 text-black font-bold">
                            Contactez nous
                        </p>
                        <span className="border border-secondary rounded-full p-1 mr-3 md:mr-5">
                            <FaArrowRightLong color="#bf9000" size={12} />
                        </span>
                    </button>
                </div>
            </Container>
        </section>
    )
}

export default InvestissementEtGestionDeCapital
