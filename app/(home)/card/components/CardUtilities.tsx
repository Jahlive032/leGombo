
import Image from "next/image";
import carteBancaire from "@/assets/carteBancaire.png"
import { Button } from "@/components/ui/button";
import StepByStep from "./StepByStep";

const steps = [
    { 
        title: "Une totale liberté d'achat sans limites.", 
        description: "Créez des cartes sur mesure pour chaque achat, projet ou abonnement et profitez d'une flexibilité totale sans restriction. ", 
        imageSrc: "/dashboard1.png" 
    },
    
    { 
        title: "Simplifiez vos finances avec nos cartes virtuelles", 
        description: "Créez jusqu'à 5 cartes virtuelles distinctes pour mieux organiser et contrôler vos achats quotidiens.", 
        imageSrc: "/dashboard3.png" 
    },
    { 
        title: "Mettez de l'argent de coté automatiquement", 
        description: "Gagnez en tranquillité d'esprit grâce à nos cartes virtuelles adaptées à vos besoins, tout en bénéficiant d'une fonctionnalité innovante d'épargne automatique. ", 
        imageSrc: "/dashboard2.png" 
    },
    
];


const CardUtilities = () =>{

    return(
        <section className=" bg-yellow-100 py-10">
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