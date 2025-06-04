import { Image } from '@mantine/core'
import React from 'react'

interface ServiceSectionOneCardProps {
    icon: string
    title: string
    price: string
}

const ServiceSectionOneCard = ({icon, title, price}: ServiceSectionOneCardProps) => {
    return (
        <div className="bg-pink-primary shadow-lg border-2 border-secondary rounded-3xl flex flex-col items-center gap-2 p-5">
            <Image
                src={icon}
                alt={title}
                className="!w-16 !h-auto"
            />
            <h3 className="text-xl text-black/90 font-semibold">{title}</h3>
            <div className="flex items-center justify-between lg:gap-6 gap-3 border-y-2 border-secondary py-5 my-4">
                {/* Left section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/icons/time.png"
                            alt="icon elevage agn"
                            className="!w-8 !h-auto"
                        />
                        <p className="font-semibold">1 An</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icons/profit.png"
                            alt="icon elevage agn"
                            className="!w-8 !h-auto"
                        />
                        <p>
                            <span className="font-semibold">Taux profit :</span>{' '}
                            30% par an
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icons/investment.png"
                            alt="icon elevage agn"
                            className="!w-8 !h-auto"
                        />
                        <p className="font-semibold">
                            Investissement :{' '}
                            <span className="font-normal">
                               {price}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-full w-0.5 bg-secondary" />

                {/* Right section */}
                <div className="space-y-4">
                    <p className="font-semibold">2 An</p>
                    <p>
                        <span className="font-semibold">Taux profit :</span> 31%
                        par an
                    </p>
                    <p className="font-semibold">
                        Investissement :{' '}
                        <span className="font-normal">
                            {price}
                        </span>
                    </p>
                </div>
            </div>
            <p> Les montants sont en Ariary (MGA)**</p>
        </div>
    )
}

export default ServiceSectionOneCard
