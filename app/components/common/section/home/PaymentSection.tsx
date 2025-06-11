"use client"

import PaymentCard from "@/app/components/display/PaymentCard"
import { paymentData } from "@/data.global"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React from "react"

function PaymentSection() {
  const containerRef = React.useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(containerRef.current?.children as HTMLCollection, {
      scale: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom 20%",
      },
      ease: "power4.out",
    })
  }, [])

  return (
    <section ref={containerRef} className="w-full h-fit py-10 flex items-center justify-center gap-10 flex-wrap bg-[linear-gradient(to_bottom,_#0194B652_1%,_#BFE4ED12_25%,_white_50%,_#BFE4ED12_75%,_#0194B652_99%)] my-10">
      {
        paymentData.map((method, id) => (
          <PaymentCard
            key={id}
            image={method.image}
            title={method.title}
            phoneNumber={method.phoneNumber}
          />
        ))
      }
    </section>
  )
}

export default PaymentSection