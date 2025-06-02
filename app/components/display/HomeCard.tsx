import { HomeCardPropsType } from '@/type'
import { Image } from '@mantine/core'
import React from 'react'

function HomeCard(props: HomeCardPropsType) {
  const { title, img, buttonText, description, buttonHref } = props
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-5  bg-secondary rounded-2xl text-white w-[350px] h-[450px] ' >
      <div className='bg-white p-[12px] rounded-full w-fit' >
        <div className='w-[50px]' >
          <Image src={img} alt='card image' />
        </div>
      </div>
      <h2 className='text-2xl font-bold text-center' > {title} </h2>
      <p className='text-center' >
        {description}
      </p>
      <button className='py-2 px-5 rounded-md bg-primary font-bold w-fit' > {buttonText} </button>
    </div>
  )
}

export default HomeCard
