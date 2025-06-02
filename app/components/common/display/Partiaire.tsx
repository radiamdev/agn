import { Image } from '@mantine/core'
import React from 'react'

function Partiaire() {
  const partiaireImage = ['/image/partinaire.png', '/image/partinaire-2.png', '/image/partinaire-3.png', '/image/partinaire-4.png']
  return (
    <div className='w-full bg-[#183B4E78] ' >
      <div className='flex items-center justify-center gap-10 lg:gap-20 xl:gap-30 py-5 md:py-10 flex-wrap' >
        {
          partiaireImage.map((image, index) => (
            <div key={index} className=' w-[60px] lg:w-[100px] h-auto ' >
              <Image src={image} alt='image' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Partiaire
