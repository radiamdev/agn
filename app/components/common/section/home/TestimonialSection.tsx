'use client'
import TestimonialCard from "@/app/components/display/TestimonialCard"
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialData } from "@/data.global"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination';

function TestimonialSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 bg-secondary text-white items-center " >

      {/* text part  */}
      <div className="flex flex-col gap-10 px-10 max-w-[450px] " >
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