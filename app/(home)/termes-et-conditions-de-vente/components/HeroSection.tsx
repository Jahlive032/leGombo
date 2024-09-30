import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        {children}
    </section>
);

export default function TermesEtConditions() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Termes et Conditions d&apos;Utilisation</h1>

            <Section title="Termes">
                <p>
                    En accédant à nos services par quelque moyen que ce soit, vous acceptez nos termes et conditions et acceptez d&apos;être lié par celles-ci. Nous nous réservons le droit d&apos;amender, de modifier ou de changer toute partie du présent accord sans préavis et sans votre consentement. Lorsqu&apos;une partie du présent accord est amendée ou modifiée, ces changements entreront en vigueur immédiatement.
                </p>
                <p className="mt-2">
                    Nous vous suggérons de consulter périodiquement le présent accord pour connaître ces changements et/ou modifications. Vous reconnaissez qu&apos;en accédant et en utilisant nos services après de tels changements/modifications, vous acceptez ces conditions telles que modifiées.
                </p>
            </Section>

            <Section title="Conditions d'inscription">
                <p>
                    Afin d&apos;utiliser nos services, vous consentez par la présente à fournir et acceptez de compléter tous les éléments d&apos;information requis sur la page d&apos;inscription. Vous vous engagez et acceptez de fournir des informations actuelles, complètes et exactes et de les maintenir à jour et exactes. Nous pouvons vous demander de fournir des informations supplémentaires comme condition d&apos;utilisation continue, ou pour vous aider à déterminer si vous souhaitez continuer à utiliser l&apos;un de nos services.
                </p>
                <p className="mt-2">
                    Nous pouvons, à notre seule et absolue discrétion, refuser d&apos;approuver ou mettre fin aux inscriptions existantes avec ou sans motif ou préavis, autre que tout avis requis par toute loi applicable, et sans renonciation aux présentes.
                </p>
            </Section>

            <Section title="Limitations et Restrictions">
                <p>
                    Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect des services à tout moment, y compris les heures de fonctionnement ou la disponibilité des services ou de toute fonctionnalité en rapport aux services, sans préavis et sans responsabilité. Nous nous réservons également le droit d&apos;imposer des limites à certaines fonctionnalités des services ou de restreindre l&apos;accès à certaines parties ou à l&apos;ensemble de nos services sans préavis et sans responsabilité.
                </p>
                <p className="mt-2">
                    Nous ne garantissons pas que les fonctions contenues dans les services seront ininterrompues ou sans erreur, et nous ne serons pas responsables des interruptions de service (y compris, mais sans s&apos;y limiter, les pannes de courant, les pannes du système ou d&apos;autres interruptions qui peuvent affecter la réception, traitement, acceptation, exécution ou règlement des Opérations de paiement ou des services).
                </p>
                <p className="mt-2">
                    Nous pouvons limiter ou suspendre votre utilisation de nos services à tout moment, à notre seule et absolue discrétion. Si nous suspendons votre utilisation d&apos;un de nos services, nous tenterons de vous en informer par courrier électronique et / ou SMS.
                </p>
            </Section>

            <Section title="Informations personnelles">
                <p>Vous êtes responsable de:</p>
                <ol className="list-decimal pl-5 mt-2">
                    <li>Maintenir la confidentialité de votre nom d&apos;utilisateur et mot de passe,</li>
                    <li>Toutes les transactions effectuées par des personnes auxquelles vous donnez accès ou qui utilisent autrement ce nom d&apos;utilisateur ou mot de passe.</li>
                    <li>Toutes les conséquences de la mauvaise utilisation de votre nom d&apos;utilisateur et votre mot de passe. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre nom d&apos;utilisateur ou de votre mot de passe ou de toute autre violation de la sécurité concernant le Service dont vous avez connaissance.</li>
                </ol>
            </Section>

            <Section title="Prestations de service">
                <p>
                    Nous fournissons des services via notre site. Les services peuvent être soumis à des critères d&apos;éligibilité, des limites et des restrictions, et peuvent ne pas être disponibles à tout moment pour tous les clients.
                </p>
                <h3 className="font-semibold mt-3">Envoyer/Recevoir de l&apos;argent :</h3>
                <p>
                    Nous proposons une gamme de services qui facilitent les transferts d&apos;argent, vous permettant d&apos;envoyer ou de recevoir des fonds. De plus, nos services vous permettent de recevoir des paiements ou des transferts de valeur de tiers directement sur votre compte. Ces fonds peuvent ensuite être retirés sur votre compte désigné ou sur la méthode de retrait choisie pour la monnaie fiduciaire. Dans de tels cas, nous pouvons collaborer avec des partenaires, et tout montant reçu sera soumis à une vérification par l&apos;expéditeur ou le tiers concerné. Soyez assuré que tous les fonds reçus seront crédités sur votre compte conformément à vos préférences ou à nos paramètres par défaut. Il est important de noter que vous n&apos;aurez aucun recours contre l&apos;expéditeur de ces fonds ou contre l&apos;une de nos entités partenaires impliquées dans la transaction.
                </p>
                <h3 className="font-semibold mt-3">Limites de transactions :</h3>
                <p>
                    Les transactions que vous nous confiez via la Plateforme - y compris les transactions d&apos;achat, de vente, d&apos;envoi, de paiement ou de transfert - sont irrévocables et ne peuvent être annulées, modifiées ou annulées une fois que vous avez soumis les détails de la transaction et confirmé que vous souhaitez poursuivre la transaction. Toute erreur dans vos saisies relève de votre seule responsabilité et les transactions sont à vos propres risques.
                </p>
                <h3 className="font-semibold mt-3">Soldes insuffisants :</h3>
                <p>
                    Si le solde de votre compte est insuffisant pour traiter toute commande ou instruction que vous nous donnez concernant les services, nous nous réservons le droit de ne pas traiter cette commande ou instruction.
                </p>
            </Section>

            <Section title="Frais de Service">
                <h3 className="font-semibold">Frais de compte :</h3>
                <p>
                    Il n&apos;y a aucun frais pour vous, pour créer un compte, consulter le solde. Des frais peuvent être applicables aux autres services fournis.
                </p>
                <h3 className="font-semibold mt-3">Frais de tiers :</h3>
                <p>
                    Certains tiers peuvent facturer des frais pour certains services qu&apos;ils fournissent, et nous pouvons vous répercuter ces frais.
                </p>
                <h3 className="font-semibold mt-3">Changements :</h3>
                <p>
                    Nous nous réservons le droit de modifier nos structures de frais et de coûts à l&apos;avenir et d&apos;imposer des frais, coûts, commissions ou autres conditions commerciales que nous déterminons à notre discrétion. Dans ce cas, tous les frais applicables vous seront indiqués au moment, ou avant votre confirmation d&apos;une transaction à laquelle des frais s&apos;appliquent.
                </p>
            </Section>

            <Section title="leGombo n'est pas une Banque">
                <p>
                    leGombo traite les transactions de paiement pour le compte des vendeurs. leGombo n&apos;est pas une banque ou une autre institution de dépôt agréée.
                </p>
            </Section>

            <Section title="Résiliation d'un service">
                <p>
                    Nous pouvons, à notre seule et absolue discrétion sans responsabilité envers vous ou un tiers, mettre fin à votre utilisation d&apos;un service pour quelque raison que ce soit, y compris, sans limitation, l&apos;inactivité ou la violation de présentes conditions d&apos;utilisation ou d&apos;autres politiques que nous pouvons établir de temps à autre.
                </p>
                <p className="mt-2">
                    À la résiliation de votre utilisation du service, vous restez responsable de toutes les opérations de paiement et de toute autre obligation que vous avez contractée. En cas de résiliation, nous avons le droit d&apos;interdire votre accès au service, y compris, sans limitation, en désactivant votre nom d&apos;utilisateur et votre mot de passe, et de refuser l&apos;accès futur au service de notre part.
                </p>
            </Section>

            <Section title="Limites et responsabilité">
                <p>
                    Les services sont fournis &quot;tels quels&quot;. Nous n&apos;offrons aucune garantie, expresse ou implicite, et déclinons et annulons par la présente toutes les autres garanties, y compris, sans limitation, les garanties ou conditions implicites de qualité marchande, d&apos;adéquation à un usage particulier ou de non-violation de la propriété intellectuelle ou autre violation des droits.
                </p>
                <p className="mt-2">
                    En aucun cas leGombo ou ses sociétés affiliées ne pourront être tenus responsables de tout dommage (y compris, sans limitation, les pertes, dommages ou réclamations découlant d&apos;une erreur de l&apos;utilisateur ; des pannes de serveur ou de système ; des pannes de réseau ; un changement de loi ; un accès ou des activités non autorisés ; échec de toute transaction) résultant de l&apos;utilisation ou de l&apos;incapacité d&apos;utiliser nos services.
                </p>
            </Section>

            <Section title="Indemnité">
                <p>
                    Vous nous indemniserez et nous dégagerez de toute responsabilité ainsi que nos sociétés affiliées en cas de réclamations, litiges, demandes, responsabilités, dommages, pertes et coûts et dépenses, y compris, sans s&apos;y limiter, les frais juridiques et comptables raisonnables découlant de ou liés de quelque manière que ce soit à nos services, votre utilisation des services (y compris ceux fournis en tout ou en partie par, ou autrement liés à nos partenaires, ou votre non-respect des termes de cet accord ou de toute loi, règle ou réglementation applicable).
                </p>
                <p className="mt-2">
                    Ni nous, ni nos sociétés affiliées n&apos;avons aucune responsabilité envers vous ou tout tiers pour les pertes, frais, coûts, dépenses ou autres responsabilités (« pertes ») que vous pourriez subir ou subir à la suite de, ou en relation avec nos Services. Malgré toute autre section du présent accord, aucune personne concernée n&apos;est responsable envers vous de tout dommage indirect, accessoire, spécial, exemplaire ou consécutif, quelle qu&apos;en soit la cause.
                </p>
            </Section>

            <Section title="Modification de ces Conditions">
                <p>
                    Nous avons le droit, à notre seule et absolue discrétion, de changer, modifier ou amender toute partie des présentes Conditions d&apos;utilisation à tout moment en publiant une notification sur le site Web de leGombo ou en vous communiquant d&apos;une autre manière la notification. Les modifications entreront en vigueur et seront réputées et acceptées par vous après la publication initiale et s&apos;appliqueront à l&apos;avenir en ce qui concerne les opérations de paiement initiées après la date de publication. Dans le cas où vous n&apos;êtes pas d&apos;accord avec une telle modification, votre seul et unique recours est de mettre fin à votre utilisation du Service.
                </p>
            </Section>
        </div>
    );
}