import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/images/bg.png'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className="relative bg-cover bg-center h-[50vh] md:h-[65vh] lg:h-[75vh]"
                style={{ backgroundImage: `url(${heroImg})`}}>
            {/* <!-- Overlay --> */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* <!-- Content --> */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:items-start md:text-left md:mx-20">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                        Ride Smart, <span className="text-teal-400">Save More</span>
                    </h1>
                    <p className="text-lg">
                        Compare ride-sharing prices instantly and choose the most affordable option near you.
                    </p>
                </div>
                <div className="mt-6">
                    <ul className="flex flex-row gap-4 flex-wrap justify-center md:justify-start">
                        <li>
                            <button onClick={() => navigate('/signup')} className="bg-teal-500 hover:bg-teal-300 text-black font-semibold px-6 py-3 rounded-full transition duration-200">Sign Up</button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/mainpage')} className="bg-gray-700 hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-full transition">Compare</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero