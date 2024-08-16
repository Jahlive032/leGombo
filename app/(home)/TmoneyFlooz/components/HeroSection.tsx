"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import image5 from "@/assets/User2.png"
import Spline from '@splinetool/react-spline/next';



const HeroSection = () =>{

    return(
        <section className="md:mt-20 md:py-20 py-0 mt-7 mb-20">
            <div className="container w-[80%] mx-auto">
                <div className="md:flex">
                    <motion.div 
                        initial={{ opacity: 0, x: -20}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                        className="md:w-[500px] items-center"
                    >
                        <h1 className="mb-4 text-4xl sm:text-5xl  md:text-left mx-auto gap-5 tracking-tight font-bold text-gray-900 text-center">
                            Le meilleur service de Transfert d&apos;Argent au Togo
                        </h1>
                        <p className="text-xl sm:text-2xl text-center md:text-left">
                            Envoyer de l&apos;argent à votre famille, à des amis, ou régler des transactions commerciales
                        </p>
                        <div className="mt-[30px] flex items-center justify-center text-center md:justify-start">
                            <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                               Faîtes votre première transaction
                            </Button>
                        </div>
                    </motion.div>

                    <div className="mt-20 md:mt-0 md:flex-1">
                       {/* <motion.img
                            src={image5.src}
                            alt="image5"
                            width={1000}
                       /> */}

                        <Spline
                            scene="https://prod.spline.design/WdNhocSWTcFhNG7E/scene.splinecode" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;