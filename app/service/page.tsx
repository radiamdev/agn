'use client'

import { Tabs } from '@mantine/core'
import HeroService from '../components/common/section/service/HeroService'
import ConsultanceEnEntrepreneuriat from '../components/common/section/service/ConsultanceEnEntrepreneuriat'
import InvestissementEtGestionDeCapital from '../components/common/section/service/InvestissementEtGestionDeCapital'
import ConsignationDesNavires from '../components/common/section/service/ConsignationDesNavires'
import ImportExport from '../components/common/section/service/ImportExport'
import RepresentationCommerciale from '../components/common/section/service/RepresentationCommerciale'
import { HiUserAdd } from 'react-icons/hi'
import { GrMoney } from 'react-icons/gr'
import { IoBoat } from 'react-icons/io5'
import { MdImportExport, MdSell } from 'react-icons/md'

const ServicePage = () => {
    return (
        <>
            <HeroService />
            <div className="container mx-auto px-12 py-8">
                <Tabs defaultValue="one" color="#183b4e" variant="outline">
                    <Tabs.List>
                        <Tabs.Tab
                            leftSection={<HiUserAdd size={24} />}
                            value="one"
                            className="!text-xl !font-semibold"
                        >
                            Consultance en entrepreneuriat
                        </Tabs.Tab>
                        <Tabs.Tab
                            leftSection={<GrMoney size={24} />}
                            value="two"
                            className="!text-xl !font-semibold"
                        >
                            Investissements et gestion de capital
                        </Tabs.Tab>
                        <Tabs.Tab
                            leftSection={<IoBoat size={24} />}
                            value="three"
                            className="!text-xl !font-semibold"
                        >
                            Consignation des navires
                        </Tabs.Tab>
                        <Tabs.Tab
                            leftSection={<MdImportExport size={24} />}
                            value="four"
                            className="!text-xl !font-semibold"
                        >
                            Import & Export
                        </Tabs.Tab>
                        <Tabs.Tab
                            leftSection={<MdSell size={24} />}
                            value="five"
                            className="!text-xl !font-semibold"
                        >
                            Représentation commerciale
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="one" pt="md">
                        <ConsultanceEnEntrepreneuriat />
                    </Tabs.Panel>
                    <Tabs.Panel value="two" pt="md">
                        <InvestissementEtGestionDeCapital />
                    </Tabs.Panel>
                    <Tabs.Panel value="three" pt="md">
                        <ConsignationDesNavires />
                    </Tabs.Panel>
                    <Tabs.Panel value="four" pt="md">
                        <ImportExport />
                    </Tabs.Panel>
                    <Tabs.Panel value="five" pt="md">
                        <RepresentationCommerciale />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    )
}

export default ServicePage
