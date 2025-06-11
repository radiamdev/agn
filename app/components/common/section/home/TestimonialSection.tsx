'use client'
import TestimonialCard from "@/app/components/display/TestimonialCard"
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialData, textRevealAnimation } from "@/data.global"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination';
import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function TestimonialSection() {
  const containerRef = React.useRef<HTMLElement>(null)
  const textRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(textRef.current?.children as HTMLCollection, {
      ...textRevealAnimation,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom 20%",
      },
      ease: "power4.out",
    })
  }, [])

  return (
    <section ref={containerRef} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 bg-secondary text-white items-center " >

      {/* text part  */}
      <div ref={textRef} className="flex flex-col gap-10 px-10 max-w-[450px] " >
        <span className="h-2 w-[100px] bg-white " ></span>
        <h2 className="text-3xl" >Ils nous ont <span className="font-bold" >fait confiance</span></h2>
        <p>Des centaines de personnes ont transformé leur avenir grâce à nos services. Découvrez le retour d’expérience de certains dirigeants et entrepreneurs qui ont bénéficié les services de l’entreprise AGN</p>
      </div>

      {/* testimonial section  */}
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }} className="w-full overflow-x-hidden"  >
        {
          testimonialData.map((testimonial, id) => (
            <SwiperSlide key={id} >
              <TestimonialCard
                name={testimonial.name}
                work={testimonial.work}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default TestimonialSection