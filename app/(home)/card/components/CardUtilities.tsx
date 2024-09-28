
import Image from "next/image";
import carteBancaire from "@/assets/carteBancaire.png"
import { Button } from "@/components/ui/button";
import StepByStep from "./StepByStep";

const steps = [
    { 
        title: "Protection contre les prélèvements non autorisés", 
        description: "Vous pouvez bloquer ou désactiver une carte virtuelle après un achat, empêchant ainsi toute utilisation ultérieure non autorisée.", 
        // imageSrc: "/dashboard1.png" 
        videoSrc: "/freecompress-bloquerCarte.mp4",
        // gifSrc: "/youtuber-step-1.gif"
    },
    
    { 
        title: "Utilisation unique ou récurrente", 
        description: "Nos cartes virtuelles peuvent être générées pour des paiements uniques ou récurrents, selon vos besoins.", 
        // imageSrc: "/dashboard3.png" 
        videoSrc: "/freecompress-createcard.mp4"
    },
    { 
        title: "Options de personnalisation", 
        description: "Adaptez les paramètres de votre carte virtuelle leGombo selon vos préférences en modifiant l'apparence, avec des limites de dépense ajustables", 
        // imageSrc: "/dashboard2.png" 
        videoSrc: "/freecompress-video1.mp4"
    },
    { 
        title: "Créez des Cartes Virtuelles pour vos proches", 
        description: "Vous pouvez créer une carte pour votre enfant ou toute autre personne tout en conservant un contrôle total. Gérez et rechargez facilement la carte selon vos besoins, tout en surveillant les dépenses en temps réel pour une tranquillité d'esprit totale.", 
        // imageSrc: "/dashboard2.png" 
        videoSrc: "/freecompress-bloquerCarte.mp4"
    },
    
];


const CardUtilities = () =>{

    return(
        <section className="  my-10 md:py-0 pt-20 pb-20 md:pb-0">
            <div className="mt-5 py-10">
                <h1 className='w-full text-center pt-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl'>
                    Avec nos cartes, vous pouvez: 
                </h1>
            </div>
            <div className="w-[80%] mx-auto">
                <StepByStep steps={steps}/>
            </div>
        </section>
    )
}

export default CardUtilities;