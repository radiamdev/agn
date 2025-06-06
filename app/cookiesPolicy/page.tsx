import PoliticHeading from "../components/display/PoliticHeading"
import PoliticSection from "../components/display/PoliticSection"

export const metadata = {
  title: 'AGN | Politique des cookies',
  description: 'Découvrez comment AGN utilise les cookies sur son site.',
};


function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]">

      {/* title  */}
      <PoliticHeading
        title="POLITIQUE DE COOKIES"
        text="Dans le cadre de son engagement en matière de transparence et de respect de la vie  privée, AGENCE NASSER-AGN souhaite vous informer de manière claire et précise  sur l’usage des cookies sur son site internet.   Cette politique a pour objectif de vous expliquer ce que sont les cookies, dans quel but  nous les utilisons, comment ils fonctionnent, et comment vous pouvez les gérer ou les  désactiver."
      />

      {/* sections  */}
      <PoliticSection
        titleOne="1. Introduction"
        titleTwo="2. Qu’est-ce qu’un cookie ?"
        haveEmail={false}
        contentOne={
          'La présente Politique de Cookies a pour objectif d’informer les utilisateurs du site  www.agencenasser.com sur l’utilisation des cookies lors de leur navigation.  En accédant au site, vous consentez à l’usage de cookies conformément à cette  politique, sauf si vous avez désactivé les cookies via les paramètres de votre  navigateur.'
        }
        contentTwo={
          "Un cookie est un petit fichier texte déposé et stocké sur le terminal (ordinateur,  smartphone, tablette) d’un utilisateur lors de la consultation d’un site web. Il permet  notamment de collecter des informations relatives à la navigation afin d’améliorer  l’expérience utilisateur."
        }
      />

      <PoliticSection
        titleOne="3. Pourquoi utilisons-nous des cookies ?"
        titleTwo="4. Cookies tiers"
        haveEmail={false}
        contentOne={
          <div className="flex flex-col gap-2" >
            <p> Les cookies utilisés sur le site de l&pos;AGENCE NASSER-AGN ont plusieurs finalités : </p>
            <p>- Cookies fonctionnels : assurer le bon fonctionnement du site (affichage, navigation,  formulaires). </p>
            <p> - Cookies de performance : analyser la fréquentation et l&apos;usage du site pour améliorer  nos services (via Google Analytics ou équivalent).  </p>
            <p> - Cookies de personnalisation : mémoriser vos préférences (langue, région, etc.).  </p>
            <p> - Cookies publicitaires : proposer du contenu ciblé en fonction de vos centres  d&apos;intérêt. </p>
          </div>
        }
        contentTwo={
          "Certaines fonctionnalités du site s’appuient sur des services proposés par des tiers  (boutons de partage sur les réseaux sociaux, vidéos hébergées, outils de mesure  d’audience, etc.).   Ces tiers peuvent déposer des cookies indépendamment de notre contrôle. Nous vous  invitons à consulter leurs politiques de confidentialité respectives."
        }
      />

      <PoliticSection
        titleOne="5. Consentement de l’utilisateur"
        titleTwo="6. Gestion et désactivation des cookies"
        haveEmail={true}
        contentOne={
          'Lors de votre première visite sur notre site, un bandeau d’information s’affiche pour  recueillir votre consentement à l’utilisation des cookies.    Vous pouvez à tout moment modifier vos préférences ou retirer votre consentement  en configurant les paramètres de votre navigateur.'
        }
        contentTwo={
          <div className="flex flex-col gap-2" >
            <p> Conformément à la réglementation applicable, vous disposez des droits suivants : </p>
            <p>- Droit d&apos;accès à vos données personnelles ; </p>
            <p> - Droit de rectification en cas d&apos;erreur ou de modification ; </p>
            <p> - Droit à l&apos;effacement (« droit à l&apos;oubli ») ; </p>
            <p> - Droit à la portabilité des données ; </p>
            <p> - Droit de retirer votre consentement à tout moment. </p>
            <p>  Pour exercer ces droits, adressez votre demande par écrit à :   </p>
          </div>
        }
      />

      <PoliticSection
        titleOne="7. Modification de la politique de cookies"
        titleTwo="8. Contact"
        haveEmail={true}
        contentOne={
          'L’AGENCE NASSER-AGN se réserve le droit de modifier cette politique à tout  moment. Toute mise à jour sera publiée sur cette page avec la date de révision.   Il est recommandé de consulter cette rubrique régulièrement.'
        }
        contentTwo={
          "Pour toute question relative à notre politique de cookies ou à vos données  personnelles, vous pouvez nous contacter à l’adresse suivante : "
        }
      />
    </div>
  )
}

export default page