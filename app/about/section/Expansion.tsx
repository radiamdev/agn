'use client'

import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { useGSAP } from "@gsap/react";
import { Image } from "@mantine/core"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

function Expansion() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
      },
    });
    tl.from(textRef.current, {
      opacity: 0,
      yPercent: 10,
      duration: 2,
      ease: 'power2.out',
    })
      .from(imageRef.current, {
        xPercent: -10,
        opacity: 0,
        duration: 1.5,
        ease: 'bounce.out',
      }, '-=1')
  }, [])

  return (
    <div ref={sectionRef}>
      <Container tag="section" className="grid grid-col-1 lg:grid-cols-2 items-center pt-10 pb-10 gap-5 lg:gap-0 " >

        {/* image part  */}
        <div ref={imageRef} className="w-full h-auto" >
          <Image src={'/image/about/expansion.webp'} alt="men in rush" />
        </div>

        {/* text part  */}
        <div ref={textRef} className="flex flex-col justify-center gap-5 p-5 bg-secondary-fade h-fit" >
          <Separator className="bg-secondary" />
          <h1 className="text-3xl font-bold" >L&apos;expansion et <span className="font-normal" >les ambitions</span></h1>
          <p>Actuellement, l&apos;AGENCE NASSER-AGN compte cinq directions et plusieurs services.Elle a récemment lancé une campagne de recrutement de ses agents régionaux qui seront répartis dans toutes les régions de Madagascar.Le défi actuel de l&apos;entreprise AGN est de garantir que le secteur de l&apos;investissement profite à toute l&apos;humanité, y compris aux moins fortunés, aux faibles et aux opprimés du monde.Notre vision d&apos;expansion internationale est soutenue par de grandes entreprises multinationales leaders dans le secteur de l&apos;investissement.</p>
        </div>

      </Container>
    </div>
  )
}

export default Expansion