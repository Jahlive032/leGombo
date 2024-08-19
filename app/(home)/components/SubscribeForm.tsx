"use client"

const SubscribeForm = () =>{

    return(
        <div>
            <h3 className="text-lg font-semibold text-gray-800">Contactez-nous</h3>
            <form className="mt-4">
                <input
                type="email"
                placeholder="Email address"
                className="border rounded-lg px-4 py-2 w-full"
                />
                <button
                type="submit"
                className="mt-2 w-full bg-[#50c878]  text-white px-4 py-2 rounded-lg"
                >
                S&apos;inscrire
                </button>
            </form>
            {/* <p className="text-gray-500 mt-4">
                Hello, we are Lift Media. Our goal is to translate the positive effects from
                revolutionizing how companies engage with their clients & their team.
            </p> */}
        </div>
    )
}

export default SubscribeForm;