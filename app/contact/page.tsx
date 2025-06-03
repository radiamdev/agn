import Container from '../components/common/Container'
import ContactSection from './section/Contact'
import Hero from './section/Hero'

function page() {
  return (
    <div className='w-screen pt-[130px] md:pt-[150px] flex items-center justify-center' >
      <Container tag='section' >
        <Hero />
        <ContactSection />
      </Container>
    </div>
  )
}

export default page