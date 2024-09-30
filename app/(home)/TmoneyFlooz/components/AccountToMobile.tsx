"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import image1 from "@/assets/man with phone.png"
import Image from "next/image";
import check from "@/public/check.svg"
import { AnimatedListDemo } from "./AnimatedListDemo";
import Link from "next/link";


const AccountToMobile = () =>{

    return(
        <section id="section2" className="bg-yellow-200">
            <div>
                <div className=" ">
                    <div className="container">
                        <div className="md:flex items-center mx-auto gap-20 py-10 w-[85%]">
                        
                            <div className="md:w-[50%]">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                                    className=""
                                >
                                    <div className="text-center md:text-left text-4xl font-semibold mb-4 sm:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-800 from-10% to-black to-60% mt-5">
                                        <h1 className="py-3">Opter pour des Transferts de Carte Bancaire vers Tmoney et Flooz</h1>
                                    </div>
                                    <div>
                                        <p className="text-xl py-3 md:text-left text-center"> Nos services de transfert de carte bancaire vers Mobile Money présentent de nombreux avantages :</p>
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
                                                <span><strong>Rapidité des Transactions</strong> : Les fonds sont transférés instantanément, permettant au bénéficiaire d&apos;utiliser l&apos;argent sans délai.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Sécurité Renforcée</strong>: Nous utilisons des protocoles de sécurité avancés pour garantir la protection de vos données et de vos transactions.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Accessibilité 24/7</strong>: Envoyez de l&apos;argent à tout moment, que ce soit en journée ou en soirée, depuis le confort de votre domicile.</span>
                                            </li>
                                            <li className="flex space-x-3 ">
                                                <Image
                                                    src={check}
                                                    alt="check"
                                                    width={25}
                                                    height={25}
                                                />
                                                <span><strong>Pas de Frais Cachés</strong>: Profitez de frais de transfert transparents et compétitifs, sans surprises.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-[30px] md:text-left text-center">
                                        <Link href="https://app.legombo.com/register">
                                        <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                                            Transférer maintenant
                                        </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="md:w-[40%] max-sm:mt-7">
                                <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 1, x: 0}}
                                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                                    className="w-full"
                                >
                                    {/* <Image
                                        src={image1}
                                        alt="Man with phone"
                                        className="w-full"
                                    /> */}
                                    <AnimatedListDemo/>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AccountToMobile;