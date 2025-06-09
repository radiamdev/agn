'use client'

import React from 'react'
import { Image } from '@mantine/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

function Partiaire() {
    const partiaireImage = [
        '/image/home/partinaire.png',
        '/image/home/partinaire-2.png',
        '/image/home/partinaire-3.png',
        '/image/home/partinaire-4.png',
    ]

    return (
        <div className="w-full bg-[#183B4E78] py-5 md:py-10">
            {/* Mobile version - Swiper */}
            <div className="block md:hidden px-5">
                <Swiper
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                >
                    {partiaireImage.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <Image
                                    src={image}
                                    alt={`partenaire-${index}`}
                                    className="w-[100px] h-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop version */}
            <div className="hidden md:flex items-center justify-center gap-10 lg:gap-20 xl:gap-30 flex-wrap">
                {partiaireImage.map((image, index) => (
                    <div key={index} className="w-[60px] lg:w-[100px] h-auto">
                        <Image src={image} alt={`partenaire-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partiaire
