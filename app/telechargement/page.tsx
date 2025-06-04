import FileToDown from "./section/FileToDown"
import Hero from "./section/Hero"

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]" >
      <Hero />
      <FileToDown />
    </div>
  )
}

export default page