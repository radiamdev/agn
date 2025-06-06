import React from 'react'
import Container from './components/common/Container'
import Link from 'next/link'

function notFound() {
  return (
    <Container tag='section' className='h-screen pt-[90px] md:pt-[150px] flex flex-col items-center justify-center gap-8 ' >
      <h1 className='text-8xl font-bold text-primary' > 404 </h1>
      <p>  Oups! page non existant</p>
      <p> Revenir à la page d&apos; <Link href={'/'} className='font-bold text-secondary underline' > accueil </Link> </p>
    </Container>
  )
}

export default notFound