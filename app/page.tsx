import Container from './components/common/Container'
import CardSection from './components/common/section/home/CardSection'
import Hero from './components/common/section/home/Hero'

export default function Home() {
    return (
        <div>
            <Container tag='section' >
                <Hero />
                <CardSection />
            </Container>
        </div>
    )
}
