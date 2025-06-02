import { Image } from '@mantine/core'
import React from 'react'
import Partiaire from '../display/Partiaire'

function Hero() {
  return (
    <div className='w-full pt-[100px] ' >
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10' >

        {/* left side  */}
        <div className='flex flex-col justify-center gap-5' >
          <span className='h-2 w-[100px] bg-[#0194B6]' ></span>
          <h1 className='font-semibold text-3xl md:text-4xl max-w-[410px] font-rubik ' >
            Bienvenue chez AGENCE NASSER-AGN
          </h1>
          <p className='italic' > Votre partenaire de confiance pour des solutions innovantes en entrepreneuriat et investissement. </p>
          <h2 className='font-semibold  text-3xl md:text-4xl max-w-[400px] font-rubik ' > Libérez votre réussite </h2>
          <p>
            Notre mission est de vous fournir les outils nécessaires pour votre réussite. Depuis sa création en 2017, l&apos;entreprise AGN s&apos;engage à accompagner les entrepreneurs et investisseurs dans la réalisation de leurs projets, en offrant une expertise reconnue et des services adaptés aux défis économiques actuels.
          </p>
          <div> button part </div>
        </div>

        {/* right side  */}
        <Image
          src={'/image/home-hero.png'}
          alt='hero image'
          className='w-full h-auto'
        />
      </div>
      <Partiaire />
    </div>
  )
}

export default Hero