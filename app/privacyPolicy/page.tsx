import React from 'react'
import PoliticSection from '../components/display/PoliticSection'
import PoliticHeading from '../components/display/PoliticHeading'

function page() {
  return (
    <div className="w-screen pt-[90px] md:pt-[150px]">

      {/* title  */}
      <PoliticHeading
        title="POLITIQUE DE CONFIDENTIALITE"
        text="Dans le cadre de ses activités, l’entreprise AGENCE NASSER-AGN attache une  importance primordiale à la protection des données personnelles et au respect de la  vie privée de ses utilisateurs, partenaires et clients.  
Conformément aux lois en vigueur sur la protection des données, notamment la loi  n°2014-038 à Madagascar et, le cas échéant, le Règlement Général sur la Protection  des Données (RGPD) pour les utilisateurs situés dans l’Union européenne, nous nous  engageons à assurer la sécurité, la confidentialité et la transparence dans le traitement  de vos informations personnelles.  Cette politique de confidentialité a pour objectif de vous informer de manière claire sur  les données que nous collectons, les finalités de leur utilisation, les droits dont vous  disposez, ainsi que les mesures mises en œuvre pour les protéger efficacement."
      />

      {/* sections  */}
      <PoliticSection
        titleOne="1. Responsable du traitement"
        titleTwo="2. Données collectées"
        haveEmail={false}
        contentOne={
          <div className="flex flex-col gap-2" >
            <p><strong>Le responsable du traitement des données personnelles est</strong> :  AGENCE NASSER-AGN </p>
            <p><strong>Adresse :</strong> Box N°16 Dame de cœur center Mangarivotra Mahajanga, Madagascar
            </p>
            <p><strong> Email :</strong> service.client@agencenasser.com    </p>
            <p><strong>Téléphone :</strong> +261 32 02 234 43 / +261 33 72 450 77 / +261 34 02 567 25</p>
          </div>
        }
        contentTwo={
          <div className="flex flex-col gap-2" >
            <p> Nous collectons différentes catégories de données, notamment :  </p>
            <p>- Informations d&apos;identification : nom, prénom, fonction, entreprise, adresse email,  numéro de téléphone … ;  </p>
            <p> - Cookies de performance : analyser la fréquentation et l&apos;usage du site pour améliorer  nos services (via Google Analytics ou équivalent).  </p>
            <p>- Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite ;  </p>
            <p> -- Données transmises volontairement via nos formulaires de contact et de  téléchargement. </p>
          </div>
        }
      />

      <PoliticSection
        titleOne="3. Finalités du traitement"
        titleTwo="4. Base légale du traitement"
        haveEmail={false}
        contentOne={
          <div className="flex flex-col gap-2" >
            <p> Les données collectées sont utilisées pour : </p>
            <p>- Répondre à vos demandes via nos formulaires ;  </p>
            <p>- Traiter les services ou dossiers que vous nous confiez ; </p>
            <p> - Vous informer de nos actualités, produits et services ; </p>
            <p>- Améliorer notre site internet et l&apos;expérience utilisateur ; </p>
            <p>- Respecter nos obligations légales et réglementaires. </p>
          </div>
        }
        contentTwo={
          <div className="flex flex-col gap-2" >
            <p>Les traitements sont fondés sur : </p>
            <p>- Votre consentement ; </p>
            <p>- L&apos;exécution d&apos;un contrat ou de mesures précontractuelles ; </p>
            <p>- Le respect d&apos;obligations légales ;</p>
            <p> - Notre intérêt légitime à améliorer nos services.</p>
          </div>
        }
      />

      <PoliticSection
        titleOne="5. Sécurité des données"
        titleTwo="6. Vos droits"
        haveEmail={true}
        contentOne={
          <div className="flex flex-col gap-2" >
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles  nécessaires pour garantir la sécurité, l&apos;intégrité et la confidentialité de vos données : </p>
            <p>- Serveur sécurisé ;  </p>
            <p>- Accès restreint aux données ; </p>
            <p>- Mises à jour régulières du système ; </p>
            <p>- Sauvegardes sécurisées.</p>
          </div>
        }
        contentTwo={
          <div className="flex flex-col gap-2" >
            <p>Conformément à la réglementation applicable, vous disposez des droits suivants : </p>
            <p> - Droit d&apos;accès à vos données personnelles ;  </p>
            <p> - Droit de rectification en cas d&apos;erreur ou de modification ; </p>
            <p> - Droit à l&apos;effacement (« droit à l&apos;oubli ») ; </p>
            <p> - Droit d&apos;opposition au traitement ; </p>
            <p> - Droit à la portabilité des données ;  </p>
            <p> - Droit de retirer votre consentement à tout moment. </p>
            <p>  Pour exercer ces droits, adressez votre demande par écrit à : </p>
          </div>
        }
      />

      <PoliticSection
        titleOne="7 . Durée de conservation"
        titleTwo="8. Partage des données"
        haveEmail={true}
        contentOne={
          <div className="flex flex-col gap-2" >
            <p>Vos données sont conservées pendant une durée proportionnée à la finalité pour  laquelle elles ont été collectées, à savoir :
            </p>
            <p><strong>- Données de contact : </strong> 3 ans après le dernier échange avec vous ; </p>
            <p><strong>- Données contractuelles : </strong> 5 ans (durée légale de conservation) ;</p>
            <p><strong>- Données de navigation :</strong>  13 mois maximum. </p>
          </div>
        }
        contentTwo={
          <div className="flex flex-col gap-2" >
            <p>Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec : </p>
            <p>- Nos partenaires techniques (hébergeurs, prestataires) pour les besoins du service ;  </p>
            <p> - Les autorités compétentes, uniquement si la loi l&apos;exige.</p>
          </div>
        }
      />

      <PoliticSection
        titleOne="9. Cookies"
        titleTwo="10. Modification de la politique de confidentialité"
        haveEmail={true}
        contentOne={
          'Pour plus d’informations sur l’utilisation des cookies, veuillez consulter notre [Politique  de Cookies].'
        }
        contentTwo={
          "Cette politique de confidentialité peut être modifiée à tout moment pour refléter les  évolutions légales, technologiques ou fonctionnelles. Nous vous invitons à la consulter  régulièrement."
        }
      />
    </div>


  )
}

export default page