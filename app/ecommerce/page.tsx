import Link from "next/link"
import EcommerceSection from "../components/display/EcommerceSection"
import PoliticHeading from "../components/display/PoliticHeading"

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]" >

      {/* title  */}
      <PoliticHeading
        title="Conditions d’utilisation"
        text="Les présentes Conditions Générales d’Utilisation (CGU) régissent l’accès et l’usage  du site web officiel de l’AGENCE NASSER-AGN (www.agencenasser.com).   En consultant ou en utilisant ce site, tout internaute reconnaît avoir pris connaissance  des présentes conditions, les avoir comprises et les accepter pleinement, sans réserve  ni restriction. Elles ont pour but de garantir une utilisation responsable, sécurisée et  conforme aux lois en vigueur des contenus, services et informations proposés sur la  plateforme.   
Ces conditions visent à encadrer les relations entre l’AGENCE NASSER-AGN et les  visiteurs du site, dans un souci de transparence, de respect des droits de chacun, et  de conformité aux normes légales en vigueur.  
Il  est de la responsabilité de chaque utilisateur de consulter régulièrement ces  conditions afin de rester informé des éventuelles mises à jour.   L’AGENCE NASSER-AGN attache une importance particulière à la confiance, à  l’intégrité et à la sécurité dans l’usage de ses plateformes numériques.  
L’entreprise AGN invite donc chaque utilisateur à lire attentivement ces conditions  avant toute navigation ou interaction avec ses interfaces numériques."
      />

      {/* sections  */}
      <EcommerceSection
        titleOne="1. Présentation du site"
        titleTwo="2. Objet "
        imageOne="/image/ecommerce/presentation.png"
        imageTwo="/image/ecommerce/object.png"
        contentOne={
          <div className="flex flex-col gap-3  " >
            <p>Le présent site est édité par AGENCE NASSER-AGN, une entreprise enregistrée à  Madagascar, spécialisée en consultance, investissements, consignation de navires,  import-export et représentation commerciale.  </p>
            <p><strong>Adresse :</strong> Box N°16 Dame de cœur center Mangarivotra Mahajanga, Madagascar  </p>
            <p><strong>E-mail :</strong> <Link href={'mailto:service.client@agencenasser.com'} className="text-blue-500" > service.client@agencenasser.com </Link> </p>
          </div>
        }
        contentTwo={'Les présentes conditions ont pour objet de définir les modalités d’accès et d’utilisation  du site www.agencenasser.com.  Toute navigation sur ce site implique l’acceptation pleine et entière des présentes  conditions par l’utilisateur.'}
      />

      <EcommerceSection
        titleOne="3. Accès au site"
        titleTwo="4. Propriété intellectuelle"
        imageOne="/image/ecommerce/acces.png"
        imageTwo="/image/ecommerce/intellect.png"
        contentOne={"Le site est accessible gratuitement à tout utilisateur disposant d’un accès à internet.  L’AGENCE NASSER-AGN s’efforce d’assurer une disponibilité continue du site, mais  ne saurait être tenue responsable en cas d’interruption, de suspension ou de limitation  d’accès pour des raisons techniques ou de maintenance."}
        contentTwo={'Tous les contenus présents sur ce site (textes, images, graphismes, logos, vidéos,  documents téléchargeables, etc.) sont la propriété exclusive de l’AGENCE NASSER AGN et de ses partenaires.  Toute reproduction, représentation, diffusion ou exploitation, partielle ou totale, sans  autorisation écrite préalable, est strictement interdite et constitue une contrefaçon au  sens du Code de la propriété intellectuelle.'}
      />

      <EcommerceSection
        titleOne="5. Données personnelles"
        titleTwo="6. Responsabilités"
        imageOne="/image/ecommerce/donne.png"
        imageTwo="/image/ecommerce/responsabilité.png"
        contentOne={"L’AGENCE NASSER-AGN collecte certaines données personnelles via ses  formulaires dans le but d’améliorer la relation client et de traiter les demandes.  Ces données sont traitées de manière confidentielle et ne sont ni vendues ni  transmises à des tiers sans consentement.   Conformément à la loi en vigueur à Madagascar, tout utilisateur dispose d’un droit  d’accès, de rectification ou de suppression de ses données en contactant :  service.client@agencenasser.com."}
        contentTwo={
          <div className="flex flex-col gap-3  " >
            <p>AGENCE NASSER-AGN s&apos;efforce de fournir des informations fiables et mises à jour.   Toutefois, elle ne saurait être tenue responsable :  </p>
            <p>- Des erreurs ou omissions dans les contenus disponibles sur le site ; </p>
            <p>- D&apos;un dommage résultant de l&apos;utilisation du site ou d&apos;un dysfonctionnement technique ; </p>
            <p>- Des liens hypertextes redirigeant vers des sites tiers dont elle n&apos;a pas le contrôle.  L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il fait des informations fournies sur le  site.</p>
          </div>
        }
      />

      <EcommerceSection
        titleOne="7. Modification des CGU"
        titleTwo="8. Droit applicable"
        imageOne="/image/ecommerce/modification.png"
        imageTwo="/image/ecommerce/droit.png"
        contentOne={"L’AGENCE NASSER-AGN se réserve le droit de modifier à tout moment les présentes  conditions afin de les adapter aux évolutions du site et/ou de la législation applicable.  Toute nouvelle version des CGU sera publiée sur cette même page. Il appartient aux  utilisateurs de consulter régulièrement cette rubrique."}
        contentTwo={"Les présentes conditions sont régies par le droit malgache.  Tout litige relatif à leur interprétation ou leur exécution sera soumis à la compétence  exclusive des juridictions de Madagascar. "}
      />

    </div>
  )
}

export default page