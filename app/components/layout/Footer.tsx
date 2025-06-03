import { FaArrowRightLong } from "react-icons/fa6"
import Container from "../common/Container"
import Logo from "../icons/Logo"
import { IoMailSharp } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { FaPhoneAlt } from "react-icons/fa"
import { footerPrincipalLinksData, footerSecondaryLinksData } from "@/data.global"
import Link from "next/link"

function Footer() {
  const footerSocialMedia = [
    { icon: <IoMailSharp size={35} color="#183b4e" /> },
    { icon: <TbWorld size={35} color="#183b4e" /> },
    { icon: <FaPhoneAlt size={33} color="#183b4e" /> },
  ]
  return (
    <div className="w-screen bg-primary text-white font-light" >
      <Container tag="footer"  >
        <div className="flex flex-col items-center justify-center gap-5">

          {/* contact part  */}
          <div className="w-full  flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b gap-5" >
            <h4 className="text-3xl font-bold" > Contactez <span className="font-normal" >nous</span> </h4>
            <button className=" flex items-center gap-2  rounded-xl hover:cursor-pointer bg-white" >
              <p className="h-full py-2 md:py-3 px-5 md:px-8 rounded-lg  bg-secondary-fade-2 text-black !font-bold " >Contactez nous</p>
              <span className="border border-secondary rounded-full p-1 mr-3 md:mr-5" >
                <FaArrowRightLong color="#bf9000" size={12} />
              </span>
            </button>
          </div>

          {/* links part  */}
          <div className=" w-full grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0 border-b pb-10" >

            <div className="flex items-start flex-col gap-6 lg:gap-10" >
              <Logo className="w-[90px] h-auto md:w-[150px]" />
              <p className="max-w-[250px] " >Votre partenaire de confiance pour des solutions innovantes en entrepreneuriat et investissement.</p>
              <div className="flex gap-5" >
                {
                  footerSocialMedia.map((icon, id) => (
                    <span key={id} className="bg-white p-2 rounded-full hover:cursor-pointer" > {icon.icon} </span>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col gap-7 lg:gap-10 justify-center" >
              <h4 className="font-bold text-lg lg:text-xl " > Liens </h4>
              <div className="flex flex-col gap-2 lg:gap-5" >
                {
                  footerPrincipalLinksData.map((link, id) => (
                    <Link key={id} href={link.url} className="font-light hover:text-secondary transition-colors" > {link.title} </Link>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col gap-7 lg:gap-10 justify-center" >
              <h4 className="font-bold text-lg lg:text-xl " > Liens </h4>
              <div className="flex flex-col gap-2 lg:gap-5" >
                {
                  footerSecondaryLinksData.map((link, id) => (
                    <Link key={id} href={link.url} className="font-light hover:text-secondary transition-colors" > {link.title} </Link>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col gap-10 justify-center" >
              <h4 className="font-bold text-lg lg:text-xl " > Contact </h4>
              <div className="flex flex-col gap-5" >
                <p>AGENCE NASSER-AGN Service Client Box N°16 Dame de Cœur Center, Mangarivotra Mahajanga, MADAGASCAR</p>
                <p className="flex flex-col" >
                  <span>+261 32 02 234 43 </span>
                  <span>+261 33 72 450 77 </span>
                  <span>+261 34 02 567 25</span>
                </p>
                <p className="underline" >service.client@agencenasser.com</p>
                <p className="underline">www.agencenasser.com</p>
              </div>
            </div>
          </div>

          {/* copywright part */}
          <div className="w-full py-10" >
            &copy; 2025 <strong className="font-bold" > AGENCE NASSER-AGN </strong> Tous les droits sont réservés.
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer