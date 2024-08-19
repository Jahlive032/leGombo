"use client"
import { useEffect, useState } from "react"
import BenefitsCard from "./components/BenefitsCard"
import CardPersentation from "./components/CardPresentation"
import CardUtilities from "./components/CardUtilities"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { motion, AnimatePresence } from "framer-motion"
import TarifCard from "./components/TarifCard"

const Page = () =>{
    return(
        <main>
            <Header/>
            <CardPersentation/>
            <CardUtilities/>
            <BenefitsCard/>
            <TarifCard/>
            <Footer/>
        </main>  
    )
}  

export default Page