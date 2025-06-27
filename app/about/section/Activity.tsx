'use client'

import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { activityData, nifStatInfos } from "@/data.global"
import { useGSAP } from "@gsap/react"
import { Image } from "@mantine/core"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React from "react";

function Activity() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const leftSideRef = React.useRef<HTMLDivElement>(null);
  const rightSideRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom center',
      },
    });

    tl.from(leftSideRef.current, {
      opacity: 0,
      xPercent: 10,
      duration: 2,
      ease: 'power2.out',
    })
      .from(rightSideRef.current, {
        opacity: 0,
        xPercent: -10,
        duration: 2,
        ease: 'power2.out',
      }, '<')
      .from(imageRef.current?.children[0] as HTMLImageElement, {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: 'bounce.out',
      }, '-=0.5');
  }, [])

  return (
    <div ref={sectionRef} className="w-screen bg-secondary-fade text-black pt-10 pb-10 lg:pb-0 mb-10" >
      <Container tag="section" className="flex flex-col gap-10"  >

        {/* title  */}
        <div className="flex flex-col gap-5" >
          <Separator className="bg-secondary" />
          <h2 className="text-3xl font-bold" > Changement du nom, <span className="font-normal" >continuité de vision</span> </h2>
        </div>

        {/* content  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0" >

          {/* left part  */}
          <div ref={leftSideRef} className="flex flex-col gap-8 max-w-[80%]  "  >
            <p>Le 23 juillet 2021, EA CONSULTING est devenue officiellement AGENCE NASSERAGN, tout en conservant son statut juridique d&apos;entreprise individuelle. Ce changement de nom reflète une volonté de renforcer l&apos;identité de l&apos;entreprise tout en poursuivant sa mission initiale.</p>
            <p> L&apos;entreprise est enregistré à Madagascar sous les numéros suivants : </p>
            <div className="flex flex-wrap gap-3" >
              {
                nifStatInfos.map((text, id) => (
                  <p key={id} className="py-2 px-4 bg-white w-fit rounded-md shadow-md "  > {text} </p>
                ))
              }
            </div>
          </div>

          {/* separator  */}
          <div></div>

          {/* right part  */}
          <div ref={rightSideRef} className="flex flex-col gap-8" >
            <h2 className="text-3xl font-bold" > Les activités de <span className="font-normal" >l&apos;entreprise AGN</span> </h2>
            <p>L&apos;AGENCE NASSER-AGN propose une gamme de services diversifiés pour répondre aux besoins de ses clients.</p>
            <p>Ces activités variées, centrées sur l&apos;accompagnement et le conseil stratégique sont organisées de la manière suivante :</p>
            <div className="flex flex-col gap-2 md:gap-5" >
              {
                activityData.map((activity, id) => (
                  <div key={id} className="flex items-center gap-3" >
                    <div className="w-[50px] h-auto " >
                      <Image src={activity.imageSrc} alt="activity image" />
                    </div>
                    <p> {activity.text} </p>
                  </div>
                ))
              }
            </div>
          </div>

        </div>

        {/* men image  */}
        <div ref={imageRef} className="absolute w-[35%] h-auto bottom-0 left-1/2 -translate-x-1/2 hidden lg:block " >
          <Image src={'/image/about/activity-men.webp'} alt="men image" />
        </div>
      </Container>
    </div>
  )
}

export default Activity