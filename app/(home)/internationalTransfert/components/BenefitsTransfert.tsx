"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import check from "@/public/check.svg"
import Spline from '@splinetool/react-spline/next';
import { Button } from "@/components/ui/button";


const BenefitsTransfert = () =>{

    return(
        <section>
            <div>
                <div className=" ">
                    <div className="container">
                        <div className="md:flex max-md:flex-col-reverse  items-center w-full gap-5 py-10">

                            <div className="md:w-[50%]">
                                <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    {/* <iframe src="https://www.youtube-nocookie.com/embed/CBHkOLLWYtY" className='w-full h-[550px] rounded-lg'></iframe> */}
                                    <Spline
                                        scene="https://prod.spline.design/DpD2VJDL5aIOTtRb/scene.splinecode" 
                                    />
                                </motion.div>
                            </div>

                            <div className="md:w-[50%]">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    <div className="text-center md:text-left text-3xl font-semibold mb-4 sm:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-800 from-10% to-orange-700 to-60% mt-5">
                                        <h1 className="py-2">Meilleur service de Transfert d'Argent vers le Togo : Pourquoi Nous Choisir ?</h1>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xl md:text-left text-center">Nous sommes le choix numéro un pour les transferts d'argent vers le Togo pour plusieurs raisons :</p>
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
                                                <span><strong>Taux de Change Avantageux</strong> : Nous offrons les meilleurs taux de change pour maximiser le montant reçu par vos proches au Togo.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Sécurité Maximale</strong>: Notre plateforme utilise les technologies de sécurité les plus avancées pour protéger vos informations personnelles et vos transactions.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Support Client 24/7</strong>: Notre équipe est disponible jour et nuit pour vous assister en cas de besoin.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Options de Paiement Flexibles</strong>: Payez par carte bancaire, ou virement bancaire pour plus de commodité.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    

                                    <div className="mt-[30px] md:text-left text-center">
                                        <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                            Transférez maintenant
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

export default BenefitsTransfert;