'use client'

import { Image } from '@mantine/core'
import React from 'react'
import Partiaire from '../../../display/Partiaire'
import Button from '../../Button'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { textRevealAnimation } from '@/data.global'

function Hero() {
  const leftSideRef = React.useRef<HTMLDivElement>(null)
  const rightSideRef = React.useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl
      .from(leftSideRef.current?.children as HTMLCollection, {
        ...textRevealAnimation,
        stagger: 0.2,
        ease: 'power4.out',
      })
      .from(rightSideRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'elastic.out(1, 0.3),'
      }, '-=0.5)')

  }, [])

  return (
    <div className='w-full pt-[100px] md:pt-[170px] ' >
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10' >

        {/* left side  */}
        <div ref={leftSideRef} className='flex flex-col justify-center gap-5' >
          <span className='h-2 w-[100px] bg-[#0194B6]' ></span>
          <h1 className='font-semibold text-3xl md:text-4xl max-w-[410px] font-rubik ' >
            Bienvenue chez AGENCE NASSER-AGN
          </h1>
          <p className='italic' > Votre partenaire de confiance pour des solutions innovantes en entrepreneuriat et investissement. </p>
          <h2 className='font-semibold  text-3xl md:text-4xl max-w-[400px] font-rubik ' > Libérez votre réussite </h2>
          <p>
            Notre mission est de vous fournir les outils nécessaires pour votre réussite. Depuis sa création en 2017, l&apos;entreprise AGN s&apos;engage à accompagner les entrepreneurs et investisseurs dans la réalisation de leurs projets, en offrant une expertise reconnue et des services adaptés aux défis économiques actuels.
          </p>
          <div className='flex w-full gap-6 mg:gap-10' >
            <Link href={'/about'} > <Button label='Historique' variant='ghost-primary' /> </Link>
            <Link href={'/contact'} > <Button label='Contact' variant='primary' /> </Link>
          </div>
        </div>

        {/* right side  */}
        <Image
          ref={rightSideRef}
          src={'/image/home/home-hero.png'}
          alt='hero image'
          className='w-full h-auto'
        />
      </div>
      <Partiaire />
    </div>
  )
}

export default Hero