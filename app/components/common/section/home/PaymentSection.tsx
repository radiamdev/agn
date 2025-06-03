import PaymentCard from "@/app/components/display/PaymentCard"
import { paymentData } from "@/data.global"

function PaymentSection() {
  return (
    <section className="w-full h-fit py-10 flex items-center justify-center gap-10 flex-wrap bg-[linear-gradient(to_bottom,_#0194B652_1%,_#BFE4ED12_25%,_white_50%,_#BFE4ED12_75%,_#0194B652_99%)] my-10">
      {
        paymentData.map((method, id) => (
          <PaymentCard
            key={id}
            image={method.image}
            title={method.title}
            phoneNumber={method.phoneNumber}
          />
        ))
      }
    </section>
  )
}

export default PaymentSection