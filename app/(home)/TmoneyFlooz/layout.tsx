import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leGombo",
  description: "leGombo",
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
      <body className={clsx(inter.className,"h-full flex flex-col w-full overflow-x-hidden sm:overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
