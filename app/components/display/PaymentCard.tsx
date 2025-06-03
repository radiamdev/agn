import { PaymentType } from "@/type"
import { Image } from "@mantine/core"

function PaymentCard(props: PaymentType) {
  const { image, title, phoneNumber } = props
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 w-[250px] h-[250px] border border-gray-400 " >
      <div className="w-[100px] h-[100px] flex items-center justify-center " >
        <Image src={image} alt="payment logo image" />
      </div>
      <p className="text-center" > {title} </p>
      {phoneNumber && <p> {phoneNumber} </p>}
    </div>
  )
}

export default PaymentCard