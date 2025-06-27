'use client'

import Button from "@/app/components/common/Button"
import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { textRevealAnimation } from "@/data.global"
import { useGSAP } from "@gsap/react"
import { Image } from "@mantine/core"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import React from "react"

function Origin() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
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
      ease: 'power4.out',
    })
      .from(imageRef.current?.children[0] as HTMLImageElement, {
        opacity: 0,
        duration: 3,
        ease: 'power2.out',
      }, '<')
      .from(imageRef.current?.children[1] as HTMLDivElement, {
        opacity: 0,
        xPercent: 10,
        duration: 2,
        ease: 'power2.out',
      }, '=-1')
  }, [])


  return (
    <div ref={sectionRef} >
      <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 pb-10 gap-10" >

        {/* image side  */}
        <div ref={imageRef} className="relative" >
          <div className="h-full w-[80%] " >
            <Image src={'/image/about/origin-1.webp'} alt="meeting image" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] md:w-[220px] h-auto " >
            <Image src={'/image/about/origin-2.webp'} alt="meeting image" />
          </div>
        </div>

        {/* text side  */}
        <div ref={textRef} className="flex flex-col justify-center gap-5" >
          <Separator className="bg-secondary" />
          <h1 className="text-3xl font-bold" > À l&apos;origine </h1>
          <p>Le monde de l&apos;entrepreneuriat est en vogue et se multiplie de plus en plus dans tous les secteurs ainsi que les domaines d&apos;activité présents sur les marchés.</p>
          <p>Pourtant, le professionnalisme est englouti par des problèmes que l&apos;entreprise en question n&apos;a peut-être ni le contrôle ni la solution. Raison pour laquelle des experts de la consultance en entrepreneuriat existent, et AGENCE NASSER-AGN en fait partie.</p>
          <p>L&apos;AGENCE NASSER-AGN a vu le jour le 14 septembre 2017 sous la dénomination EA CONSULTING, avec une équipe de quatre salariés et un chiffre d&apos;affaires annuel de 50 000 000 MGA.</p>
          <p>Dès ses débuts, l&apos;entreprise s&apos;est engagée à participer activement aux manifestations commerciales, posant ainsi les bases de son développement futur.</p>
          <Link href={'/contact'} > <Button label="Contact" variant="primary" /> </Link>
        </div>
      </Container>
    </div>
  )
}

export default Origin