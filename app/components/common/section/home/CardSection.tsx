import HomeCard from '@/app/components/display/HomeCard'
import { homeCardData } from '@/data.global'
import React from 'react'

function CardSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-5 py-10' >
      {/* title  */}
      <div className='py-10 flex items-center justify-center w-fit relative' >
        <span className='h-2 w-[100px] absolute top-0 left-0 bg-secondary'  ></span>
        <h2 className='text-2xl font-black' > Plongez au coeur <span className='font-normal' >  de notre savoir-faire </span>  </h2>
      </div>

      {/* cards  */}
      <div className=' w-fit mx-auto flex items-center justify-center md:justify-start gap-8 flex-wrap' >
        {
          homeCardData.map((card, id) => (
            <HomeCard
              key={id}
              title={card.title}
              img={card.img}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CardSection