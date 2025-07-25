import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { Image } from "@mantine/core"

function Hero() {
  return (
    <div className="w-full bg-primary mt-20 md:mt-[150px] " >
      <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 text-white mb-10 gap-5 lg:gap-0" >

        <div className="flex flex-col gap-5 lg:gap-10" >
          <h1 className="text-4xl md:text-6xl font-bold" > MENTIONS LEGALES </h1>
          <Separator className="bg-secondary" />
          <p>
            Les présentes mentions légales ont pour vocation de définir avec précision les informations essentielles relatives à l’édition, à la gestion et à l’utilisation du site web officiel de l’AGENCE NASSER-AGN.
            En naviguant sur ce site, tout utilisateur reconnaît avoir pris connaissance des présentes dispositions et s’engage à les respecter pleinement. Cette page a été conçue dans un souci de transparence, conformément aux exigences légales en vigueur, afin d’informer les visiteurs sur l’identité de l’éditeur, les conditions d’accès ausite, les droits de propriété intellectuelle, ainsi que les responsabilités liées à l’usage des contenus disponibles.
            L’AGENCE NASSER-AGN accorde une importance capitale à la protection des données personnelles, à la conformité réglementaire et à la sécurité des échanges numériques. Nous invitons donc chaque visiteur à lire attentivement ces mentions légales avant toute utilisation du site, afin de s’assurer d’une navigation éclairée, responsable et conforme aux valeurs de notre entreprise.
          </p>
        </div>

        <div className="w-full h-full" >
          <Image src={'/image/mention/hero.png'} alt="laptop image" />
        </div>
      </Container>
    </div>
  )
}

export default Hero