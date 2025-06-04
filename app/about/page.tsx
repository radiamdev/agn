import Activity from "./section/Activity"
import Hero from "./section/Hero"
import Origin from "./section/Origin"
import WhoAryWe from "./section/WhoAryWe"

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]  " >
      <Hero />
      <Origin />
      <Activity />
      <WhoAryWe />
    </div>
  )
}

export default page