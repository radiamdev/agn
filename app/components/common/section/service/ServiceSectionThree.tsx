import { Image } from '@mantine/core'
import React from 'react'

const ServiceSectionThree = () => {
    return (
        <section className="bg-white lg:py-6 lg:px-0 p-4 flex flex-col lg:flex-row items-center relative">
            <div className="w-full lg:w-[50%] flex-shrink-0">
                <Image
                    src="/image/service/import_export.jpg"
                    alt="icon"
                    className="!w-full !h-auto"
                />
            </div>
            <div className="w-full lg:w-[55%] bg-white shadow-xl space-y-6 lg:p-16 p-4 z-30 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2">
                <div className="h-2 w-32 bg-secondary" />
                <h2 className="text-black font-semibold text-2xl">
                    Import-export
                </h2>
                <h1 className="text-secondary font-bold text-3xl">
                    Le monde est votre marché.
                </h1>
                <p className="text-black/80 text-md text-justify">{`Simplifiez vos échanges internationaux grâce à notre expertise en logistique et en douane. Étendez votre activité au-delà des frontières avec notre service d’import-export. Nous vous assistons dans toutes les démarches logistiques, douanières et commerciales pour faciliter vos échanges internationaux en toute sécurité.`}</p>

                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        ✈️ <span className="font-semibold">Import</span>
                    </div>
                    <p className="text-black/80">
                        Description : Entrée de marchandises dans le paysPrix :
                        Variable selon la nature et le volume des marchandises
                    </p>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        🚢 <span className="font-semibold">Export</span>
                    </div>
                    <p className="text-black/80">
                        Description : Sortie de marchandises hors du paysPrix :
                        Variable selon la destination et la typologie des
                        produits
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ServiceSectionThree
