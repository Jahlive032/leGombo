"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

const FoireAuxQuestions = () =>{

  return(
    <section className="py-20 items-center flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Foire Aux Questions</h1>
      <div className="w-[60%] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qu&apos;est-ce qu&apos;une carte virtuelle et comment fonctionne-t-elle ?</AccordionTrigger>
            <AccordionContent>
              Une carte virtuelle est une carte de paiement numérique générée pour effectuer des achats en ligne en toute sécurité. Elle fonctionne comme une carte physique, mais ses informations sont disponibles uniquement en ligne. Elle peut être utilisée pour des paiements uniques ou récurrents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Comment puis-je créer une carte virtuelle avec votre plateforme ?</AccordionTrigger>
            <AccordionContent>
              Pour créer une carte virtuelle, connectez-vous à votre compte, sélectionnez l&apos;option &apos;&apos;Créer une carte virtuelle&apos;&apos;, et suivez les instructions pour générer une carte instantanément. Vous pourrez définir le montant à allouer à la carte et choisir les options de sécurité souhaitées.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment fonctionne le transfert d&apos;argent de l&apos;international vers le Togo via votre plateforme ?</AccordionTrigger>
            <AccordionContent>
              Le transfert d&apos;argent international vers le Togo est simple et rapide. Il vous suffit de sélectionner le pays d&apos;origine, d&apos;entrer les détails du bénéficiaire (Tmoney ou Flooz), et de finaliser le paiement. Les fonds sont transférés directement sur le compte Mobile Money du destinataire en quelques minutes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Combien de temps faut-il pour qu&apos;un transfert d&apos;argent international soit reçu au Togo ?</AccordionTrigger>
              <AccordionContent>
                En général, les fonds sont disponibles sur le compte du destinataire au Togo dans un délai de quelques minutes après le paiement. Cependant, des délais supplémentaires peuvent s&apos;appliquer en fonction des méthodes de paiement utilisées et des vérifications de sécurité.
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Quelles sont les étapes pour transférer de l&apos;argent de Tmoney vers Flooz ou de Flooz vers Tmoney ?</AccordionTrigger>
              <AccordionContent>
                Pour le faire, connectez-vous à votre compte, choisissez l&apos;option &apos;&apos;Transfert Tmoney vers Flooz&apos;&apos; ou &apos;&apos;Transfert Flooz vers Tmoney&apos;&apos;, entrez le montant et les informations du destinataire, puis confirmez la transaction. Les fonds seront transférés instantanément.
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Puis-je utiliser vos services depuis n&apos;importe quel pays ?</AccordionTrigger>
              <AccordionContent>
                Oui, nos services de création de cartes virtuelles et de transfert d&apos;argent international sont accessibles depuis la plupart des pays. Assurez-vous simplement que votre pays de résidence figure parmi les options disponibles lors de l&apos;inscription.
              </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
    </section>
  )
}

export default FoireAuxQuestions