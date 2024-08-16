
import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardPersentation from "./components/CardPresentation";
import ServicePresentation from "./components/ServicePresentation";
import { Testimonials } from "./components/Testimonials";
import FoireAuxQuestions from "./components/FoireAuxQuestions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <HeroSection/>
      <CardPersentation/>
      <ServicePresentation/>
      <Testimonials/>
      <FoireAuxQuestions/>
      <Footer/>
    </main>
  );
}
