"use client"

import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import useView from "@/lib/view.store";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/(home)/styles/Home.module.css"
import PhoneCardAnimation from "./PhoneCardAnimation";
import { MiniCardHero } from "./MiniCardHero";
import Image from "next/image";
import logoAndroid from "@/assets/logo-android.svg"

const HeroSection = () =>{

    const [isBlurred, setIsBlurred] = useState(false);
    const [isThirdSection, setIsThirdSection] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBlurred(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const ref = useRef(null);
    const { isView } = useView();
    const { scrollY } = useScroll();
    const [position, setPosition] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(300 * 0.2);
    const [positionX, setPositionX] = useState(1);
    const [isHidden, setIsHidden] = useState(false);
    const [positionY, setPositionY] = useState(0)

    const handleScroll = () => {
        if (window.scrollY >= 2300) {
            setIsHidden(true);
            setIsThirdSection(true);
        } else {
            setIsHidden(false);
            setIsThirdSection(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateScrollY = () => {
            setPosition(window.scrollY);
            
            if (window.scrollY > 0 && window.scrollY <= 1200) {              
                setPositionY(1 - (window.scrollY / window.innerWidth));

                if (position >= 300) {
                    setRotate(window.scrollY * 0.4);
                }
            } else if (window.scrollY > 1125) {
                
            } else {
                setRotate(300 * 0.2);
            }
        };
        
        window.addEventListener('scroll', updateScrollY);
        return () => {
            window.removeEventListener('scroll', updateScrollY);
        };
    }, [position]);


    const [scrolllY, setScrollY] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleScrolll = () => {
        setScrollY(window.scrollY);
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <section className="bg-[#F0F0F0] h-[700px] w-full">
            <RetroGrid/>
            <div className={`container py-24 h-[700px] lg:py-28 relative max-md:h-auto ${styles.section} ${isBlurred ? styles.blurred : ''}`}>
                <div className="flex justify-between w-full max-md:justify-center max-md:flex-col  items-center gap-4">
                    <div className={`flex ${styles.content}`}>
                        <div className="md:flex">
                            <motion.div className="md:pt-5 flex flex-col md:ml-[8.8rem] md:w-[35%]">
                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className=" mb-4 font-extrabold tracking-tight leading-none text-6xl xl:text-7xl text-[#50c878]"
                                >
                                    leGombo
                                </motion.h1>
                                <motion.h3
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="mt-3 text-xl text-muted-foreground text-black"
                                >
                                    Bienvenue sur leGombo, une plateforme de transfert d&apos;argent sécurisée et conviviale. Transférez de l&apos;argent d&apos;un compte Flooz vers un compte Tmoney ou d&apos;un compte Tmoney vers un compte Flooz.
                                </motion.h3>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="mt-7 grid gap-3 w-full sm:inline-flex items-center justify-center md:justify-start cursor-pointer"
                                >
                                    <div className="sm:flex items-center">
                                        <a href="#">
                                            <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                                <Image
                                                    src={logoAndroid}
                                                    alt="logo android"
                                                    className="w-5 mr-2"
                                                />
                                                Télécharger l&apos;application
                                            </Button>
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div className="flex-1 flex justify-center mt-10 max-md:py-24 p-6 md:ml-10">
                                <div className="">
                                    <PhoneCardAnimation/>
                                </div>

                                <div className="relative">
                                    <MiniCardHero className="absolute top-[100px] -right-[50px] bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl" url="/Mastercard-Logo.png" title="mastercard logo"/>
                                </div>

                                <div className="relative">
                                    <MiniCardHero className="absolute bottom-[200px] right-[290px] bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl" url="/visa.png" title="visa logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;