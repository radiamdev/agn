import { HomeCardPropsType } from '@/type'
import { Image } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function HomeCard(props: HomeCardPropsType) {
  const { title, img, buttonText, description, buttonHref } = props
  return (
    <div className='flex flex-col items-center justify-between gap-6 px-5 py-10  bg-secondary rounded-3xl text-white w-[320px] md:w-[370px] h-[450px] md:h-[510px] ' >
      <div className='bg-white p-[12px] rounded-full w-fit' >
        <div className='w-[50px]' >
          <Image src={img} alt='card image' />
        </div>
      </div>
      <h2 className='text-2xl font-bold text-center' > {title} </h2>
      <p className='text-center line-clamp-6' >
        {description}
      </p>
      <Link href={buttonHref} >  <button className='py-2 px-5 rounded-md bg-primary font-bold w-fit hover:bg-white hover:text-primary transition-colors hover:cursor-pointer ' > {buttonText} </button> </Link>
    </div>
  )
}

export default HomeCard
