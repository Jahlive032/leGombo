import { motion } from "framer-motion";
import Image from "next/image";
import { MiniCardHero } from "./MiniCardHero";
import { Card } from "./Card";
import React from 'react'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'
import { siVisa, siMastercard, siNetflix, siFacebook, siPaypal, siGoogle, siShopify, siStripe, siTiktok, siAmazon, siAlibabacloud, siPlaystation, siGoogleplay } from 'simple-icons'
import { ArrowUpRight, HelpCircle, Search } from "lucide-react";
import LogoTicker from "./LogoTicker";
import Link from "next/link";

export default function NewSection() {

    return (
        <>
<div className=" w-[90%] mx-auto bg-gradient-to-b from-[#50c878] to-[#0a74f0] text-black relative overflow-hidden rounded-3xl mt-20">
<div className="absolute inset-0 bg-[url('/world-map-pattern.png')] opacity-10 z-0"></div>

<svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>

<svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

{/* Main content */}
<div className="relative z-10">
  {/* Navigation */}
  {/* Hero section */}
  <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
    {/* Left column */}
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        {/* Simplify your all transactions with us. */}
        Simplifiez toutes vos transactions avec nous.
      </h1>
      <p className="text-xl mb-8">
      Créez des Cartes VISA et Mastercard Illimitées pour Vos Paiements en Ligne
      </p>
      <div className="flex space-x-4">
        {/* <Link href="https://ego-frontend-next.vercel.app/register"> */}
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
          Créez un compte
        </button>
      </div>
    </div>

    {/* Right column */}
    <div className="md:w-1/2">
  <div className="bg-black text-white rounded-3xl p-6 max-w-md mx-auto relative overflow-hidden card-glow">
    
    <div className="shine"></div>
    
    <div className="flex justify-between items-center mb-8 z-10 relative">
      <p>leGombo</p>          
      {/* <Link href="https://ego-frontend-next.vercel.app/register"> */}
        <button className="bg-[#c1f1c1] text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
          <span className="mr-1">+</span>
          <span className="hidden sm:inline">Générez votre carte</span> 
        </button>
      {/* </Link> */}
    </div>

    <div className="mb-8 z-10 relative">
      <span className="text-sm text-gray-400">Balance</span>
      <h2 className="text-3xl font-bold">$32,000.00</h2>
    </div>

    <div className="flex justify-between items-end z-10 relative">
      <div>
        <span className="text-sm text-gray-400">**** **** 1406 1805</span>
        <p>KODJO HERMANN</p>
      </div>
      <div className="text-right">
        <span className="text-sm text-gray-400">Expire le</span>
        <p>10/26</p>
      </div>
    </div>
  </div>
</div>

  </div>

  <LogoTicker/>
</div>
</div>
</>  
    )
}