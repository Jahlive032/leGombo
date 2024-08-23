"use client"

import React, { useEffect, useState } from "react";
import { FaLock, FaChartPie, FaLightbulb } from "react-icons/fa"; // Importation des icônes de react-icons
import { Button } from "@/components/ui/button"; // Importation d'un composant Button personnalisé
import { easeOut, motion } from "framer-motion"; // Importation de framer-motion pour les animations
import Image from "next/image"; // Importation du composant Image de Next.js pour optimiser les images
import carteBancaire from "@/public/724 - Copie.webp"; // Importation d'une image locale
import { MiniCardHero } from "./MiniCardHero"; // Importation du composant MiniCardHero
import { url } from "inspector";
import check from "@/assets/check.svg"

const CardPresentation = () => {
    const sections = ["Utilité", "Avantage", "Tarification"] as const;
    const [activeSection, setActiveSection] = useState<typeof sections[number]>("Utilité");
    const [progress, setProgress] = useState(0);

    const content = {
        Utilité: {
            title: "Utilité de posséder une carte virtuelle ",
            description: "Contrairement aux cartes physiques, les cartes virtuelles peuvent être générées et utilisées instantanément, parfait pour des besoins immédiats.",
            descriptions: "En utilisant une carte virtuelle, vos informations personnelles et bancaires ne sont jamais partagées directement avec les marchands.",
            buttonText: "Générez votre carte",
            imgSrc: "/props-black-credit-card.webp",
        },
        Avantage: {
            title: "Avantages de posséder une carte de chez leGombo",
            description: "Nos cartes virtuelles peuvent être personnalisées selon vos besoins spécifiques. Que ce soit pour des achats ponctuels, vous avez un contrôle sur les limites et les paramètres de chaque carte.",
            descriptions: "Bénéficiez d'un service client réactif et disponible pour toute question ou assistance liée à l'utilisation de votre carte virtuelle leGombo.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.webp",
        },
        Tarification: {
            title: "Tarification transparente et compétitive",
            description: "Bénéficiez de frais de transaction parmi les plus bas du marché, vous permettant d'économiser sur chaque achat en ligne et cela peu import l'endroit.",
            descriptions: "Modifiez les limites de dépense de votre carte virtuelle sans frais additionnels, vous offrant une flexibilité totale pour gérer vos finances.",
            buttonText: "Générez votre carte",
            imgSrc: "/3d-business-credit-cards-1.webp",
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentIndex = sections.indexOf(activeSection);
            const nextIndex = (currentIndex + 1) % sections.length;
            setActiveSection(sections[nextIndex]);
        }, 10000);

        return () => clearTimeout(timer);
    }, [activeSection]);

    useEffect(() => {
        const progressTimer = setInterval(() => {
            setProgress((prev) => prev < 100 ? prev + 100 / (10 * 10) : 0);
        }, 100);
        return () => clearInterval(progressTimer);
    }, [activeSection]);

    const miniCards = [
        { url: "/leGombo (1) (1).webp" },
        { url: "/leGombo (1) (1).webp" },
        { url: "/leGombo (1) (1).webp" },
        { url: "/leGombo (1) (1).webp" },
        { url: "/leGombo (2).webp" }
    ];

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
        <section className="py-20 bg-gradient-to-b from-[#F0F0F0] to-[#50c878]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                className="z-30 relative py-20 max-md:flex-col-reverse"
            >
                <div className="flex flex-col w-[80%] mx-auto md:flex-row items-center justify-between bg-white rounded-lg p-8">
                    <div className="flex-1 mb-8 md:mb-0">
                        <Image
                            src={content[activeSection].imgSrc}
                            alt={content[activeSection].title}
                            className="w-full h-auto object-contain"
                            width={500}
                            height={300}
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left md:pl-12">
                        <h2 className="text-[#50c878] text-lg mb-4">{activeSection.toUpperCase()}</h2>
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">{content[activeSection].title}</h1>
                        <p className="text-gray-600 text-left mb-8">{content[activeSection].description}</p>
                        <p className="text-gray-600 text-left mb-8">{content[activeSection].descriptions}</p>

                        <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
                            <button className="bg-[#50c878] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#40a160] transition duration-300">
                                {content[activeSection].buttonText}
                            </button>
                            <Button>
                                Découvrir plus
                            </Button>
                        </div>
                    </div>
                </div>

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
                                            // style={{ width: `${progress}%` }}
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
                    <div className="flex gap-5">
                        <div className="flex max-sm:hidden md:flex-row items-center gap-5">
                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1).png"
                            />

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1).png"
                            /> 

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1).png"
                            />    

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (1).png"
                            /> 

                            <MiniCardHero
                                className="bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl border-none"
                                title=""
                                url="/leGombo (2).png"
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
};

export default CardPresentation;

