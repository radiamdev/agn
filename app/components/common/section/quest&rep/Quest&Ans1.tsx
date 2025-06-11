import Container from "../../Container"
import SeeMore from "../../SeeMore"

type infoForme = {
    title: string;
    desc: string;
}

function Forme({ title, desc }: infoForme) {
    return (
        <div className="border border-gray-200 md:border-none bg-white md:h-[250px] md:w-[450px] rounded-lg p-4 ">
            <div className="flex items-start space-x-4">
                <div>
                    <div className="bg-[#bf9000] rounded-full h-4 w-4"></div>
                </div>
                <div className="space-y-4">
                    <h6 className="font-semibold"> {title} </h6>
                    <p className="font-light text-gray-500 text-sm"> {desc} </p>
                </div>
            </div>
        </div>
    )
}

const title1 = "Quel est l'âge minimum requis pour investir au sein de l'entreprise AGN ?",
    desc1 = "Pour investir au sein de l'entreprise AGN, vous devez avoir au moins 18 ans ou être représenté par un tuteur. Cette exigence est conforme aux normes légales et réglementaires.",
    title2 = "Quels types de transactions l'entreprise AGN propose-t-elle aux investisseurs ?",
    desc2 = "L'entreprise AGN utilise plusieurs types de transactions : Portefeuille mobile, TPE, E-commerce, virement bancaire ou via nos agences.",
    title3 = "Y a-t-il des frais sur les transactions pour investir au sein de l'entreprise AGN ?",
    desc3 = "Non, l'entreprise AGN ne facture pas de frais des transactions distincts pour votre investissement. C'est l'opérateur de votre réseau mobile ou bancaire qui vous facturera des frais des transactions. Chez AGN vous gagnez toujours.",
    title4 = "Puis-je investir au sein de l'entreprise AGN depuis n'importe où dans le monde ?",
    desc4 = "Oui, l'investissement au sein de l'entreprise AGN est accessible partout dans le monde. Cependant, veuillez consulter notre site Web pour confirmer si nos services sont disponibles dans votre pays en raison de restrictions réglementaires.",
    title5 = "Existe-t-il des implications fiscales associées à l'investisseur sur son investissement au sein de l'entreprise AGN ?",
    desc5 = "Les implications fiscales varient en fonction de votre juridiction nationale (votre pays) et de votre situation personnelle. Il est important de consulter un fiscaliste pour comprendre comment les activités d'investissement au sein de l'entreprise AGN peuvent avoir un impact sur vos obligations fiscales.",
    title6 = "Comment l'entreprise AGN gère-t-elle la gestion des risques pour les investisseurs ?",
    desc6 = "Nous avons mis en place des mesures de gestion des risques rigoureuses pour protéger à la fois les investisseurs et l'entreprise. Cela comprend la définition de limites d'effet de levier maximales, la mise à disposition d'outils de gestion des risques tels que les ordres arrêt-perte et prendre-profit, et la fourniture de supports pédagogiques sur la gestion des risques."

export default function QuestAns1() {
    return (
        <Container className="bg-[linear-gradient(to_bottom,_#0194B652_1%,_#BFE4ED12_25%,_white_50%,_#BFE4ED12_75%,_#0194B652_99%)] py-10 flex flex-col items-center">
            <SeeMore maxheight="420px">
                <div className="md:flex space-y-4 pb-4 md:pb-0 md:space-x-4">
                    <Forme
                        title={title1}
                        desc={desc1}
                    ></Forme>
                    <Forme
                        title={title2}
                        desc={desc2}
                    ></Forme>
                </div>
                <div className="md:flex space-y-4 pb-4 md:pb-0 md:space-x-4">
                    <Forme
                        title={title3}
                        desc={desc3}
                    ></Forme>
                    <Forme
                        title={title4}
                        desc={desc4}
                    ></Forme>
                </div>
                <div className="md:flex space-y-4 pb-4 md:pb-0 md:space-x-4">
                    <Forme
                        title={title5}
                        desc={desc5}
                    ></Forme>
                    <Forme
                        title={title6}
                        desc={desc6}
                    ></Forme>
                </div>
            </SeeMore>
        </Container>
    )
}