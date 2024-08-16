import AccountToMobile from "./components/AccountToMobile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TmoneyFloozSection from "./components/TmoneyFloozSection";

const Page = () =>{

    return(
        <main>
            <Header/>
            <HeroSection/>
            <TmoneyFloozSection/>
            <AccountToMobile/>
            <Footer/>
        </main>
    )
}

export default Page;