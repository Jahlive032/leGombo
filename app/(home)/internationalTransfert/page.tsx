"use client"

import BenefitsTransfert from "./components/BenefitsTransfert";
import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import Utilities from "./components/Utilities";
import Footer from "@/components/Footer";

const Page = () =>{

    return(
        <main>
            <Header/>
            <HeroSection/>
            <Utilities/>
            <BenefitsTransfert/>
            <Footer/>
        </main>
    )
}

export default Page;