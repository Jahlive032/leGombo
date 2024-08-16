import BenefitsCard from "./components/BenefitsCard"
import CardPersentation from "./components/CardPresentation"
import CardUtilities from "./components/CardUtilities"
import Footer from "./components/Footer"
import Header from "./components/Header"

const Page = () =>{

    return(
        <main>
            <Header/>
            <CardPersentation/>
            <CardUtilities/>
            <BenefitsCard/>
            <Footer/>
        </main>
    )
}  

export default Page