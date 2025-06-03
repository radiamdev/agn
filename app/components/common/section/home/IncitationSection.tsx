import { Image } from "@mantine/core"
import Button from "../../Button"
import Link from "next/link"

function IncitationSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 " >

      {/* image  */}
      <div className="w-full h-auto" >
        <Image src={'/image/home/incitationSection.png'} alt="grout image" />
      </div>

      {/* right side  */}
      <div className="flex flex-col gap-5 md:gap-8 justify-center" >
        <span className="h-2 w-[100px] bg-secondary  " ></span>
        <h2 className=" text-2xl md:text-3xl font-semibold" > Construisez aujourd&apos;hui <span className="font-normal" >les bases de votre avenir</span>  </h2>
        <p> Notre encadrement universitaire est conçu pour répondre aux besoins de l&apos;enseignement supérieur et offrir à l&apos;étudiant une connaissance spécifique de haute gamme conformément à sa formation. Nous vous accompagnons pas à pas vers l&apos;excellence. </p>
        <Link href={'/service'} > <Button label="Nos services" variant="primary" className="w-fit" /> </Link>
      </div>
    </section>
  )
}

export default IncitationSection