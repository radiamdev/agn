import Container from './components/common/Container'
import CardSection from './components/common/section/home/CardSection'
import ContactSection from './components/common/section/home/ContactSection'
import Hero from './components/common/section/home/Hero'
import IncitationSection from './components/common/section/home/IncitationSection'
import PaymentSection from './components/common/section/home/PaymentSection'
import TestimonialSection from './components/common/section/home/TestimonialSection'

export const metadata = {
    title: 'AGN | Accueil',
    description: 'Bienvenue sur le site officiel de AGN.',
};


export default function Home() {
    return (
        <div>
            <Container tag='section' >
                <Hero />
                <CardSection />
                <IncitationSection />
                <TestimonialSection />
                <PaymentSection />
                <ContactSection />
            </Container>
        </div>
    )
}
