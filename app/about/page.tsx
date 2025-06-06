import Activity from "./section/Activity"
import CovidPart from "./section/CovidPart"
import Expansion from "./section/Expansion"
import Hero from "./section/Hero"
import Origin from "./section/Origin"
import WhoAryWe from "./section/WhoAryWe"

export const metadata = {
  title: 'AGN | À propos',
  description: 'En savoir plus sur l’histoire et la mission de AGN.',
};


function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]" >
      <Hero />
      <Origin />
      <Activity />
      <WhoAryWe />
      <CovidPart />
      <Expansion />
    </div>
  )
}

export default page