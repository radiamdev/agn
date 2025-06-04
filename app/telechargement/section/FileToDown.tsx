import Container from "@/app/components/common/Container"
import Separator from "@/app/components/common/Separator"
import DownloadCard from "@/app/components/display/DownloadCard"
import { downloadCardData } from "@/data.global"

function FileToDown() {
  return (
    <Container tag="section" className="flex flex-col gap-10 pb-10">
      <div className="flex flex-col gap-3 pl-[20px] " >
        <Separator className="bg-secondary" />
        <h2 className="text-3xl font-bold" > Fichiers <span className="font-normal" >à télécharger</span> </h2>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5" >

        {
          downloadCardData.map((card, id) => (
            <DownloadCard
              key={id}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))
        }
      </div>
    </Container>
  )
}

export default FileToDown