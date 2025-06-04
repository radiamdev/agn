import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { Image } from "@mantine/core"

function Hero() {
  return (
    <div className="w-full bg-primary" >
      <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 text-white mb-10 gap-5 lg:gap-0" >

        <div className="flex flex-col gap-5 lg:gap-10" >
          <h1 className="text-6xl font-bold" > PARTENAIRES </h1>
          <Separator className="bg-secondary" />
          <p>Chez AGENCE NASSER-AGN, nous croyons au pouvoir des synergies.  Nos partenaires stratégiques jouent un rôle clé dans la réalisation de nos missions à  travers différents secteurs. Ensemble, nous construisons un écosystème solide,  innovant et engagé pour le développement durable, l&apos;entrepreneuriat et l&apos;impact social.</p>
        </div>

        <div className="w-full h-auto" >
          <Image src={'/image/termOfUse/term-hero.png'} alt="hands image" />
        </div>
      </Container>
    </div>
  )
}

export default Hero