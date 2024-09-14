import netflix from '@/public/netflix.png'
import amazon from '@/public/social.png'
import shopify from '@/public/shopify.png'
import google from '@/public/google.png'
import paypal from '@/public/pay-pal.png'
import playstation from '@/public/playstation.png'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function LogoTicker() {

    return (
        <div className="py-8 ">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
                className="flex gap-14 flex-none"
                animate={{
                translateX: "-50%"
                }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <Image src={netflix} alt="acme logo" className="logo-ticker-image" width={60}/>
            <Image src={amazon} alt="quantum logo" className="logo-ticker-image" width={60}/>
            <Image src={paypal} alt="echo logo" className="logo-ticker-image" width={60}/>
            <Image src={shopify} alt="echo logo" className="logo-ticker-image" width={60}/>
            <Image src={google} alt="celestial logo" className="logo-ticker-image" width={60}/>
            <Image src={playstation} alt="celestial logo" className="logo-ticker-image" width={60}/>
            
            <Image src={netflix} alt="acme logo" className="logo-ticker-image" width={60}/>
            <Image src={amazon} alt="quantum logo" className="logo-ticker-image" width={60}/>
            <Image src={paypal} alt="echo logo" className="logo-ticker-image" width={60}/>
            <Image src={shopify} alt="echo logo" className="logo-ticker-image" width={60}/>
            <Image src={google} alt="celestial logo" className="logo-ticker-image" width={60}/>
            <Image src={playstation} alt="celestial logo" className="logo-ticker-image" width={60}/>
          </motion.div>
        </div>
      </div>
    </div>
    )
}