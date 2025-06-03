import Container from './components/common/Container'
import CardSection from './components/common/section/home/CardSection'
import Hero from './components/common/section/home/Hero'
import IncitationSection from './components/common/section/home/IncitationSection'
import PaymentSection from './components/common/section/home/PaymentSection'

export default function Home() {
    return (
        <div>
            <Container tag='section' >
                <Hero />
                <CardSection />
                <IncitationSection />
                <PaymentSection />
            </Container>
        </div>
    )
}
