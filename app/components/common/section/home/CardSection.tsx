'use client'

import HomeCard from '@/app/components/display/HomeCard'
import { homeCardData } from '@/data.global'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

function CardSection() {
  const cardsContainerRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
      }
    })

    tl
      .from(cardsContainerRef.current?.children as HTMLCollection, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.3,
      })
  }, [])

  return (
    <section className='w-full flex flex-col items-center justify-center gap-5 py-10' >
      {/* title  */}
      <div ref={containerRef} className='py-10 flex items-center justify-center w-fit relative' >
        <span className='h-2 w-[100px] absolute top-0 left-0 bg-secondary'  ></span>
        <h2 className='text-2xl font-black' > Plongez au coeur <span className='font-normal' >  de notre savoir-faire </span>  </h2>
      </div>

      {/* cards  */}
      <div ref={cardsContainerRef} className=' w-fit mx-auto flex items-center justify-center lg:justify-start gap-8 flex-wrap' >
        {
          homeCardData.map((card, id) => (
            <HomeCard
              key={id}
              title={card.title}
              img={card.img}
              description={card.description}
              buttonText={card.buttonText}
              buttonHref={card.buttonHref}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CardSection