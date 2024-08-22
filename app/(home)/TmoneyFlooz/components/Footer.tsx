import Image from "next/image";
import logo from "@/assets/logo3.png"
import SubscribeForm from "./SubscribeForm";

const Footer = () =>{

    return(
        <footer className="bg-[#0a74f0] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div>
                    <a href="/">
                        <Image
                            src={logo}
                            alt="logo image"
                            width={60}
                            height={60}
                            className="bg-white rounded-lg"
                        />
                    </a>
                    
                    <p className="text-white mt-4">
                    leGombo est une solution fintech permettant de gérer vos transactions internationales comme nationales via les cartes virtuelles et les transactions Tmoney - Flooz.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-100">Services</h3>
                    <ul className="mt-4 text-white space-y-2">
                        <li><a href="/card">Cartes</a></li>
                        <li><a href="/internationalTransfert">Transfert International</a></li>
                        <li><a href="/TmoneyFlooz">Transfert Tmoney/Flooz</a></li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-100">Legal</h3>
                    <ul className="mt-4 text-white space-y-2">
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Termes et Conditions</a></li>
                        
                    </ul>
                </div>
                <div>
                <SubscribeForm />
                </div>
            </div>
        </footer>
    )
}

export default Footer;