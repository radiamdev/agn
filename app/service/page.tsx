import React from 'react'
import HeroService from '../components/common/section/service/HeroService'
import ServiceSectionOne from '../components/common/section/service/ServiceSectionOne'
import ServiceSectionTwo from '../components/common/section/service/ServiceSectionTwo'
import ServiceSectionThree from '../components/common/section/service/ServiceSectionThree'
import ServiceSectionFour from '../components/common/section/service/ServiceSectionFour'
import ServiceSectionFive from '../components/common/section/service/ServiceSectionFive'

export const metadata = {
    title: 'AGN | Service',
    description: 'Découvrez les services proposés par AGN.',
}

const ServicePage = () => {
    return (
        <>
            <HeroService />
            <ServiceSectionOne />
            <ServiceSectionTwo />
            <ServiceSectionThree />
            <ServiceSectionFour />
            <ServiceSectionFive />
        </>
    )
}

export default ServicePage
