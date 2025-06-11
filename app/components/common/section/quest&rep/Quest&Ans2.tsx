'use client'

import Container from "../../Container"
import { Timeline, TimelineItem } from "@mantine/core"
import SeeMore from "../../SeeMore"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const desc = "AGENCE NASSER ou AGN est une entreprise innovante de conseil en entrepreneuriat, d'investissements et de gestion de capital qui offre aux investisseurs la possibilité de participer au marché de l'investissement en son sein et de réaliser des bénéfices annuels garantis payables à l'échéance contractuelle.",
    desc1 = "La sécurité est une priorité absolue chez l'entreprise AGN. Nous conservons les fonds des clients dans des comptes séparés pour garantir la sécurité de vos activités d'investissement et de vos informations personnelles.",
    desc2 = "L'entreprise AGN ne fournit pas de conseils juridiques, ni de recommandations financières. Les informations fournies sont uniquement à des fins éducatives et informatives. Les investisseurs peuvent consulter des professionnels juridiques et financiers pour obtenir des conseils spécifiques.",
    desc3 = "Les fonds des investisseurs sont généralement détenus dans des comptes séparés auprès d'institutions financières réputées. Dans le cas peu probable d'une faillite ou d'une insolvabilité, les fonds des clients sont conservés séparément des actifs de l'entreprise et ne seront pas affectés.",
    desc4 = "Les litiges survenant sur l'investissement au sein de l'entreprise AGN sont généralement résolus via notre processus interne de résolution des litiges. Si aucune solution ne peut être trouvée, il peut y avoir des options d'arbitrage externe ou de recours juridique comme indiqué dans le contrat d'investissement.",
    desc5 = "Oui, nous fournissons des ressources pédagogiques telles que des guides d'investissement, des formations gratuites et des articles pour aider les investisseurs à améliorer leurs connaissances sur les stratégies d'investissement."

export default function QuestAns2() {
    const leftSide = useRef<HTMLDivElement>(null)
    const rightSide = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: leftSide.current,
                start: 'top center'
            }
        })

        tl.from(leftSide.current, {
            opacity: 0,
            xPercent: 10,
            ease: 'power2.out'
        })
            .from(rightSide.current, {
                opacity: 0,
                xPercent: -10,
                ease: 'power2.out'
            })
    })

    return (
        <Container className="py-10">
            <SeeMore maxheight="520px">
                <div ref={leftSide} className="w-full md:flex">
                    <div className="w-full md:w-1/2">
                        <Timeline active={2} lineWidth={1} bulletSize={16} color="#bf9000">
                            <TimelineItem title="Comment l'entreprise AGN garantit-elle la sécurité des fonds et des données des investisseurs ?">
                                <p className="font-light text-gray-500 mt-5"> {desc} </p>
                            </TimelineItem>
                            <TimelineItem title="Quelles mesures de sécurité sont mises en place par l'entreprise AGN ?" >
                                <p className="font-light text-gray-500 mt-5"> {desc1} </p>
                            </TimelineItem>
                            <TimelineItem title="L'entreprise AGN fournit-elle des conseils juridiques ou des recommandations financières aux investisseurs ?">
                                <p className="font-light text-gray-500 mt-5"> {desc2} </p>
                            </TimelineItem>
                        </Timeline>
                    </div>

                    <div ref={rightSide} className="w-full pt-6 md:pt-0 md:w-1/2">
                        <Timeline active={2} lineWidth={1} bulletSize={16} color="#bf9000">
                            <TimelineItem title="Qu'advient-il de mes fonds en cas de faillite ou d'insolvabilité de l'entreprise AGN ?">
                                <p className="font-light text-gray-500 mt-5"> {desc3} </p>
                            </TimelineItem>
                            <TimelineItem title="Quel est le processus de résolution des litiges survenant sur l'investissement au sein de l'entreprise AGN ?" >
                                <p className="font-light text-gray-500 mt-5"> {desc4} </p>
                            </TimelineItem>
                            <TimelineItem title="L'entreprise AGN propose-t-elle des ressources d'éducation financière pour les investisseurs?">
                                <p className="font-light text-gray-500 mt-5"> {desc5} </p>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </SeeMore>
        </Container>
    )
}