"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo3.png"
import logoMenu from "@/assets/menu.svg"
import { motion } from "framer-motion";






const Header = () =>{

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [active, setActive] = useState<string | null>(null);



  return(
    <header className={`navbar h-20 z-50 sticky top-0 bg-background/50 w-full items-center p-4 flex justify-around gap-4 backdrop-blur-sm `}>
      <Image src={logo} height={60} width={60} alt='logo'/>
        <Sheet>
          <SheetTrigger asChild>
            <Image src={logoMenu} height={30} width={30} alt="menu logo" className="md:hidden"/>
          </SheetTrigger>
          <SheetContent>
            <div className='flex flex-col items-center'>
            <div className="flex flex-col gap-5 mr-[100px]">
              <Link href={"/"}>Acceuil</Link>

              <div className="md:flex md:items-center md:justify-between w-full">
                <ul className="flex flex-col font-medium md:flex-row md:mt-0 ">
                  
                  <li className="relative">
                    <button
                      className="flex items-center justify-between w-full text-gray-900 border-gray-100 hover:bg-gray-50 md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={toggleDropdown}
                    >
                      Services
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        aria-hidden="true"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l4 4 4-4"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-10 w-[300px] p-4 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                        <div className="pb-0 text-gray-900 dark:text-white">
                          <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                              <Image
                                src="/Pink_Icon_-_Cards.svg"
                                alt="Image 1"
                                width={40}
                                height={40}
                              />
                              <a
                                href="/card"
                                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Carte
                              </a>
                            </li>
                            <li className="flex items-center gap-2">
                              <Image
                                src="/Orange_Icon_-_Global.svg"
                                alt="Image 3"
                                width={40}
                                height={40}
                              />
                              <a
                                href="/internationalTransfert"
                                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Transfert International
                              </a>
                            </li>
                            <li className="flex items-center gap-2">
                              <Image
                                src="/Orange_Icon_-_Convert.svg"
                                alt="Image 3"
                                width={40}
                                height={40}
                              />
                              <a
                                href="/TmoneyFlooz"
                                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                              >
                                Transfert entre Tmoney et Flooz
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              <Link 
                href="/tarifs"
              >
                Tarifs
              </Link>

              <Link href={"#"}>Contact</Link>
            </div>
            
              
            <div className='flex flex-col gap-2'>
              <Button variant={"outline"} className='bg-background'>S&apos;inscrire</Button>
              <Button className="bg-[#50c878] hover:bg-[#50c878]">Se connecter</Button>
            </div>
            </div>
          </SheetContent>

        </Sheet>
        <div className='hidden md:flex items-center gap-2'>
          <div className="md:flex md:items-center md:justify-between w-full">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-[#50c878] dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Acceuil
                </a>
              </li>
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={toggleDropdown}
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-[300px] p-4 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                    <div className="pb-0 text-gray-900 dark:text-white">
                      <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                          <Image
                            src="/Pink_Icon_-_Cards.svg"
                            alt="Image 1"
                            width={40}
                            height={40}
                          />
                          <a
                            href="/card"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Carte
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Image
                            src="/Orange_Icon_-_Global.svg"
                            alt="Image 3"
                            width={40}
                            height={40}
                          />
                          <a
                            href="/internationalTransfert"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Transfert International
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Image
                            src="/Orange_Icon_-_Convert.svg"
                            alt="Image 3"
                            width={40}
                            height={40}
                          />
                          <a
                            href="/TmoneyFlooz"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Transfert entre Tmoney et Flooz
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/tarifs"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
              
          <div className='flex items-center gap-2'>
            <Button variant={"outline"} className='bg-background'>S&apos;inscrire</Button>
            <Button className="bg-[#50c878] hover:bg-[#50c878]">Se connecter</Button>
          </div>
        </div>
    </header>
  )
}

export default Header;