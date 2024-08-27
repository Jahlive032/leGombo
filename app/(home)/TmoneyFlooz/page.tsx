"use client"

import { useEffect } from "react";
import AccountToMobile from "./components/AccountToMobile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import TmoneyFloozSection from "./components/TmoneyFloozSection";

const Page = () =>{

    useEffect(() => {
        // Si une ancre est présente dans l'URL, faites défiler vers elle
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, []);

    return(
        <main>
            <Header/>
            <HeroSection/>
            <TmoneyFloozSection/>
            <AccountToMobile/>
            <Footer/>
        </main>
    )
}

export default Page;