'use client'
import Container from "../../Container"
import { Timeline, TimelineItem } from "@mantine/core"
import SeeMore from "../../SeeMore"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { textRevealAnimation } from "@/data.global"

const desc = "L'entreprise AGN opère sous la surveillance des autorités réglementaires compétentes à Madagascar. Dans toutes les juridictions où nous proposons nos services, nous adhérons aux normes du secteur et aux lois applicables pour garantir la sécurité et l'équité de notre entreprise et de nos investisseurs. En voici les coordonnées d'enregistrement de l'entreprise AGN à Madagascar :",
    desc1 = "Nous avons mis en œuvre des politiques et procédures strictes en matière de lutte contre le blanchiment d'argent et le financement du terrorisme. Nous effectuons des contrôles d'identité approfondis sur tous les investisseurs afin de détecter tout comportement suspect et d'en informer les autorités compétentes.",
    desc2 = "Oui, nous encourageons les investisseurs à partager leurs témoignages et leurs avis d'expérience sur leurs investissements au sein de l'entreprise AGN. Les commentaires des investisseurs nous aident à comprendre ce qui fonctionne bien et à identifier les domaines à améliorer."

export default function QuestAns3() {
    const container = useRef<HTMLDivElement>(null)
    const image = useRef<HTMLImageElement>(null)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(image.current, {
            ...textRevealAnimation,
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center'
            }
        })
    }, [])

    return (
        <Container ref={container} className="bg-[#E9D9A8] py-10">
            <SeeMore maxheight="500px">
                <div className="w-full md:flex">
                    <div className="w-full md:w-1/2">
                        <Timeline active={1} lineWidth={1} bulletSize={16} color="#BF9000">
                            <TimelineItem title="Quels organismes de réglementation supervisent l'entreprise AGN ?">
                                <p className="font-light text-gray-700 mt-5"> {desc} </p>
                                <div className="pt-6 md:pt-0 md:p-6 md:flex md:flex-col md:items-center space-y-5 md:space-y-5">
                                    <div className="space-y-5 md:pt-6 md:space-y-0 md:space-x-5">
                                        <div className="p-2 md:p-3 bg-white inline-block rounded-md shadow-lg text-gray-700">
                                            STAT : 74908 41 2017 0 00865
                                        </div>
                                        <div className="p-2 md:p-3 bg-white inline-block rounded-md shadow-lg text-gray-700">
                                            NIF : 5002818832
                                        </div>
                                    </div>
                                    <div className="p-2 md:p-3 bg-white inline-block rounded-md shadow-lg text-gray-700">
                                        RCS : Mahajanga 2018 A 00016
                                    </div>
                                </div>
                            </TimelineItem>
                            <TimelineItem title="Comment l'entreprise AGN garantit-elle la conformité aux réglementations anti-blanchiment d'argent et le financement du terrorisme ?" >
                                <p className="font-light text-gray-700 mt-5"> {desc1} </p>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className="w-full md:w-1/2 space-y-5">
                        <div className="flex justify-end">
                            <img ref={image} src="/image/question/quest3.webp" alt="quest3" width="500px" height="412px" />
                        </div>
                        <Timeline active={1} lineWidth={1} bulletSize={16} color="#bf9000">
                            <TimelineItem title="Les investisseurs peuvent-ils fournir des témoignages ou des avis d'expérience sur leurs investissements au sein de l'entreprise AGN ?">
                                <p className="font-light text-gray-700 mt-5"> {desc2} </p>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </SeeMore>
        </Container>
    )
}