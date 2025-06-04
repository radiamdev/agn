import Activity from "./section/Activity"
import Hero from "./section/Hero"
import Origin from "./section/Origin"

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]  " >
      <Hero />
      <Origin />
      <Activity />
    </div>
  )
}

export default page