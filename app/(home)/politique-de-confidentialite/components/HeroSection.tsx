import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        {children}
    </section>
);

export default function HeroSection() {
    return (
        <div className="container w-[80%] mx-auto px-4 py-8 mt-10">
            <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>

            <Section title="Introduction">
                <p>
                    Bienvenue sur leGombo, nous accordons de l&apos;importance à votre vie privée et nous sommes transparents quant aux données personnelles que nous traitons lorsque nous interagissons avec vous. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.
                </p>
            </Section>

            <Section title="Quelles données personnelles récoltons-nous et dans quels buts ?">
                <p>
                    Les données collectées sont nécessaires à la gestion de votre commande et à la fourniture de nos services. Certaines données sont également collectées pour remplir nos obligations règlementaires en matière de lutte contre la fraude, et le financement du terrorisme. Enfin, certaines données sont collectées pour être analysées en interne et permettre l&apos;amélioration de nos services.
                </p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Informations personnelles : Nom complet, date de naissance, nationalité, profession, adresse postale et adresse mail, numéro de téléphone, informations de compte bancaire, nom d&apos;utilisateur, mot de passe.</li>
                    <li>Informations de transactions : Détails de vos transactions cartes et mouvements sur vos comptes.</li>
                    <li>Informations de journalisation : Type de navigateur, heures d&apos;accès, pages consultées, adresse IP.</li>
                    <li>Informations sur l&apos;appareil : Matériel et logiciels de votre ordinateur et appareil mobile.</li>
                    <li>Informations de localisation : Pour prévenir certaines activités frauduleuses.</li>
                    <li>Documents : Carte d&apos;identité, passeport, permis de conduire, photos-selfies.</li>
                </ul>
                <p className="mt-2">
                    Ces informations sont directement collectées auprès de vous avec votre autorisation et peuvent être vérifiées pour remplir nos obligations règlementaires.
                </p>
            </Section>

            <Section title="Comment nous utilisons vos informations">
                <p>Nous pouvons utiliser vos données personnelles pour les raisons suivantes :</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Pour vous fournir des informations ou services que vous nous demandez, y compris pour répondre à toute demande d&apos;assistance avec le service.</li>
                    <li>Traiter les transactions et envoyer des confirmations</li>
                    <li>Pour répondre aux demandes de service clients et vous informer de tout changement apporté au service.</li>
                    <li>Pour remplir nos obligations découlant de tout contrat conclu entre vous et nous.</li>
                    <li>Pour aider à optimiser et améliorer nos services, par exemple grâce à l&apos;analyse statistique et la recherche sur votre utilisation de nos services.</li>
                    <li>Pour détecter, enquêter, prévenir ou lutter contre les activités illégales, les fraudes ou les situations impliquant des menaces potentielles pour les droits ou la sécurité personnelle de nos utilisateurs ;</li>
                    <li>Pour vérifier votre identité et prévenir la fraude ;</li>
                    <li>Vous envoyez des notifications techniques, des mises à jour, des alertes de sécurité et des messages d&apos;assistance et administratifs ;</li>
                    <li>Assurer le service à la clientèle ;</li>
                    <li>Communiquer avec vous au sujet de nos produits, services, offres, promotions, proposés et autres, et vous fournir des nouvelles et des informations qui, selon nous, pourraient vous intéresser ;</li>
                    <li>Personnaliser et améliorer nos services et fournir des publicités, du contenu ou des fonctionnalités qui correspondent aux profils ou aux intérêts des utilisateurs.</li>
                </ul>
            </Section>

            <Section title="Cookies">
                <p>
                    Nous utilisons des cookies pour distinguer les utilisateurs et améliorer nos services. Vous pouvez contrôler les paramètres des cookies dans votre navigateur, mais la désactivation des cookies peut limiter la fonctionnalité du site web.
                </p>
            </Section>

            <Section title="Sécurité">
                <p>
                    Parmi nos mesures de sécurité, nous utilisons des serveurs sécurisés, des pare‑feu, le cryptage des données, et l&apos;accès aux informations est strictement limité aux employés dans le cadre de leurs fonctions.
                </p>
                <p className="mt-2">
                    Pour la sécurité de vos comptes, il est crucial de garder votre mot de passe secret et de ne le partager avec personne.
                </p>
                <p className="mt-2">
                    Nous apprécions la confiance que vous nous accordez en nous fournissant vos données personnelles, c&apos;est pourquoi nous nous efforçons d&apos;utiliser des moyens commercialement acceptables pour les protéger. Cependant n&apos;oubliez pas qu&apos;aucune méthode de transmission sur internet ni aucune méthode de stockage électronique n&apos;est sûre et fiable à 100 %. Nous prenons néanmoins toutes les précautions raisonnables pour assurer la sécurité de vos données personnelles. Nous ne conservons vos données personnelles sur nos serveurs que pour la période nécessaire à la fourniture de nos services. Après la fermeture de votre compte, vos informations sont conservées selon les besoins pour respecter les obligations légales, ainsi que pour des raisons de contrôle, de détection et de prévention de la fraude. Le stockage de vos données personnelles se fait conformément aux périodes légales de conservation établies par la législation en vigueur.
                </p>
            </Section>

            <Section title="À qui peuvent être transmises vos données ?">
                <p>
                    Les données peuvent être transmises aux partenaires qui nous fournissent des services tels que l&apos;hébergement et la maintenance de la plateforme, l&apos;analyse des données, le traitement des paiements, l&apos;infrastructure, le service client, la livraison de courrier électronique, l&apos;audit et d&apos;autres services similaires.
                </p>
                <p className="mt-2">
                    Vos mails peuvent exceptionnellement être utilisés à des fins de marketing.
                </p>
                <p className="mt-2">
                    Nous pouvons divulguer vos informations personnelles à des tiers pour toute autre raison avec votre consentement.
                </p>
            </Section>

            <Section title="Droits à la vie privée">
                <p>
                    Cette politique décrit vos droits en matière de confidentialité concernant notre collecte, notre utilisation, notre stockage, notre partage et notre protection de vos données personnelles :
                </p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Information : Vous pouvez nous demander à savoir comment nous utilisons vos informations personnelles</li>
                    <li>Accès : Vous pouvez nous demander les données personnelles que nous avons collectées à votre sujet</li>
                    <li>Rectification : Vous pouvez nous demander la rectification des données que nous avons collectées à votre sujet</li>
                    <li>Effacement : Vous pouvez nous demander d&apos;effacer vos informations personnelles dans certaines conditions. Des exceptions s&apos;appliquent si la loi nous oblige à conserver des données ou si nous devons conserver un ensemble de vos données à des fins non commerciales.</li>
                    <li>Opposition au Marketing : Vous pouvez vous désinscrire des communications marketing via les paramètres de votre compte ou le lien de désinscription dans nos emails.</li>
                    <li>Opposition au Traitement : Vous pouvez vous opposer au traitement de vos informations personnelles dans des circonstances spécifiques. Notez que cela peut affecter notre capacité à vous fournir des services.</li>
                    <li>Portabilité : Vous avez le droit de demander l&apos;export des données personnelles que nous avons collectées à votre sujet dans un format lisible</li>
                    <li>Désactivation du compte : Vous pouvez désactiver votre compte à tout moment.</li>
                </ul>
                <p className="mt-2">
                    Pour exercer vos droits, vous pouvez vous adresser à …………………….. Une réponse vous sera apportée dans les meilleurs délais, vous serez notifié du délai de réponse.
                </p>
            </Section>

            <Section title="Transferts Internationaux de Données">
                <p>
                    Nos opérations mondiales signifient que vos informations personnelles peuvent être stockées et traitées dans tout pays où nous opérons. Les transferts peuvent avoir lieu vers des pays ayant des lois de protection des données différentes. Nous prenons des mesures raisonnables pour assurer la sécurité de vos données et nous conformer aux lois applicables et aux clauses contractuelles types pendant les transferts internationaux.
                </p>
            </Section>

            <Section title="Comment consentez-vous à ce que vos données soient collectées ?">
                <p>
                    En acceptant cette politique de confidentialité et en acceptant les conditions générales d&apos;utilisation des services leGombo et les conditions générales du service client, vous acceptez que vos données soient collectées et traitées conformément à cette politique de confidentialité. Les données personnelles que nous collectons sont utilisées pour fournir et améliorer nos services. Nous n&apos;utiliserons ni ne partagerons vos informations avec qui que ce soit, sauf dans les cas décrits dans la présente politique.
                </p>
            </Section>

            <Section title="Violation des données">
                <p>
                    En cas de violation de données, nous ferons des efforts raisonnables pour informer les utilisateurs concernés si nous pensons qu&apos;il existe un risque raisonnable de préjudice pour l&apos;utilisateur à la suite de la violation.
                </p>
            </Section>

            <Section title="Mises à jour de notre politique de confidentialité">
                <p>
                    Nous réexaminerons la présente politique de protection de la vie privée et pourrons la modifier ou la compléter de temps à autre, en fonction des changements réglementaires, des stratégies commerciales et des nouvelles technologies introduites dans nos activités. Nous publierons une version actualisée de la présente politique de confidentialité, au fur et à mesure des modifications ou des compléments apportés, sur notre site web. Si des changements importants vous concernant, nous vous en informerons en ligne ou par courrier.
                </p>
            </Section>

            <Section title="Nous Contacter">
                <p>
                    Toutes les demandes d&apos;accès, questions, commentaires, plaintes et autres demandes concernant la politique de confidentialité doivent être envoyées sur contactlegombo@gmail.com
                </p>
            </Section>
        </div>
    );
}