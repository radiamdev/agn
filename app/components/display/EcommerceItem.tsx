import { EcommerceItemProps } from '@/type'
import { Image } from '@mantine/core'
import React from 'react'

function EcommerceItem(props: EcommerceItemProps) {
  const { title, content, imageSrc, isReversed } = props
  return (
    <div className={`w-full flex flex-col gap-5 pb-10 ${isReversed ? 'items-end' : 'lg:border-r border-l-black'} `} >
      <h3 className='text-white font-bold text-lg bg-secondary text-center py-3 lg:w-[50%] w-full' > {title} </h3>

      <div className={`w-full flex items-center justify-center gap-5 flex-col  ${isReversed ? 'lg:flex-row-reverse  ' : 'lg:flex-row'} py-10 `} >
        <div className='w-[170px] h-auto bg-primary rounded-full p-5 ' >
          <Image src={imageSrc} alt='image' />
        </div>
        <div className='max-w-[360px] text-xs' >
          {content}
        </div>
      </div>
    </div>
  )
}

export default EcommerceItem