import { TermOfUseSectionType } from '@/type'
import React from 'react'
import Container from '../common/Container'
import { Image } from '@mantine/core'

function TermOfUseSection(props: TermOfUseSectionType) {
  const { title, text, miniTitle, proverbs, isReversed, haveBgColor, image } = props
  return (
    <div className={`w-screen ${haveBgColor && 'bg-secondary-fade'} mb-10 `} >
      <Container tag='section' className={`grid  grid-cols-1 lg:grid-cols-2 items-center gap-5 py-5`} >

        {/* text part  */}
        <div className={`flex flex-col gap-5 md:gap-10 ${isReversed ? 'lg:order-2' : 'lg:order-1'} `} >
          <p className='text-secondary' > {miniTitle} </p>
          <h2 className=' text-4xl md:text-5xl font-bold' > {title} </h2>
          <p> {text} </p>
          <p className='font-bold text-lg' > {`" ${proverbs} "`} </p>
        </div>

        {/* image part  */}
        <div className={`w-full h-auto ${isReversed ? 'lg:order-1' : 'lg:order-2'} `}>
          <Image src={image} alt='image' />
        </div>
      </Container>
    </div>
  )
}

export default TermOfUseSection