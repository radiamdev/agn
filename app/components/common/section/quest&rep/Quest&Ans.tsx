'use client'

import Container from "../../Container";
import { Timeline, TimelineItem } from "@mantine/core";
import SeeMore from "../../SeeMore";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const desc1 = "AGENCE NASSER ou AGN est une entreprise innovante de conseil en entrepreneuriat, d'investissements et de gestion de capital qui offre aux investisseurs la possibilité de participer au marché de l'investissement en son sein et de réaliser des bénéfices annuels garantis payables à l'échéance contractuelle.",
  desc2 = "L'entreprise AGN est exploitée et gérée par notre équipe expérimentée de professionnels possédant une expertise dans le marché de l'investissement, la technologie et le service client. Notre objectif est de fournir une expérience d'investissement transparente et sécurisée à nos investisseurs. Nous disposons d'une excellente équipe composée d'économistes, des banquiers, d'ingénieurs, des dévelopeurs, des gestionnaires et des commerçants. Les membres de l'équipe travaillent dur et efficacement pour vous offrir un service agréable.",
  desc3 = "Il est très simple d'investir au sein de l'entreprise AGN. Connectez-vous à notre site Internet, téléchargez les documents Plan d'investissement, Fiche de l'investisseur et Contrat d'investissement, lisez-les attentivement et suivez les instructions. Assurez-vous personnellement de détenir un portefeuille mobile ou un compte bancaire. Vous pouvez également vous présenter physiquement dans l'une de nos agences les plus proches pour obtenir des informations complémentaires. Notre service client vous réservera un accueil chaleureux.",
  desc4 = "Oui, nous proposons un service client dédié spécifiquement, pour vous aider à répondre toutes vos questions ou à résoudre les problèmes que vous pourriez rencontrer. Notre équipe d'assistance client est joignable sur les réseaux sociaux, par e-mail ou par téléphone pendant les heures de travail."

export default function QuestAns() {
  const container = useRef<HTMLDivElement>(null)
  const sectionOne = useRef<HTMLDivElement>(null)
  const sectionTwo = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOne.current,
        start: 'top center'
      }
    })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTwo.current,
        start: 'top center'
      }
    })

    tl1.from(sectionOne.current?.children as HTMLCollection, {
      opacity: 0,
      yPercent: 10,
      stagger: 0.8,
      ease: 'power2.out',
      duration: 2
    })
    tl2.from(sectionTwo.current?.children as HTMLCollection, {
      opacity: 0,
      yPercent: 10,
      stagger: 0.8,
      ease: 'power2.out',
      duration: 2
    })
  }, [])

  return (
    <Container ref={container}>
      <SeeMore maxheight="600px">
        <div ref={sectionOne} className="flex w-full py-5 md:py-10">
          <div className="w-full md:w-1/2 flex items-center">
            <Timeline active={1} lineWidth={1} bulletSize={16} color="#bf9000">
              <TimelineItem title="Qu'est-ce qu'AGENCE NASSER-AGN ?">
                <p className="font-light text-gray-500 mt-5">{desc1}</p>
              </TimelineItem>

              <TimelineItem title="Qui exploite et gère l'entreprise AGN ?">
                <p className="font-light text-gray-500 mt-5">{desc2}</p>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="hidden md:w-1/2 md:flex justify-end">
            <img src="/image/question/quest1.webp" alt="Image1" height="450px" width="450px" />
          </div>
        </div>

        <div ref={sectionTwo} className="flex w-full mt-5">
          <div className="hidden md:w-1/2 md:flex justify-start">
            <img src="/image/question/quest2.webp" alt="Image2" height="500px" width="500px" />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <Timeline active={1} lineWidth={1} bulletSize={16} color="#bf9000">
              <TimelineItem title="Comment puis-je investir au sein de l'entreprise AGN ?">
                <p className="font-light text-gray-500 mt-5">{desc3}</p>
              </TimelineItem>

              <TimelineItem title="Le support client est-il disponible chez l'entreprise AGN ?">
                <p className="font-light text-gray-500 mt-5">{desc4}</p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </SeeMore>
    </Container>
  )
}