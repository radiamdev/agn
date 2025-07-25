import { LegalMentionProps } from "@/type"


export default function LegalMentionItems({ left, right }: LegalMentionProps) {
    return (
        <>
            <div className="">
                <div className="space-y-10 md:space-y-0 md:flex w-full">
                    <div className="w-full md:w-1/2 px-4">
                        <div>
                            <div className="relative">
                                <div className="absolute -top-9 -left-6 w-fit bg-[#183B4E] rounded-full text-white text-4xl py-2 px-5 font-bold">
                                    {left?.number0}
                                </div>
                                <div className="w-fit text-white text-4xl p-4 font-bold bg-[#bf9000] rounded-lg ">
                                    {left?.title0}
                                </div>
                            </div>
                            <div className="p-2">
                                {left?.description0?.map((txt, i) => (
                                    <div key={i} className="text-gray-800">
                                        {txt}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div>
                            <div className="relative">
                                <div className="absolute -top-9 -left-6 w-fit bg-[#183B4E] rounded-full text-white text-4xl p-2 px-5 font-bold">
                                    {right?.number}
                                </div>
                                <div className="w-fit text-white text-4xl p-4 font-bold bg-[#BF9000] rounded-lg ">
                                    {right?.title}
                                </div>
                            </div>
                            <div className="p-2">
                                {right?.description?.map((txt, i) => (
                                    <div key={i} className="text-gray-800">
                                        {txt}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}