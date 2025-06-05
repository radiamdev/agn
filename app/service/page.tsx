import React from 'react'
import HeroService from '../components/common/section/service/HeroService'
import ServiceSectionOne from '../components/common/section/service/ServiceSectionOne'

export const metadata = {
  title: 'AGN | Service',
  description: 'Découvrez les services proposés par AGN.',
};


const ServicePage = () => {
  return (
    <main>
      <HeroService />
      <ServiceSectionOne />
    </main>
  )
}

export default ServicePage