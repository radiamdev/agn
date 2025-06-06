import Button from "@/app/components/common/Button"
import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import { Image } from "@mantine/core"
import Link from "next/link"

function Hero() {
  return (
    <div className="w-screen bg-primary text-white rounded-bl-[30px] md:rounded-bl-[50px] lg:rounded-bl-[70px]  " >
      <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mb-10 pb-5" >

        {/* left side  */}
        <div className="flex flex-col gap-5 py-3 lg:py-0" >
          <Separator className="bg-white" />
          <h1 className=" text-3xl md:text-[40px] font-bold " >Histoire et Présentation</h1>
          <p>Depuis sa création, l’AGENCE NASSER-AGN s’est imposée comme un acteur clé dans le domaine de l’entrepreneuriat et des investissements à Madagascar. Son parcours, marqué par des défis relevés avec détermination et une vision claire, témoigne de son engagement envers le développement économique et social du pays. Chaque étape, chaque défi surmonté, chaque projet mené a forgé l’identité de notre agence. Découvrez le parcours qui nous a conduits là où nous sommes aujourd’hui.</p>
          <Link href={'/contact'} > <Button label="Contact" variant="ghost-white" />  </Link>
        </div>

        {/* right side  */}
        <div className="w-full h-auto" >
          <Image src={'/image/about/hero-about.png'} alt="image" />
        </div>
      </Container>
    </div>
  )
}

export default Hero