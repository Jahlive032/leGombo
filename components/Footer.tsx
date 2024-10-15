"use client";

import logo from "@/public/logo4.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0a74f0] p-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-8 max-w-7xl mt-8 w-[90%] mx-auto">
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="logo image"
            width={60}
            height={60}
            className="bg-white rounded-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">Services</h3>
          <ul className="mt-4 text-white space-y-2">
            <li>
              <a href="/card">Cartes</a>
            </li>
            <li>
              <a href="/internationalTransfert">Transfert International</a>
            </li>
            <li>
              <a href="/TmoneyFlooz">Transfert Tmoney/Flooz</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">Mentions Légales</h3>
          <ul className="mt-4 text-white space-y-2">
            <li>
              <a href="/politique-de-confidentialite">Politique de confidentialité</a>
            </li>
            <li>
              <a href="/termes-et-conditions-de-vente">Termes et Conditions de vente</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">Pays</h3>
          <ul className="mt-4 max-md:flex  max-md:items-center max-md:justify-center md:justify-start gap-2">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2">
              <Image src="/togo.png" alt="logo togo" width={20} height={20} />
              <span>Togo</span>
            </a>

            <a href="#" className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/icons8-nigeria-circular-96.png"
                alt="logo Nigeria"
                width={20}
                height={20}
              />
              <span>Nigeria</span>
            </a>
          </ul>
        </div>
      </div>

      <hr className="border-white w-[90%] mx-auto my-4" />

      <div className="flex flex-col items-center justify-center w-[90%] mx-auto mt-10">
        <p className="text-white mb-4">
          <strong>Avertissement:</strong> leGombo n&apos;est pas une banque, nous ne sommes pas non plus émetteur de monnaie électronique et nous ne détenons pas non plus les fonds des déposants.
        
          leGombo agit uniquement en tant que Fintech facilitant l&apos;accès aux offres en partenariat avec des émetteurs agréés dans leurs juridictions respectives. Nous n&apos;exerçons pas d&apos;activités bancaires et ne fournissons pas de services bancaires traditionnels.
          Vous reconnaissez et acceptez que leGombo n&apos;est pas une banque et que toutes les transactions ou services financiers sont réalisés par des partenaires tiers en utilisant la plateforme leGombo et ses services associés.
        </p>
      </div>

      <hr className="border-white w-[90%] mx-auto my-4" />

      <div className="flex items-center justify-center">
        <p className="text-gray-200">
          &copy; {new Date().getFullYear()} leGombo. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


