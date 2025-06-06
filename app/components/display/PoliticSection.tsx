import { PoliticSectionPropsType } from "@/type"
import Container from "../common/Container"
import Link from "next/link"

function PoliticSection(props: PoliticSectionPropsType) {
  const { titleOne, titleTwo, contentOne, contentTwo, haveEmail } = props
  return (
    <Container tag="section" className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 pb-8 md:pb-10" >

      <div className="flex flex-col gap-5 md:gap-8" >
        <h4 className="w-full py-5 px-3 font-bold text-lg bg-secondary text-white" > {titleOne} </h4>
        <div className="max-w-[90%] px-3 flex flex-col gap-2 text-sm" >
          {contentOne}
        </div>
      </div>

      <div className="flex flex-col  gap-5 md:gap-8">
        <h4 className="w-full py-5 px-3 font-bold text-lg bg-secondary text-white" > {titleTwo} </h4>

        <div className="max-w-[90%] px-3 flex flex-col gap-2 text-sm" >
          {contentTwo}
          {
            haveEmail && (
              <p className="font-bold text-black" > Email : <Link href={'mailto:service.client@agencenasser.com'} className="font-normal text-blue-500" > service.client@agencenasser.com </Link> </p>
            )
          }
        </div>
      </div>
    </Container>
  )
}

export default PoliticSection