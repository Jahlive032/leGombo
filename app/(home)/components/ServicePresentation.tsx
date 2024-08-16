"use client";

import styles from "@/app/(home)/styles/App.module.css";
import globe from "@/assets/transferInternationalLogo.jpg";
import tmoneyFlooz from "@/assets/transfertTmoneyFloozLogo.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicePresentation = () => {
  return (
    <section className="py-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">Nos Services</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Carte de transfert International */}
        <div className={`${styles.card} mx-auto max-w-[350px] hover:bg-green-300`}>
          <div className="rounded-lg">
            <Image
              src={globe}
              alt="image globe"
              className="rounded-lg rounded-b-none"
            />
          </div>
          <div className="p-5">
            <div className="inline-flex text-sm px-1 py-1.5 rounded-xl border-white/20">
              <motion.span
                animate={{
                  backgroundPositionX: "100%",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="text-xl bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
              >
                Transfert International
              </motion.span>
            </div>
            <p className="p-2">
              Envoyez de l&apos;argent partout dans le monde en quelques clics, avec
              des frais transparents et des taux de change compétitifs.
            </p>
            <div className="rounded-full">
              <Button className="rounded-full bg-[#50c878] hover:">
                Faîtes votre première transaction
              </Button>
            </div>
          </div>
        </div>

        {/* Carte de Transfert entre Tmoney et Flooz */}
        <div className={`${styles.card} mx-auto max-w-[350px]`}>
          <div className="p-5">
            <div className="inline-flex text-sm px-1 py-1.5 rounded-xl border-white/20">
              <motion.span
                animate={{
                  backgroundPositionX: "100%",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="text-xl bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
              >
                Transfert entre Tmoney et Flooz
              </motion.span>
            </div>
            <p className="p-2">
              Simplifiez vos transferts entre Tmoney et Flooz : Transférez de
              l&apos;argent facilement entre les deux principaux services de
              paiement mobile du Togo.
            </p>
            <div className="rounded-full">
              <Button className="rounded-full bg-[#50c878]">
                Faîtes votre première transaction
              </Button>
            </div>
          </div>
          <div className="rounded-lg">
            <Image
              src={tmoneyFlooz}
              alt="image Tmoney et Flooz"
              className="rounded-lg rounded-t-none"
            />
          </div>
        </div>

        {/* Carte de Compte bancaire vers Mobile Money */}
        <div className={`${styles.card} mx-auto max-w-[350px]`}>
          <div className="rounded-lg">
            <Image
              src={globe}
              alt="image globe"
              className="rounded-lg rounded-b-none"
            />
          </div>
          <div className="p-5">
            <div className="inline-flex text-sm px-1 py-1.5 rounded-xl border-white/20">
              <motion.span
                animate={{
                  backgroundPositionX: "100%",
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                className="text-xl bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
              >
                Compte bancaire vers Mobile Money
              </motion.span>
            </div>
            <p className="p-2">
              Profitez de la flexibilité et de la rapidité des transferts
              d&apos;argent depuis votre compte bancaire vers n&apos;importe quel
              portefeuille Mobile Money.
            </p>
            <div className="rounded-full">
              <Button className="rounded-full bg-[#50c878]">
                Faîtes votre première transaction
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePresentation;
