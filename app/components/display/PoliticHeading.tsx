import Container from "../common/Container"

function PoliticHeading({ title, text }: { title: string, text: string }) {
  return (
    <Container tag="div" className="flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-10 text-black py-10 "  >
      <h1 className=" text-4xl md:text-5xl font-bold uppercase"> {title} </h1>
      <p className="text-xs max-w-[750px] "> {text} </p>
    </Container>
  )
}

export default PoliticHeading