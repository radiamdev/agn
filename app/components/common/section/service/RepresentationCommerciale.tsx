'use client'

import { textRevealAnimation } from '@/data.global'
import { useGSAP } from '@gsap/react'
import { Image } from '@mantine/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const RepresentationCommerciale = () => {
    const sectionRef = React.useRef<HTMLElement>(null)
    const imageRef = React.useRef<HTMLImageElement>(null)
    const textRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 40%',
                end: 'bottom center',
            },
        })

        tl.from(textRef.current?.children as HTMLCollection, {
            ...textRevealAnimation,
            stagger: 0.3,
        })
            .from(imageRef.current, {
                opacity: 0,
                ease: 'power2.out',
                duration: 4,
            }, '<')

    }, [])

    return (
        <section ref={sectionRef} className="bg-white lg:py-6 lg:px-0 p-4 flex flex-col lg:flex-row-reverse items-center relative">
            <div className="w-full lg:w-[50%] flex-shrink-0">
                <Image
                    src="/image/service/commerciale.jpg"
                    alt="icon"
                    className="!w-full !h-auto"
                    ref={imageRef}
                />
            </div>
            <div ref={textRef} className="w-full lg:w-[55%] bg-white shadow-xl space-y-6 lg:p-16 p-4 z-30 lg:absolute lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2">
                <div className="h-2 w-32 bg-secondary" />
                <h2 className="text-black font-semibold text-2xl">
                    Représentation commerciale
                </h2>
                <h1 className="text-secondary font-bold text-3xl">
                    Développez votre marque, conquérez de nouveaux marchés.
                </h1>

                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        🏢{' '}
                        <span className="font-semibold">
                            {' '}
                            Représentation des entreprises malagasy à Mahajanga
                        </span>
                    </div>
                    <p className="text-black/80">
                        Description : Représentation locale des entreprises
                        malagasy dans la ville de Mahajanga. <br />
                        Prix : 3 000 000 MGA
                    </p>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        🌍{' '}
                        <span className="font-semibold">
                            {' '}
                            Représentation des entreprises étrangères à
                            Madagascar et aux Comores.
                        </span>
                    </div>
                    <p className="text-black/80">
                        Description : Représentation internationale des
                        entreprises étrangères dans les deux pays
                        <br />
                        Prix : 6 000 000 MGA
                    </p>
                </div>
            </div>
        </section>
    )
}

export default RepresentationCommerciale
