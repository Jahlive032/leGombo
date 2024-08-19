"use client"

import React, { useEffect, useState } from "react";
import { FaLock, FaChartPie, FaLightbulb } from "react-icons/fa"; // Importation des icônes de react-icons
import { Button } from "@/components/ui/button"; // Importation d'un composant Button personnalisé
import { easeOut, motion } from "framer-motion"; // Importation de framer-motion pour les animations
import Image from "next/image"; // Importation du composant Image de Next.js pour optimiser les images
import carteBancaire from "@/public/carteBancaire.webp"; // Importation d'une image locale
import { MiniCardHero } from "./MiniCardHero"; // Importation du composant MiniCardHero

const CardPresentation = () => {
    // Utilisation d'un état pour gérer la section active
    const [activeSection, setActiveSection] = useState<"Sécurité" | "Liberté" | "Flexibilité">("Sécurité");

    // Contenus dynamiques pour chaque section
    const content = {
        Sécurité: {
            title: "Sécurité à Portée de Main",
            description: "Créez votre carte virtuelle en quelques clics et bénéficiez d'une sécurité optimale pour toutes vos transactions en ligne. Notre service de création de cartes virtuelles vous offre la flexibilité d'une carte de paiement, sans les contraintes d'une carte physique. Sécurisez vos achats en ligne dès aujourd'hui avec notre solution innovante.",
            buttonText: "Générez votre carte",
            imgSrc: "/props-black-credit-card.webp", // Chemin de l'image pour cette section
        },
        Liberté: {
            title: "Libérez-vous des Risques avec une Carte Virtuelle",
            description: "Dites adieu aux risques de fraude grâce à nos cartes virtuelles sécurisées. Créez en un instant votre carte de paiement virtuelle et gérez vos dépenses en toute tranquillité. Votre sécurité est notre priorité, profitez d'une protection maximale pour chaque transaction.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.png", // Chemin de l'image pour cette section
        },
        Flexibilité: {
            title: "Une Carte Virtuelle pour Chaque Besoin : Flexibilité",
            description: "Créez des cartes virtuelles sur mesure pour chaque occasion. Que ce soit pour des achats uniques ou récurrents, notre service de création de cartes virtuelles s'adapte à vos besoins avec une flexibilité sans précédent. Transformez votre façon de payer en ligne dès aujourd'hui.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.png", // Chemin de l'image pour cette section
        }
    };

    const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const cardPosition = document.getElementById('card')?.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (cardPosition && cardPosition < screenPosition) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    return (
        // Section principale du composant
        <section className="py-20 bg-gradient-to-b from-[#F0F0F0] to-[#50c878]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                className="z-30 relative py-20 max-md:flex-col-reverse"
            >
                {/* Conteneur principal pour le contenu */}
                <div className=" flex flex-col w-[80%] mx-auto md:flex-row items-center justify-between bg-white rounded-lg p-8">
                    {/* Conteneur de l'image */}
                    <div className="flex-1 mb-8 md:mb-0">
                        <img 
                            src={content[activeSection].imgSrc} 
                            alt={content[activeSection].title} 
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Conteneur pour le texte et le bouton */}
                    <div className="flex-1 text-center md:text-left md:pl-12">
                        <h2 className="text-[#50c878] text-lg mb-4">{activeSection.toUpperCase()}</h2>
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">{content[activeSection].title}</h1>
                        <p className="text-gray-600 mb-8">{content[activeSection].description}</p>
                        <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
                            {/* Bouton principal */}
                            <button className="bg-[#50c878] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#50c878] transition duration-300">
                                {content[activeSection].buttonText}
                            </button>
                            {/* Bouton secondaire */}
                            <Button>
                                Découvrir plus
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Navigation de pied de page */}
                <footer className="mt-8 pt-4 w-[80%] mx-auto">
                    <nav className="flex justify-around relative">
                        {/* Barre de progression pour indiquer la section active */}
                        <div className="absolute top-0 left-0 w-full flex justify-around gap-4">
                            <div className={`h-1 w-1/3 ${activeSection === "Sécurité" ? "bg-[#40a160]" : "bg-gray-200"}`}></div>
                            <div className={`h-1 w-1/3 ${activeSection === "Liberté" ? "bg-[#40a160]" : "bg-gray-200"}`}></div>
                            <div className={`h-1 w-1/3 ${activeSection === "Flexibilité" ? "bg-[#40a160]" : "bg-gray-200"}`}></div>
                        </div>

                        {/* Éléments du pied de page pour changer de section */}
                        <div 
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${activeSection === "Sécurité" ? "text-[#40a160]" : "text-gray-800"}`}
                            onClick={() => setActiveSection("Sécurité")}
                        >
                            <FaLock className="text-2xl mb-2" />
                            <span className="font-semibold">Sécurité</span>
                        </div>
                        <div 
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${activeSection === "Liberté" ? "text-[#40a160]" : "text-gray-800"}`}
                            onClick={() => setActiveSection("Liberté")}
                        >
                            <FaChartPie className="text-2xl mb-2" />
                            <span className="font-semibold">Liberté</span>
                        </div>
                        <div 
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${activeSection === "Flexibilité" ? "text-[#40a160]" : "text-gray-800"}`}
                            onClick={() => setActiveSection("Flexibilité")}
                        >
                            <FaLightbulb className="text-2xl mb-2" />
                            <span className="font-semibold">Flexibilité</span>
                        </div>
                    </nav>
                </footer>

                {/* Section additionnelle avec des MiniCards et une image */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
                    className="w-[80%] mx-auto flex items-center justify-center"
                >
                    <div className="flex">
                        <div className="flex max-sm:hidden md:flex-row items-center gap-5">
                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1) (1).webp"
                            />
                                
                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1) (1).webp"
                            /> 

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1) (1).webp"
                            />    

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1) (1).webp"
                            /> 

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (2).webp"
                            />                
                        </div>
                        <motion.div
                            id="card"
                            initial={{ scale: 0.5, opacity: 0}}
                            whileInView={ { scale: 1, opacity: 1 } }
                            transition={{ duration: 0.8, ease: easeOut}}
                        >
                            {/* Affichage de l'image principale */}
                            <motion.img
                                initial={{ opacity: 0, x: 1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
                                src={carteBancaire.src}
                                alt="carte bancaire"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CardPresentation;
