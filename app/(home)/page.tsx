"use client"

import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import CardPersentation from "./components/CardPresentation";
import ServicePresentation from "./components/ServicePresentation";
import { Testimonials } from "./components/Testimonials";
import FoireAuxQuestions from "./components/FoireAuxQuestions";
import ActionSection from "./components/ActionSection";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/public/logo4.png"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() =>{
      setIsLoading(false);
    }, 3000);

    return() => clearTimeout(timer);
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
          className="flex items-center justify-center h-screen bg-[#50c878]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-full h-32 w-32 border-t-4 border-white"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          {/* <motion.img
            src={logo.src}
            alt="logo image"
            className="h-32 w-32"
            initial={{ scale: 0}}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0]}}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          /> */}

          {/* Vous pouvez ajouter ici du texte ou d'autres éléments */}
        </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
              <main className="">
              <Header/>
              <HeroSection/>
              <CardPersentation/>
              <ServicePresentation/>
              <Testimonials/>
              <FoireAuxQuestions/>
              {/* <ActionSection/> */}
              <Footer/>
            </main>
          </motion.div>
          
        )}
      </AnimatePresence>
    </>
    
  );
}
