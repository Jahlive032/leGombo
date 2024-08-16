"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import check from "@/public/check.svg"
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline/next';



const Utilities = () =>{

    return(
        <section className="bg-[#F0F0F0]">
            <div>
                <div className=" ">
                    <div className="container">
                        <div className="md:flex items-center gap-5 py-10 w-full">

                            <div className="md:w-[50%]">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    <div className="text-center md:text-left text-3xl font-semibold mb-4 sm:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-800 from-10% to-orange-700 to-60% mt-5">
                                        <h1 className="py-2">Envoyez de l&apos;argent à vos proches</h1>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xl md:text-left text-center">Suivez vos transferts en temps réel avec des notifications instantanées et bénéficiez d&apos;un service client dédié pour vous assister à chaque étape</p>
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
                                                <span><strong>Rapidité des Transferts</strong> : Recevez de l&apos;argent rapidement de l&apos;international avec des délais de transfert réduits, vous permettant de recevoir les fonds presque instantanément.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Frais de Transfert Réduits</strong>: Profitez de frais de transfert compétitifs et transparents pour des transactions internationales abordables, sans coûts cachés.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Suivi en Temps Réel</strong>: Suivez vos transferts en temps réel avec des notifications instantanées, assurant une transparence totale tout au long du processus.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Confiance et Fiabilité</strong>: Choisissez un service de transfert international réputé pour sa fiabilité, garantissant que votre argent arrive à destination en toute sécurité.</span>
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
                            <div className="md:w-[50%] max-sm:py-7">
                                <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className=""
                                >
                                    {/* <iframe src="https://www.youtube-nocookie.com/embed/CBHkOLLWYtY" className='w-full h-[550px] rounded-lg'></iframe> */}
                                    <Spline
                                        scene="https://prod.spline.design/k8inevp1EqHnqHov/scene.splinecode" 
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Utilities;