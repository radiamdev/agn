import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
// import Input from "../../Input"
// import TextArea from "../../TextArea"
import { IoMailSharp } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import Link from "next/link"
import Button from "@/app/components/common/Button"

function ContactSection() {
  const informationData = [
    {
      icon: <FaMapMarkerAlt size={30} color="black" />,
      text: "AGENCE NASSER-AGN Service Client Box N°16 Dame de Cœur Center, Mangarivotra Mahajanga, MADAGASCAR",
      isLink: false
    },
    {
      icon: <FaPhoneAlt size={30} color="black" />,
      text: "+261 32 02 234 43\n +261 33 72 450 77 \n+261 34 02 567 25",
      isLink: false
    },
    {
      icon: <IoMailSharp size={30} color="black" />,
      text: "serviceclinet@agence.com",
      isLink: true,
      href: 'mailTo:serviceclinet@agence.com'
    },
    {
      icon: <TbWorld size={30} color="black" />,
      text: "www.agencenasser.com",
      isLink: true,
      href: 'www.agencenasser.com'
    },
  ]

  return (
    <section className="w-full flex flex-col items-center bg-white justify-center gap-10 relative lg:p-8 xl:p-10 pb-10 ">
      {/* title */}
      <h1 className="pt-8 text-3xl font-bold relative w-fit" >
        <span className="absolute h-2 w-[100px] bg-secondary top-0 left-0 " ></span>
        Contactez
        <span className="font-normal" > nous</span>
      </h1>
      <p className="max-w-[550px] text-center" >Vous avez une vision, un projet ou un besoin stratégique ? Notre équipe est prête à vous accompagner avec rigueur et engagement. Contactez-nous pour avancer ensemble.</p>

      {/* form and contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:px-10 xl:px-20 relative z-10" >

        <form className="w-full flex flex-col gap-5 " >
          {/* <Input placeholder="name" />
          <Input placeholder="E-mail" />
          <TextArea placeholder="Message" /> */}
          <input type="text" placeholder="Nom" className="!outline-none border-b border-black w-full py-3 focus:outline-none mb-3" />
          <input type="text" placeholder="Email" className="!outline-none border-b border-black w-full py-3 focus:outline-none mb-3" />
          <input type="text" placeholder="Objet" className="!outline-none border-b border-black w-full py-3 focus:outline-none mb-3" />
          <textarea placeholder="Message" className="!outline-none border-b border-black w-full py-3 focus:outline-none mb-3 min-h-[150px]" />
          <Button label="Envoyer" variant='primary' className="w-fit" />
        </form>

        <div className="bg-black text-white px-10 py-10 flex flex-col gap-10" >
          <h4 className="text-2xl font-bold text-center" > Information </h4>
          {
            informationData.map((item, id) => (
              <div key={id} className="flex flex-col md:flex-row gap-5 items-center" >
                <span className="bg-white p-2 h-fit rounded-full " > {item.icon} </span>
                {item.isLink ? (
                  <Link href={item.href as string} className="hover:cursor-pointer hover:text-secondary transition-colors underline font-light" > <p> {item.text} </p> </Link>
                )
                  : (<p className="whitespace-pre-line font-light" > {item.text} </p>)
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="h-[80%] w-[230px] absolute bg-secondary bottom-0 right-0 hidden lg:block" > </div>
    </section>
  )
}

export default ContactSection

