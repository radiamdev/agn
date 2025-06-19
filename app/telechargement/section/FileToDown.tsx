'use client'

import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import DownloadCard from "@/app/components/display/DownloadCard"
import { downloadCardData } from "@/data.global"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React from "react"

function FileToDown() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
      },
    });

    tl.from(cardContainerRef.current?.children as HTMLCollection, {
      opacity: 0,
      yPercent: 20,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.3
    });
  }, [])

  return (
    <Container tag="section" className="flex flex-col gap-10 pb-10">
      <div ref={sectionRef} className="flex flex-col gap-3 pl-[20px] " >
        <Separator className="bg-secondary" />
        <h2 className="text-3xl font-bold" > Fichiers <span className="font-normal" >à télécharger</span> </h2>
      </div>
      <div ref={cardContainerRef} className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5" >

        {
          downloadCardData.map((card, id) => (
            <DownloadCard
              key={id}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))
        }
      </div>
    </Container>
  )
}

export default FileToDown