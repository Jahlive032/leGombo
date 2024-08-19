"use client"

import Image from "next/image";

const ActionSection = () =>{

    return(
        <section className="bg-slate-300 m-10 p-8 w-[80%] mx-auto rounded-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto space-y-8 lg:space-y-0">
                <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#50C787]">
                    Let’s Explore The Beauty of The World
                </h1>
                <p className="text-black mt-4">
                    We have many special offers especially for you.
                </p>
                <button className="mt-6 px-6 py-3 bg-[#50c878] text-white rounded-full shadow-lg">
                    Connectez-vous
                </button>
                </div>
                <div className="w-full lg:w-auto">
                    <Image
                        src={"/pexels-liza-summer-6348124.jpg"}
                        alt="Car with people"
                        className="w-full lg:w-80 mx-auto"
                        width={220}
                        height={220}
                    />
                </div>
            </div>
        </section>
    )
}

export default ActionSection;