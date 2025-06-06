import React from 'react'
import HeroService from '../components/common/section/service/HeroService'
import ServiceSectionOne from '../components/common/section/service/ServiceSectionOne'
import ServiceSectionTwo from '../components/common/section/service/ServiceSectionTwo'

export const metadata = {
    title: 'AGN | Service',
    description: 'Découvrez les services proposés par AGN.',
}

const ServicePage = () => {
    return (
        <main>
            <HeroService />
            <ServiceSectionOne />
            <ServiceSectionTwo />
        </main>
    )
}

export default ServicePage
