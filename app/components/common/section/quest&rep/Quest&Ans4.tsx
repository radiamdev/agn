import SeeMore from "../../SeeMore"

type infoForme = {
    titre: string,
    desc: string
}

function Forme({ titre, desc }: infoForme) {
    return (
        <div className="p-8 border-1 border-gray-500 w-[350px] md:w-[460px] space-y-6">
            <div className="font-bold">
                {titre}
            </div>
            <div className="font-light">
                {desc}
            </div>
        </div>
    )
}

const desc = "Oui, nous accordons une grande importance aux commentaires et suggestions des investisseurs. Vous pouvez nous faire part de vos commentaires via les canaux de communication de l'entreprise. Vos commentaires nous aident à améliorer les services de l'entreprise afin de mieux répondre à vos besoins d'investissement.",
    desc1 = "Oui, l'entreprise AGN finance tout nouvel entrepreneur capable de lancer une entreprise éprouvée en matière d'inclusion de la pauvreté et conçoit un meilleur plan pour en accroître l'accès et l'étendre rapidement. Il devrait également être prouvé que la nouvelle entreprise créée augmente considérablement les mesures d'impact notamment le revenu ou la consommation des ménages.",
    desc2 = "Il est très simple de demander des financements auprès de l'entreprise AGN. Connectez-vous à notre site Internet, téléchargez le document Demande des financements-AGN, lisez-le attentivement et suivez les instructions. Assurez-vous personnellement de détenir une entreprise formelle en activité qui devrait avoir un impact économique estimé sur ceux qui vivent dans une extrême pauvreté. Vous pouvez également vous présenter physiquement dans l'une de nos agences les plus proches pour obtenir des informations complémentaires.",
    desc3 = "Il est très simple de connaitre le Tarif de l'entreprise AGN. Connectez-vous à notre site Internet, téléchargez le document Tarif-AGN. Vous pouvez également vous présenter physiquement dans l'une de nos agences les plus proches pour obtenir des informations complémentaires.",
    desc4 = "L'entreprise AGN se distingue des autres entreprises d'investissement par son système économique moderne offrant aux investisseurs un bénéfice annuel exceptionnel et garanti payable à l'échéance contractuelle, ses outils de transactions reconnus et approuvés dans le monde entier, son personnel expert et compétent, ses ressources pédagogiques gratuites et complètes, son engagement à financer les nouveaux entrepreneurs en quête de développement. Notre engagement en faveur de la sécurité, de la transparence et d'un service client exceptionnel fait de nous un choix de confiance pour les investisseurs."


export default function QuestAns4() {
    return (
        <SeeMore maxheight="900px">
            <section className="py-10 flex flex-col items-center space-y-6">

                <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
                    <Forme
                        titre="Les investisseurs peuvent-ils fournir des commentaires ou des suggestions pour améliorer les services de l'entreprise AGN ?"
                        desc={desc}
                    ></Forme>
                    <Forme
                        titre="L'entreprise AGN finance-elle les entrepreneurs ?"
                        desc={desc1}
                    ></Forme>
                </div>
                <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
                    <Forme
                        titre="Comment demander des financements auprès de l'entreprise AGN ?"
                        desc={desc2}
                    ></Forme>
                    <Forme
                        titre="Comment connaitre le Tarif de l'entreprise AGN ?"
                        desc={desc3}
                    ></Forme>
                </div>
                <div className="md:flex md:justify-center">
                    <Forme
                        titre="Qu'est-ce qui distingue l'entreprise AGN des autres entreprises d'investissement ?"
                        desc={desc4}
                    ></Forme>
                </div>

            </section>
        </SeeMore>
    )
}