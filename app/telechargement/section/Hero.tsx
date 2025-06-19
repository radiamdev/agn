'use client'

import Button from '@/app/components/common/Button'
import Container from '@/app/components/common/Container'
import { useGSAP } from '@gsap/react'
import { Image } from '@mantine/core'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

function Hero() {
  const textRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current?.children as HTMLCollection, {
      opacity: 0,
      xPercent: 10,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.3
    })
  }, [])
  return (
    <Container tag='section' className='min-h-[500px] mx-auto flex items-center text-white relative mb-10 px-5 md:px-10 xl:px-20 py-10 ' >
      {/* <div className=''  > */}
      {/* image  */}
      <div className="absolute w-full h-full top-0 left-0" >
        <Image src={'/image/telechargement/hero.png'} alt="contact image" className="w-full h-full" />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-primary/70"></div>

      {/* text  */}
      <div ref={textRef} className="relative z-10 max-w-[500px] flex flex-col gap-8 px-3 md:px-0" >
        <span className="h-2 w-[100px] bg-secondary" ></span>
        <h2 className="text-3xl font-bold" > Retrouvez ici tous nos documents essentiels en libre téléchargement </h2>
        <p> AGENCE NASSER-AGN met à votre disposition les ressources nécessaires pour mieux comprendre nos services, finaliser vos démarches et suivre nos procédures internes en toute transparence. Chaque fichier est conçu pour vous accompagner efficacement dans votre projet. Retrouvez ici tous nos documents essentiels pour avancer efficacement dans votre projet avec AGENCE NASSER-AGN. Chaque ressource est pensée pour vous guider, vous sécuriser et accélérer votre réussite.</p>
        <div className="flex items-center gap-5" >
          <Link href={'/contact'} > <Button label="Contact" variant="ghost-white" /> </Link>
          <Link href={'/service'} > <Button label="Service" variant="primary" /> </Link>
        </div>
      </div>
      {/* </div> */}
    </Container>
  )
}

export default Hero