"use client"

import React, { useEffect, useState } from "react";
import { FaLock, FaChartPie, FaLightbulb } from "react-icons/fa"; // Importation des icônes de react-icons
import { Button } from "@/components/ui/button"; // Importation d'un composant Button personnalisé
import { easeOut, motion } from "framer-motion"; // Importation de framer-motion pour les animations
import Image from "next/image"; // Importation du composant Image de Next.js pour optimiser les images
import carteBancaire from "@/public/724 - Copie-Récupéré1.png"; // Importation d'une image locale
import { MiniCardHero } from "./MiniCardHero"; // Importation du composant MiniCardHero
import { url } from "inspector";
import check from "@/assets/check.svg"
import { BsHandThumbsUp } from "react-icons/bs";
import { Gem, Sparkles } from "lucide-react";
import Link from "next/link";


const CardPresentation = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sections = ["Personnalisation", "Avantage", "Tarification"] as const;
    const [activeSection, setActiveSection] = useState<typeof sections[number]>("Personnalisation");
    const [progress, setProgress] = useState(0);

    const content = {
        Personnalisation: {
            title: "Personnaliser une carte virtuelle ",
            description1: "✅ Personnalisez selon vos gouts et selon vos besoins",
            description2: "✅ Créez et gardez le contrôle sur les transactions de vos enfants",
            description3: "✅ Obtenez une carte pour vos enfants et pour vos proches",
            description4: "✅ Créez et gardez le contrôle sur les transactions de vos enfants",

            buttonText: "Générez votre carte",
            imgSrc: "/Metal Crypto Credit Card@5-1920x1080 (3).png",
        },
        Avantage: {
            title: "Avantages de posséder une carte leGombo",
            description1: "✅ Commandez une carte en un clic",
            description2: "✅ Plafonds de dépôts très attractifs et imbattable",
            description3: "✅ Utilisez votre carte instantanément partout sur le net.",
            description4: "✅ Sécurité de vos transactions",

            buttonText: "Générez votre carte",
            imgSrc: "/40shots_so.png",
        },
        Tarification: {
            title: "Tarification transparente et compétitive",
            description1: "✅ ZÉRO frais de gestion",
            description2: "✅ ZÉRO frais pour ouverture de compte devise",
            description3: "✅ ZÉRO frais sur les paiements",
            description4: "✅ ZÉRO frais de consultation de solde",

            buttonText: "Générez votre carte",
            imgSrc: "/629shots_so.png",
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentIndex = sections.indexOf(activeSection);
            const nextIndex = (currentIndex + 1) % sections.length;
            setActiveSection(sections[nextIndex]);
        }, 10000);

        return () => clearTimeout(timer);
    }, [activeSection, sections]);

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
        <section className="py-10 mt-36 md:mt-0 md:py-20 bg-gradient-to-b from-[#F0F0F0] to-[#50c878]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                className="z-30 relative py-10 md:py-20 max-md:flex-col-reverse"
            >
                <div className="flex flex-col w-[90%] md:w-[80%] mx-auto md:flex-row items-center justify-between bg-white rounded-lg p-4 md:p-8">
                    <div className="flex-1 mb-8 md:mb-0 w-full md:w-auto">
                        <Image
                            src={content[activeSection].imgSrc || ''}
                            alt={content[activeSection].title}
                            className="w-full h-auto object-contain rounded-md"
                            width={500}
                            height={300}
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left md:pl-6 lg:pl-12">
                        <h2 className="text-[#50c878] text-base md:text-lg mb-2 md:mb-4"></h2>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">{content[activeSection].title}</h1>
                        <p className="text-sm md:text-base text-gray-600 text-left mb-2">{content[activeSection].description1}</p>
                        <p className="text-sm md:text-base text-gray-600 text-left mb-2">{content[activeSection].description2}</p>
                        <p className="text-sm md:text-base text-gray-600 text-left mb-2">{content[activeSection].description3}</p>
                        <p className="text-sm md:text-base text-gray-600 text-left mb-2">{content[activeSection].description4}</p>

                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 md:mt-6">
                            <Link href="https://ego-frontend-next.vercel.app/register">
                                <button className="w-full sm:w-auto bg-[#50c878] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-[#40a160] transition duration-300">
                                    {content[activeSection].buttonText}
                                </button>
                            </Link>

                            <Link href="/card">
                                <Button className="w-full sm:w-auto">
                                    Découvrir plus
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <footer className="mt-8 pt-4 w-[90%] md:w-[80%] mx-auto">
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
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.1, ease: "linear" }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {sections.map((section) => (
                            <div
                                key={section}
                                className={`flex flex-col sm:flex-row gap-2 items-center cursor-pointer pt-4 ${
                                    activeSection === section ? "text-[#40a160]" : "text-gray-800"
                                }`}
                                onClick={() => setActiveSection(section)}
                            >
                                <div className="text-2xl sm:text-xl md:text-2xl">
                                    {section === "Personnalisation" && <Sparkles />}
                                    {section === "Avantage" && <BsHandThumbsUp />}
                                    {section === "Tarification" && <Gem />}
                                </div>
                                <span className="text-sm md:text-base font-semibold hidden sm:inline">{section}</span>
                            </div>
                        ))}
                    </nav>
                </footer>
            </motion.div>
        </section>
    );
};

export default CardPresentation;

