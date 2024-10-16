import { GoogleAnalytics } from '@next/third-parties/google'


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leGombo",
  description: "Transférez facilement votre argent entre Flooz et T-money",
  icons:[
    {
      rel: "icon", url: "/Sans titre (96 x 96 px).png"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      
      <body className={clsx(inter.className," flex flex-col w-full overflow-x-hidden")}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-RFX8L4YXJH" />
    </html>
  );
}
