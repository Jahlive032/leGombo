"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image"
import check from "@/public/check.svg"


const TmoneyFloozSection = () =>{

    return(
        <section className="bg-green-200">
            <div>
                <div className=" ">
                    <div className="container">
                        <div className="md:flex items-center w-full gap-5 py-10">
                            <div className="md:w-[50%]">
                                <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    <iframe src="https://www.youtube-nocookie.com/embed/CBHkOLLWYtY" className='w-full h-[550px] rounded-lg'></iframe>
                                </motion.div>
                            </div>

                            <div className="md:w-[50%]">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    <div className="text-center md:text-left text-3xl font-semibold mb-4 sm:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-10% to-black to-60% mt-5">
                                        <h1 className="py-5">Transfert Facile entre Tmoney et Flooz</h1>
                                    </div>
                                    <div>
                                        <p className="text-xl py-3 md:text-left text-center">Vous avez un accès total à vos fonds, vous pouvez décider de l&apos;alimenter ou de retirer votre argent où et quand vous le voulez !</p>
                                    </div>

                                    <div>
                                        <ul className=" space-y-5 border-gray-200">
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Transfert Rapide</strong> : Transferts instantanés entre Tmoney et Flooz.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Accéssibilité</strong>: Processus simple et direct sans frais cachés.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Support Client</strong>: Disponible 24/7, permettant des transactions à tout moment.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Rapidité</strong>: Le bénéficiaire reçoit les fonds immédiatement sur son compte Tmoney ou Flooz.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    

                                    <div className="mt-[30px] md:text-left text-center">
                                        <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                            Transférer maintenant
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TmoneyFloozSection;