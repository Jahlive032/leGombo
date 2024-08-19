"use client"

import { useEffect, useState } from "react"
import BenefitsCard from "./components/BenefitsCard"
import CardPersentation from "./components/CardPresentation"
import CardUtilities from "./components/CardUtilities"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { motion, AnimatePresence } from "framer-motion"

const Page = () =>{

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() =>{
          setIsLoading(false);
        }, 3000);
    
        return() => clearTimeout(timer);
      }, [])
    

    return(
        <main>
            <Header/>
            <CardPersentation/>
            <CardUtilities/>
            <BenefitsCard/>
            <Footer/>
        </main>  
    )
}  

export default Page