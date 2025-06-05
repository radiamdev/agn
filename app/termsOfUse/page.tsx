import { threeTermOfUseSection, twoTermOfUseSection } from "@/data.global"
import Hero from "./section/Hero"
import TermOfUseSection from "../components/display/TermOfUseSection"
import Distributeur from "./section/Distributeur"

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]" >
      <Hero />
      {
        threeTermOfUseSection.map((section, id) => (
          <TermOfUseSection
            key={id}
            title={section.title}
            text={section.text}
            image={section.image}
            haveBgColor={section.haveBgColor}
            isReversed={section.isReversed}
            miniTitle={section.miniTitle}
            proverbs={section.proverbs}
          />
        ))
      }
      <Distributeur />
      {
        twoTermOfUseSection.map((section, id) => (
          <TermOfUseSection
            key={id}
            title={section.title}
            text={section.text}
            image={section.image}
            haveBgColor={section.haveBgColor}
            isReversed={section.isReversed}
            miniTitle={section.miniTitle}
            proverbs={section.proverbs}
          />
        ))
      }
    </div>
  )
}

export default page