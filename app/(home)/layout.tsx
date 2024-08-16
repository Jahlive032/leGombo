import { GoogleAnalytics } from '@next/third-parties/google'


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leGombo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      
      <body className={clsx(inter.className,"h-full flex flex-col w-full overflow-x-hidden sm:overflow-x-hidden")}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-RFX8L4YXJH" />
    </html>
  );
}
