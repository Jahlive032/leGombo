"use client"

import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dollar from "@/assets/single-fake-gold-dollar-coin.png"
import Link from "next/link";

const HeroSection = () =>{

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

    return(
        <section ref={sectionRef} className="md:mt-20 mt-7">
            <div className="container ">
                <div className="md:flex md:flex-col justify-center items-center overflow-hidden">
                    <motion.div className="">
                        <h1 className="mb-4 text-5xl sm:text-5xl tracking-tight font-bold text-gray-900 text-center">
                        Transfert International d&apos;Argent : <br /> Rapide, Sécurisé et Abordable
                        </h1>
                        <p className="text-center text-lg">Envoyez de l&apos;argent partout dans le monde avec notre service de transfert international sécurisé.</p>
                        <div className="mt-[30px] flex justify-center items-center">
                            <Link href="https://ego-frontend-next.vercel.app/register">
                            <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                Ouvrez un compte professionnel
                            </Button>
                            </Link>
                        </div>
                    </motion.div>

             
                        <MacbookScroll/>
                  

                    <motion.img
                        src={dollar.src}
                        alt="dollar image"
                        width={250}
                        height={250}
                        className="hidden md:block absolute right-[20px] top-[10px]"
                        style={{
                        translateY,
                        }}
                    />


                    <motion.img
                        src={dollar.src}
                        alt="dollar image"
                        width={250}
                        height={250}
                        className="hidden md:block absolute left-[20px] top-[400px]"
                        style={{
                        translateY,
                        }}
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default HeroSection;