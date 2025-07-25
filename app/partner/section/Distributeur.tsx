import Container from "@/app/components/common/Container"

function Distributeur() {
  return (
    <div className="w-screen bg-secondary-fade py-10 text-black mb-10" >
      <Container tag="section" className=" flex flex-col gap-8 items-center justify-center" >
        <p className="text-secondary text-center " >Partenaire pour l&apos;import-export</p>
        <h2 className=" text-3xl md:text-4xl text-center font-bold " >DISTRIBUTEUR GENERAL COMORES TRADING (DGCT)</h2>
        <p className="text-center" >Avec DGCT, nous fluidifions les échanges commerciaux entre les îles et au-delà, pour  une économie plus intégrée.  Grâce à DGCT, nous facilitons la circulation des biens et produits entre Madagascar,  les Comores et l&apos;international, en assurant une logistique maîtrisée.</p>
        <p className="text-lg font-bold text-center " > {'" Relier les marchés, rapprocher les peuples "'} </p>
      </Container>
    </div>
  )
}

export default Distributeur