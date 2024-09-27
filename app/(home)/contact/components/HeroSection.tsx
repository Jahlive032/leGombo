// import Image from "next/image";

// const HeroSection = () =>{

//     return(
//         <section className="py-24 w-[85%] mx-auto">
//             <div>
//                 <h1 className="w-full text-center mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">
//                     Contact
//                 </h1>
//             </div>
//             <form action="https://fabform.io/f/{form-id}" method="post">
//                 <section className="text-gray-600 body-font relative">
//                     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//                         <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//                             {/* <iframe 
//                                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.251058834665!2d1.2108083!3d6.1222551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215fbb91b784c9%3A0x8fed0ab131d1fb14!2sEGO%20SARL!5e0!3m2!1sfr!2stg!4v1723194902486!5m2!1sfr!2stg" 
//                                 width="100%" 
//                                 height="100%" 
//                                 className="absolute inset-0"
//                                 frameBorder="0"
//                                 title="map"
//                             >
//                             </iframe> */}

//                             <Image
//                                 src="/abstract-green-shiny-swirls.png"
//                                 alt="map"
//                                 width={1000}
//                                 height={500}
//                             />
//                             <div className="absolute bg-white  flex flex-wrap py-6 rounded shadow-md">
//                                 <div className="lg:w-1/2 px-6">
//                                     <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
//                                     <p className="mt-1">Derrière le Palais de Lomé</p>
//                                 </div>
//                                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                                     <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//                                     <a className="text-[#50c878] leading-relaxed cursor-pointer">egofintech@gmail.com </a>
//                                     <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//                                     <p className="leading-relaxed">+228 98164646</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//                             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
//                             <p className="leading-relaxed mb-5 text-gray-600">En cas de problème, veuillez nous contacter:
//                             </p>
//                             <div className="relative mb-4">
//                                 <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom</label>
//                                 <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//                             </div>
//                             <div className="relative mb-4">
//                                 <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//                                 <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//                             </div>
//                             <div className="relative mb-4">
//                                 <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
//                                 <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//                             </div>
//                             <button className="text-white bg-[#50c878] border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-black text-lg">Contactez-nous</button>
//                             {/* <a href="https://veilmail.io/e/FkKh7o" className="mt-2 font-medium text-blue-600 hover:underline">Or click here to reveal our protected email address</a> */}
                        
//                         </div>
//                     </div>
//                 </section>
//             </form>
//         </section>
//     )
// }

// export default HeroSection;

"use client"

import { useEffect, useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from 'next/image'

export default function HeroSection() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  const backgroundRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            if (backgroundRef.current) {
                const { clientX, clientY } = e;
                const { left, top } = (backgroundRef.current as HTMLElement).getBoundingClientRect();
                const x = clientX - left;
                const y = clientY - top;
                (backgroundRef.current as HTMLElement).style.setProperty('--x', `${x}px`);
                (backgroundRef.current as HTMLElement).style.setProperty('--y', `${y}px`);
            }
        };
        }
        )
    ;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    
  }

  return (
    <div>
        <h1 className="text-5xl font-bold mb-4 text-center py-20">Contact</h1>

        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden max-w-6xl mx-auto shadow-2xl my-20">
        
        <div className="w-full md:w-1/2 p-8">
        <div className="mb-6">
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L1 12H4V22H20V12H23L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> */}
          <Image
            src="/Sans titre (96 x 96 px).png"
            alt="map"
            width={40}
            height={40}
          />
          {/* <span className="ml-2 font-bold">Untitled UI</span> */}
        </div>
        <h2 className="text-3xl font-bold mb-4">Nous sommes à votre écoute</h2>
        <p className="text-gray-600 mb-6">Nous sommes une agence de service avec des experts prêts à vous aider. Nous vous contacterons dans les 24 heures.</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prenom</label>
              <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prenom" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numero de téléphone</label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+228 98 88 88 88" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message..." className="h-32" />
          </div>
          <Button type="submit" className="w-full bg-[#50c878] text-white">Envoyer votre message</Button>
        </form>
      </div>
      <div className="w-full md:w-1/2 bg-black text-white p-8 relative overflow-hidden">
        <div  className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-75"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-rows-3 gap-4">
            <div>
                    <h3 className="text-xl font-semibold">Localisation</h3>
                    <p>KODJOVIAKOPE, Lome, TOGO</p>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold">Heure d&apos;ouverture</h3>
                    <p>De lundi à Vendredi: De 08h - 17h</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Contact</h3>
                    <p className="underline cursor-pointer">contactlegombo@gmail.com</p>
                    <p className="">+228 98 16 46 46</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}