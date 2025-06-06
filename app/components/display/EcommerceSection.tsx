import { EcommerceSectionProps } from "@/type"
import Container from "../common/Container"
import EcommerceItem from "./EcommerceItem"

function EcommerceSection(props: EcommerceSectionProps) {
  const { titleOne, titleTwo, imageOne, imageTwo, contentOne, contentTwo } = props
  return (
    <Container tag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0"  >
      <EcommerceItem
        title={titleOne}
        content={contentOne}
        imageSrc={imageOne}
        isReversed={false}
      />

      <EcommerceItem
        title={titleTwo}
        content={contentTwo}
        imageSrc={imageTwo}
        isReversed={true}
      />
    </Container>
  )
}

export default EcommerceSection