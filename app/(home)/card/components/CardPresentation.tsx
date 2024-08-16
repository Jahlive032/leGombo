
import WordRotate from '@/components/magicui/word-rotate';
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import image from "@/public/3d-business-phone-and-card-standing.png"

export default function CardPersentation() {
  return (
    <main className='py-20'>
        <div className='container w-[80%] mx-auto'>
            <div className='md:flex items-center'>
                <div className="md:w-[478px] py-10 z-20">
                    <h1 className="mb-4 text-4xl sm:text-5xl tracking-tight font-bold md:text-left text-gray-900 text-center">
                        Joignez vos dépenses avec nos différentes cartes
                        <WordRotate
                            className="mb-4 text-4xl sm:text-5xl tracking-tight font-bold md:text-left text-[#50c878] text-center"
                            duration={2500}
                            words={["personnelles", "business"]}
                        />
                    </h1>                    
                    <p className="text-xl sm:text-2xl text-center md:text-left">Simplifiez vos achats en ligne avec nos cartes virtuelles innovantes.</p>
                    <div className="mt-[30px] sm:flex items-center justify-center text-center md:justify-start">
                        <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
                            Ouvrez un compte
                        </Button>
                    </div>
                </div>
                
                <div className="mt-20 ml-[200px] max-sm:hidden md:mt-0 md:flex-1 absolute py-10">
                    <Spline
                        scene="https://prod.spline.design/RxythoL58-e124yb/scene.splinecode" 
                    />  
                </div>
            </div>
            
        </div>
      
    </main>
  );
}
