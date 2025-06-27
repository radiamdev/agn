import Button from "@/app/components/common/Button"
import { Image } from "@mantine/core"
import Link from "next/link"

function Hero() {
  return (
    <div className='min-h-[500px] mx-auto flex items-center justify-center text-white relative mb-10'  >
      {/* image  */}
      <div className="absolute w-full h-full top-0 left-0" >
        <Image src={'/image/contact/hero-bg.webp'} alt="contact image" className="w-full h-full" />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-primary/50"></div>

      {/* text  */}
      <div className="relative z-10 max-w-[500px] flex flex-col gap-8 px-3 md:px-0" >
        <span className="h-2 w-[100px] bg-secondary" ></span>
        <h2 className="text-3xl font-bold" > Contactez nous </h2>
        <p> Nous sommes là pour vous accompagner. Contactez-nous dès aujourd’hui pour toute demande ou information, et notre équipe vous répondra rapidement. </p>
        <div className="flex items-center gap-5" >
          <Link href={'/about'} > <Button label="Historiques" variant="ghost-white" /> </Link>
          <Link href={'/service'} > <Button label="Service" variant="primary" /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero