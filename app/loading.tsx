import { HashLoader } from 'react-spinners'
import Container from './components/common/Container'

function loading() {
  return (
    <Container className='h-screen flex items-center justify-center text-6xl font-bold' >
      <HashLoader color="#bf9000" />
    </Container>
  )
}

export default loading