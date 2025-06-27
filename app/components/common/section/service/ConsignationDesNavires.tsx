'use client'

import { useGSAP } from '@gsap/react'
import { Image } from '@mantine/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const ConsignationDesNavires = () => {
    const sectionRef = React.useRef<HTMLElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 40%',
                end: 'bottom center',
            },
        })
        tl.from(containerRef.current?.children as HTMLCollection, {
            opacity: 0,
            xPercent: 5,
            ease: 'power2.out',
            duration: 1,
            stagger: 0.3,
        })
    }, [])

    return (
        <section ref={sectionRef} className="bg-white flex items-center justify-end">
            <div className="bg-gradient-to-r from-secondary to-pink-primary flex lg:flex-row flex-col items-end lg:rounded-l-2xl lg:w-[90%] w-full">
                <div ref={containerRef} className="lg:w-[70%] w-full space-y-6 p-8">
                    <div className="h-2 w-32 bg-secondary" />
                    <h2 className="text-black font-semibold text-2xl">
                        Consignation des navires
                    </h2>
                    <h1 className="text-black font-bold text-3xl">
                        Chaque escale, un service d&apos;excellence.
                    </h1>
                    <p className="text-black/80 text-md text-justify">{`Gérez vos opérations maritimes avec efficacité, sécurité et professionnalisme. Assurez une gestion fluide et professionnelle de vos opérations maritimes avec notre service de consignation des navires. De l’accueil au port jusqu’à la coordination des formalités administratives, notre équipe veille à optimiser chaque escale.`}</p>

                    <h3 className="text-black font-semibold text-lg">
                        ✨ Nature et Activités
                    </h3>

                    <div className="w-full flex items-center gap-4">
                        <div>
                            <p className="font-semibold">
                                Transport Maritime National
                            </p>
                            <p>
                                Service : Consignation nationale <br />
                                Tarif : Variable selon la prestation et le type
                                de navire
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Transport Maritime International
                            </p>
                            <p>
                                Service : Consignation internationale
                                <br />
                                Tarif : Variable selon la prestation et la
                                destination
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[30%] w-full flex items-end justify-end">
                    <Image
                        src="/image/service/fine.png"
                        alt="icon"
                        className="!w-sm !h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default ConsignationDesNavires
