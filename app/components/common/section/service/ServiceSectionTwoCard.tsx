import { Image } from '@mantine/core'
import React from 'react'

interface ServiceSectionTwoCardProps {
    icon: string
    description: string
}

const ServiceSectionTwoCard = ({
    icon,
    description,
}: ServiceSectionTwoCardProps) => {
    return (
        <div className="bg-white shadow-xl flex flex-col items-center p-3 relative min-h-32">
            <div className="border border-black p-2 rounded-full bg-white w-12 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={icon} alt="icon" className="!w-full !h-auto" />
            </div>
            <p className="text-center mt-6">{description}</p>
        </div>
    )
}

export default ServiceSectionTwoCard
