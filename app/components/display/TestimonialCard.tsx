import { TestimonialType } from '@/type'
import { Image } from '@mantine/core'
import React from 'react'
import { IoMdStar } from 'react-icons/io'

function TestimonialCard(props: TestimonialType) {
  const { text, name, work } = props
  return (
    <div className='relative py-10 px-3 md:pl-30 md:pr-10 w-full h-[500px]' >

      {/* testimonial  */}
      <div className='flex flex-col items-center justify-between gap-5 py-14 px-16 bg-white text-black rounded-4xl md:rounded-[60px] w-full h-full mix-h-[400px] ' >
        <p className='max-w-[410px] line-clamp-[10]  ' > {text} </p>
        <div className='flex items-center justify-center gap-0 md:gap-1' >
          {Array.from({ length: 5 }, (_, index) => (
            <IoMdStar key={index} color='yellow' size={30} />
          ))}
        </div>
      </div>

      {/* person infos  */}
      <div className='flex-col items-center justify-center gap-5 p-5 bg-primary rounded-3xl absolute left-0 top-1/2 -translate-y-1/2 max-w-[180px] hidden md:flex ' >
        <h3 className='text-xl font-bold line-clamp-2' > {name} </h3>
        <p className='line-clamp-2' > {work} </p>
      </div>

      {/* deco */}
      <div className='absolute bottom-0 right-0 bg-primary rounded-full p-3' >
        <div className='w-[90px] md:w-[120px] h-auto ' >
          <Image src={'/image/home/testimonial-deco.png'} alt='deco' />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard