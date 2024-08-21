"use client"

import React, { useEffect, useState } from "react";
import { FaLock, FaChartPie, FaLightbulb } from "react-icons/fa"; // Importation des icônes de react-icons
import { Button } from "@/components/ui/button"; // Importation d'un composant Button personnalisé
import { easeOut, motion } from "framer-motion"; // Importation de framer-motion pour les animations
import Image from "next/image"; // Importation du composant Image de Next.js pour optimiser les images
import carteBancaire from "@/public/carteBancaire.webp"; // Importation d'une image locale
import { MiniCardHero } from "./MiniCardHero"; // Importation du composant MiniCardHero
import { url } from "inspector";

const CardPresentation = () => {

    const sections = ["Utilité", "Avantage", "Tarification"] as const;


    // Utilisation d'un état pour gérer la section active
    const [activeSection, setActiveSection] = useState<typeof sections[number]>("Utilité");

    const [progress, setProgress] = useState(0); // État pour la progression

    // Contenus dynamiques pour chaque section
    const content = {
        Utilité: {
            title: "Accès instantanétilité",
            description: "Contrairement aux cartes physiques qui nécessitent des délais de fabrication et d'expédition, les cartes virtuelles peuvent être générées et utilisées instantanément, parfait pour des besoins immédiats.",
            buttonText: "Générez votre carte",
            imgSrc: "/props-black-credit-card.webp", // Chemin de l'image pour cette section
        },
        Avantage: {
            title: "Personnalisation poussée",
            description: "Nos cartes virtuelles peuvent être personnalisées selon vos besoins spécifiques. Que ce soit pour des achats ponctuels, des abonnements, ou des dépenses professionnelles, vous avez un contrôle total sur les limites et les paramètres de chaque carte.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.webp", // Chemin de l'image pour cette section
        },
        Tarification: {
            title: "Tarification transparente et compétitive",
            description: "Nous offrons des tarifs clairs et sans frais cachés, ce qui vous permet de mieux contrôler vos dépenses et d'économiser sur le long terme. Vous saurez exactement ce que vous payez et pourquoi.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.webp", // Chemin de l'image pour cette section
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentIndex = sections.indexOf(activeSection);
            const nextIndex = (currentIndex + 1) % sections.length;
            setActiveSection(sections[nextIndex]);
        }, 4000);

        return () => clearTimeout(timer);
    }, [activeSection]);

    useEffect(() => {
        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 100 / (4 * 10); // Incrémentation de 2.5% chaque 100ms
                } else {
                    return 0; // Remet à zéro pour la prochaine section
                }
            });
        }, 100);
        return () => clearInterval(progressTimer);
    }, [activeSection]);

    const miniCards = [
        { url: "/leGombo (1) (1).webp"},
        { url: "/leGombo (1) (1).webp"},
        { url: "/leGombo (1) (1).webp"},
        { url: "/leGombo (1) (1).webp"},
        { url: "/leGombo (2).webp"}
    ]

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
                            width={500}
                            height={300}
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
                        <div className="absolute top-0 left-0 w-full flex justify-around gap-4">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="h-1 w-1/3 bg-gray-200 relative"
                                >
                                    {activeSection === section && (
                                        <motion.div
                                            className="h-1 bg-[#40a160]"
                                            style={{ width: `${progress}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.1, ease: "linear" }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${
                                activeSection === "Utilité" ? "text-[#40a160]" : "text-gray-800"
                            }`}
                            onClick={() => setActiveSection("Utilité")}
                        >
                            <FaLock className="text-2xl mb-2" />
                            <span className="font-semibold">Utilité</span>
                        </div>
                        <div
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${
                                activeSection === "Avantage" ? "text-[#40a160]" : "text-gray-800"
                            }`}
                            onClick={() => setActiveSection("Avantage")}
                        >
                            <FaChartPie className="text-2xl mb-2" />
                            <span className="font-semibold">Avantage</span>
                        </div>
                        <div
                            className={`flex gap-2 items-center cursor-pointer pt-4 ${
                                activeSection === "Tarification" ? "text-[#40a160]" : "text-gray-800"
                            }`}
                            onClick={() => setActiveSection("Tarification")}
                        >
                            <FaLightbulb className="text-2xl mb-2" />
                            <span className="font-semibold">Tarification</span>
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
                            {miniCards.map((card, index) =>(
                                <MiniCardHero
                                    key={index}
                                    className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                    title=""
                                    url={card.url}
                                /> 
                            ))}             
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
