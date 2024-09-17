"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import check from "@/public/check.svg"
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline/next';
import Link from "next/link";



const BenefitsCard = () =>{

    return(
        <section className="bg-slate-300">
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
                                    <Spline
        scene="https://prod.spline.design/eC1qYXZV2FI9-t3Z/scene.splinecode" 
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
                                        <h1 className="py-2">Avec nos cartes, vous bénéficiez de:</h1>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xl md:text-left text-center">Grâce à notre solution, vous pouvez créer des cartes virtuelles personnalisées en quelques clics, adaptées à vos besoins, que ce soit pour des achats uniques ou des abonnements récurrents</p>
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
                                                <span><strong>Sécurité des Cartes Virtuelles Renforcée</strong> : Grâce à un cryptage avancé, vos cartes virtuelles sont protégées contre les cyberattaques et les transactions frauduleuses.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Personnalisation des Cartes Virtuelles</strong>: Créez des cartes adaptées à vos besoins, qu&apos;il s&apos;agisse de paiements uniques ou d&apos;abonnements récurrents.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Obtention Instantanée de Cartes Virtuelles</strong>: Créez une carte en quelques secondes sans attendre de livraison physique, idéale pour les achats en ligne rapides.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Contrôle Total de Vos Cartes Virtuelles</strong>: Gérez vos cartes en temps réel, avec la possibilité de limiter les dépenses, les activer ou les désactiver instantanément.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    

                                    <div className="mt-[30px] md:text-left text-center">
                                        {/* <Link href="https://ego-frontend-next.vercel.app/register"> */}
                                        <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                            Transférer maintenant
                                        </Button>
                                        {/* </Link> */}
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

export default BenefitsCard;