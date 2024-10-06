"use client"

// import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/logo4.png"
import logoMenu from "@/assets/menu.svg"
import { motion } from "framer-motion";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

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
              <Link href="/" >Accueil</Link>

            <div className="md:flex md:items-center md:justify-between w-full">
              <ul className="flex flex-col font-medium md:flex-row md:mt-0 ">
                
                <li className="relative">
                  <button
                    className="flex items-center justify-between w-full text-gray-900 border-gray-100 hover:bg-gray-50 md:w-auto md:hover:bg-transparent  md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent outline-none"
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
                              src="/icons/virtual-card-icon.svg"
                              alt="Image 1"
                              width={40}
                              height={40}
                            />
                            <a
                              href="/card"
                              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                            >
                              Carte Virtuelle
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <Image
                              src="/icons/globe-icon.svg"
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
                              src="/icons/transfer-icon.svg"
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

                          <li className="flex items-center gap-2">
                            <Image
                              src="/icons/transfer-icon.svg"
                              alt="Image 3"
                              width={40}
                              height={40}
                            />
                            <a
                              href="/TmoneyFlooz#section2"
                              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                            >
                              Carte bancaire vers Mobile money
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            <Link href="https://app.legombo.com/install/guide">Guide d&apos;installation</Link>


            <Link href="/contact">Contact</Link>
          </div>
          
            
          <div className='flex flex-col gap-2'>
            <Link href="https://app.legombo.com/register">
              <Button variant={"outline"} className='bg-background'>S&apos;inscrire</Button>
            </Link>
            <Link href="https://app.legombo.com/login">
              <Button className="bg-[#50c878] hover:bg-[#50c878]">Se connecter</Button>
            </Link>
          </div>
          </div>
        </SheetContent>

      </Sheet>
        {/* <div className='hidden md:flex items-center gap-2'>
          <div className="md:flex md:items-center md:justify-between w-full">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-[#50c878] dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Accueil
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
                            src="/icons/virtual-card-icon.svg"
                            alt="Image 1"
                            width={40}
                            height={40}
                          />
                          <a
                            href="/card"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Carte Virtuelle
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Image
                            src="/icons/globe-icon.svg"
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
                            src="/icons/transfer-icon.svg"
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

                        
                      
                        <li className="flex items-center gap-2">
                          <Image
                            src="/icons/transfer-icon.svg"
                            alt="Image 3"
                            width={40}
                            height={40}
                          />
                          <a
                            href="/TmoneyFlooz#section2"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Carte bancaire vers Mobile money
                          </a>
                        </li>

                  
                        
                      </ul>

                       
                      
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/install-guide"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#50c878] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#50c878] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Guide d&apos;installation
                </Link>
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
            <Link href="https://app.legombo.com/register">
              <Button variant={"outline"} className='bg-background'>S&apos;inscrire</Button>
            </Link>
            <Link href="https://app.legombo.com/login">
              <Button className="bg-[#50c878] hover:bg-[#50c878]">Se connecter</Button>
            </Link>
          </div>
        </div> */}

<NavigationMenu className="hidden md:flex items-center gap-2">
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accueil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/card"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <Image src="/icons/virtual-card-icon.svg" height={40} width={40} alt="virtual-card-icon"/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Carte Virtuelle
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Obtenez une carte virtuelle sécurisée pour vos achats en ligne. Pratique, 
                    instantanée et contrôlable. Profitez d&apos;une expérience d&apos;achat sans frontières.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/internationalTransfert" title="Transfert International">
              Recevez de l&apos;argent au Togo depuis l&apos;étranger rapidement et en toute sécurité. 
              Profitez de taux compétitifs et d&apos;un service fiable pour vos transferts entrants.              
              </ListItem>
              <ListItem href="/TmoneyFlooz" title="Transfert entre Tmoney et Flooz">
              Transférez facilement de l&apos;argent entre les plateformes Tmoney et Flooz. 
              Une solution pratique pour gérer vos fonds sur différents services de mobile money.              
              </ListItem>
              <ListItem href="/TmoneyFlooz#section2" title="Carte bancaire vers Mobile money">
              Rechargez votre compte mobile money directement depuis votre carte bancaire. 
              Un moyen simple et rapide d&apos;alimenter votre portefeuille électronique.              
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        <NavigationMenuItem>
          <Link href="/install-guide" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Guide d&apos;installation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className='flex items-center gap-2'>
            <Link href="https://app.legombo.com/register">
              <Button variant={"outline"} className='bg-background'>S&apos;inscrire</Button>
            </Link>
            <Link href="https://app.legombo.com/login">
              <Button className="bg-[#50c878] hover:bg-[#50c878]">Se connecter</Button>
            </Link>
          </div>
    </NavigationMenu>
    </header>
  )
}



export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:line-clamp-none transition-all duration-300 ease-in-out">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"