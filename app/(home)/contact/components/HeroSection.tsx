const HeroSection = () =>{

    return(
        <section className="py-24 w-[85%] mx-auto">
            <div>
                <h1 className="w-full text-center mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">
                    Contact
                </h1>
            </div>
            <form action="https://fabform.io/f/{form-id}" method="post">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.251058834665!2d1.2108083!3d6.1222551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215fbb91b784c9%3A0x8fed0ab131d1fb14!2sEGO%20SARL!5e0!3m2!1sfr!2stg!4v1723194902486!5m2!1sfr!2stg" 
                                width="100%" 
                                height="100%" 
                                className="absolute inset-0"
                                frameBorder="0"
                                title="map"
                            >
                            </iframe>
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p className="mt-1">Derrière le Palais de Lomé</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a className="text-[#50c878] leading-relaxed cursor-pointer">egofintech@gmail.com </a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p className="leading-relaxed">+228 92136821</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">En cas de problème, veuillez nous contacter:
                            </p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button className="text-white bg-[#50c878] border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-black text-lg">Contactez-nous</button>
                            {/* <a href="https://veilmail.io/e/FkKh7o" className="mt-2 font-medium text-blue-600 hover:underline">Or click here to reveal our protected email address</a> */}
                        
                        </div>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default HeroSection;