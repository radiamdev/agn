import { DownloadCardType } from "@/type"
import ArrowDown from "../icons/ArrowDown"
import Link from "next/link"

function DownloadCard(props: DownloadCardType) {
  const { title, text, buttonText, link } = props
  return (
    <div className="h-[500px] w-full p-8 rounded-2xl bg-primary text-white  flex flex-col items-center justify-between" >
      {/* text  */}
      <div className="flex flex-col items-center justify-center gap-5" >
        <h3 className="text-3xl font-bold text-center" > {title} </h3>
        <span className="h-1 w-[100px] bg-white " ></span>
        <p> {text} </p>

      </div >

      {/* button  */}
      <Link href={link as string} >
        <button className="flex items-center justify-between gap-3 pl-5 bg-secondary rounded-lg w-[270px] hover:cursor-pointer " >
          <p className="underline text-center " > {buttonText} </p>
          <div className="flex items-center justify-center py-3 px-5 bg-white rounded-lg" >
            <ArrowDown />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default DownloadCard