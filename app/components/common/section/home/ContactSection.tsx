'use client'

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { InformationDataType } from "@/type"
import { IoMailSharp } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import Link from "next/link"
import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ContactForm from "@/app/contact/section/ContactForm"

function ContactSection() {

  const sectionRef = React.useRef<HTMLElement>(null)
  const leftSideRef = React.useRef<HTMLFormElement>(null)
  const rightSideRef = React.useRef<HTMLDivElement>(null)

  const informationData: InformationDataType[] = [
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


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
      }
    })
    tl
      .from(leftSideRef.current, {
        xPercent: -20,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })
      .from(rightSideRef.current, {
        xPercent: 20,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      }, '<')
  }, [])

  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center justify-center gap-10  relative lg:p-8 xl:p-10 pb-10 ">
      {/* title  */}
      <h1 className="pt-8 text-3xl font-bold relative w-fit" >
        <span className="absolute h-2 w-[100px] bg-secondary top-0 left-0 " ></span> {' '}
        Contactez
        <span className="font-normal" >  nous</span>
      </h1>
      <p className="max-w-[550px] text-center" >Vous avez une vision, un projet ou un besoin stratégique ? Notre équipe est prête à vous accompagner avec rigueur et engagement. Contactez-nous pour avancer ensemble.</p>

      {/* form and contact  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:px-10 xl:px-20 relative z-10" >


        <div className="w-full">
          <ContactForm />
        </div>

        <div ref={rightSideRef} className="bg-black text-white px-10 py-10 flex flex-col gap-10" >
          <h4 className="text-2xl font-bold text-center" > Information </h4>
          {
            informationData.map((item) => (
              <div key={item.text} className="flex flex-col md:flex-row gap-5 items-center" >
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
      <div className="h-[80%] w-[230px] absolute bg-secondary bottom-0 right-0 hidden lg:block" >  </div>
    </section>
  )
}

export default ContactSection