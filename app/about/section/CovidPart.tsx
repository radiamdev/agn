import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import Covid from "@/app/components/icons/Covid"

function CovidPart() {
  return (
    <div className="w-screen bg-secondary-fade text-black" >
      <Container tag="section" className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 py-10 mb-5" >

        <div className="flex flex-col gap-5 w-full lg:w-[50%] " >
          <Separator className="bg-secondary" />
          <h1 className="text-3xl font-bold" > Secouée par la tempête du <p className="font-normal" >COVID-19, protégée par la vision</p> </h1>
        </div>

        <span className="w-1 h-[115px] bg-secondary hidden lg:block " ></span>

        <div className="flex gap-3 w-full lg:w-[50%] " >
          <div>
            <Covid />
          </div>
          <p>En 2020, la pandémie de COVID-19 a entraîné une baisse significative du chiffre d&apos;affaires de l&apos;entreprise AGN, avec une perte de valeur pouvant atteindre 73%. Face à cette situation, le dirigeant a pris la décision de procéder à des réformes structurelles et organisationnelles adéquates, démontrant ainsi une résilience remarquable.</p>
        </div>
      </Container>
    </div>
  )
}

export default CovidPart