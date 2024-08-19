"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const pricingTiers = [
    {
        index: 1,
        title: "One Shot",
        price: 1000,
        buttonText: "Génerez votre carte",
        popular: false,
        inverse: false,
        features: [
            "Usage unique",
            "1 an de validité",
            "4% de frais de dépôt",
            "Type de carte accepté: Visa",
            
        ],
    },
    {
        index: 2,
        title: "Standard",
        price: 2500 ,
        buttonText: "Génerez votre carte",
        popular: true,
        inverse: true,
        features: [
            "2 ans de validité",
            "4% de frais de dépôt",
            "500 FCFA/an de frais de maintenance",
            "Type de carte accepté: Visa, Mastercard"
        ]
    },
    {
        index: 3,
        title: "Nana Benz",
        price: 8500 ,
        buttonText: "Génerez votre carte",
        popular: false,
        inverse: false,
        features: [
            "2 ans de validité",
            "4% de frais de dépôt",
            "Aucun frais de maintenance",
            "Type de carte accepté: Visa, Mastercard"
        ]
    },
    {
        index: 4,
        title: "Premium",
        price: 10000 ,
        buttonText: "Génerez votre carte",
        popular: false,
        inverse: false,
        features: [
            "Générer jusqu'à 5 carte virtuelle",
            "2 ans de validité",
            "4% de frais de dépôt",
            "500 FCFA/an de frais de maintenance",
            "Type de carte accepté: Visa, Mastercard"
        ]
    }
];

const TarifCard = () =>{

    return(
        <section className="mt-10 bg-slate-100">
            <div className="container">
                <div className="md:flex md:flex-col justify-center items-center relative">
                    <div className="py-24">
                        <h1 className="mb-4 text-5xl  sm:text-5xl tracking-tight font-bold text-gray-900 text-center">
                            Nos tarifs
                        </h1>

                        <div className="flex flex-col md:flex-row gap-6 items-center mt-10 lg:items-end lg:justify-center h-[500px] max-md:h-auto">
                            {pricingTiers.map(({ index, title, price, buttonText, popular, inverse, features }) =>(
                                <div key={index} className={twMerge("card", inverse === true && 'border-black bg-[#50c878] text-white/60')}>
                                    <div className="flex justify-between">
                                        <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
                                        {popular === true && (
                                            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                                <motion.span
                                                    animate={{
                                                        backgroundPositionX: "100%"
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        repeatType: "loop"
                                                    }}
                                                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                                                >
                                                    Populaire
                                                </motion.span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-[30px]">
                                        <span className="text-4xl font-bold tracking-tighter leading-none">
                                            {price} FCFA
                                        </span>
                                    </div>
                                    <button className={twMerge("btn bg-[#50c878] py-2 rounded-md text-white w-full mt-[30px]", inverse === true && 'bg-black text-white')}>
                                        {buttonText}
                                    </button>
                                    <ul className="flex flex-col gap-5 mt-8">
                                        {features.map((feature, index) =>(
                                            <li key={index} className="text-sm flex items-center gap-4">
                                                <Image src={"/check.svg"} width={20} height={20} className={twMerge(inverse === true && 'text-white')} alt="check image"/>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TarifCard;