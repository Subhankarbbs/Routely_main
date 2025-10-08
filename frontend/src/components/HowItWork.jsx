import React from 'react'

const HowItWork = () => {
    return (
        <section className="m-auto p-10 container text-center">
            <h2 className="text-4xl font-bold mb-12">How It Works</h2>

            <div className="flex flex-col md:flex-row justify-around gap-8">
                <div className="flex flex-col items-center flex-1 p-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-black">1</span>
                    </div>
                    <h3 className="text-2xl font-semibold">Search</h3>
                    <p className="mt-2 text-gray-400">
                        Enter your pickup and destination details.
                    </p>
                </div>

                <div className="flex flex-col items-center flex-1 p-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-black">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold">Compare</h3>
                    <p className="mt-2 text-gray-400">
                        See real-time fares from different ride-sharing apps.
                    </p>
                </div>

                <div className="flex flex-col items-center flex-1 p-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-black">3</span>
                    </div>
                    <h3 className="text-2xl font-semibold">Book</h3>
                    <p className="mt-2 text-gray-400">
                        Choose the cheapest or fastest option and book instantly.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowItWork