'use client'

import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { textRevealAnimation } from "@/data.global"
import { useGSAP } from "@gsap/react"
import { Image } from "@mantine/core"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React from "react"

function WhoAryWe() {
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
    <div ref={sectionRef}>
      <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-black " >

        {/* left side  */}
        <div ref={textRef} className="flex flex-col gap-8" >
          <Separator className="bg-secondary" />
          <h1 className="text-3xl font-bold" > Qui sommes- <span className="font-normal" >nous ?</span> </h1>
          <p>AGENCE NASSER-AGN est une entreprise individuelle appartenant à Monsieur NASSER Saïd Mmadi, consultant spécialiste en entrepreneuriat, économiste de formation diplômé en hautes études commerciales, enseignant en science de gestion et commerce dans les établissements d&apos;enseignement supérieur professionnel à Madagascar, occupant lui-même les fonctions de Directeur Général. </p>
          <p>Comme toute entreprise qui doit évoluer, l&apos;AGENCE NASSER-AGN est passée par deux étapes avant de nous offrir l&apos;image qu&apos;elle a aujourd&apos;hui. L&apos;AGENCE NASSER-AGN est aujourd&apos;hui une entreprise innovante de conseil en entrepreneuriat, d&apos;investissements et de gestion de capital.</p>
          <p>Elle offre aux investisseurs la possibilité de participer au marché de l&apos;investissement en son sein et de réaliser des bénéfices annuels garantis payables à l&apos;échéance contractuelle. L&apos;entreprise est exploitée et gérée par une équipe expérimentée de professionnels possédant une expertise dans l&apos;entrepreneuriat, le marché de l&apos;investissement, la technologie et le service client.</p>
        </div>

        {/* right side  */}
        <div ref={imageRef} className="relative h-[600px] " >
          <div className="absolute top-0 left-0 w-[50%] h-auto " >
            <Image src={'/image/about/whoAreWe-1.webp'} alt="meeting image" />
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] h-auto " >
            <Image src={'/image/about/whoAreWe-2.webp'} alt="meeting image" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WhoAryWe