import React from 'react'

const SignUp = () => {
    const isLogin = true
    
    const socialBtn = "w-[70%] bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200";
    return (
        <div className='min-h-screen text-white bg-[#0B0F1A]'>
            <div className="container w-auto mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-center">

                {/* <!-- Sign Up Form --> */}
                <div
                    className="w-full max-w-md p-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
                    <h1 className="text-4xl font-bold pb-5">Sign Up</h1>
                    <form action="" className="w-full space-y-4 text-left">
                        <div>
                            <label htmlForfor="name">Name</label>
                            <input id="name"
                                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                                type="text" name="name" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                                type="email" placeholder="Enter your Email" />
                        </div>
                        <div>
                            <label htmlFor="number">Mobile Number</label>
                            <input id="number"
                                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                                type="tel" name="number" placeholder="Enter your Mobile Number" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password"
                                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                                type="password" name="password" />
                        </div>
                        <div>
                            <label htmlFor="password_confirmation">Re-type Password</label>
                            <input id="password_confirmation"
                                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                                type="password" name="password_confirmation" />
                        </div>
                        <div>
                            <button
                                className="w-full mt-5 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-semibold transition duration-200"
                                type='submit'
                                >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                {/* <!-- Social Signup --> */}
                <div
                    className="py-10 w-full max-w-md flex flex-col items-center justify-center gap-10 rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
                    <button
                        className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
                        Up with Google</button>
                    <button
                        className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
                        Up with FaceBook</button>
                    <button
                        className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
                        Up with TrueCaller</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp