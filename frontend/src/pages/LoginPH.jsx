import React from 'react'
import { Link } from 'react-router-dom'

const LoginPH = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] text-white text-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-center max-w-4xl w-full">
        
        {/* Sign In Form */}
        <div className="w-full max-w-md p-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
          <h1 className="text-4xl font-bold pb-5">Sign In</h1>
          <form action="" className="w-full space-y-4 text-left">
            <div>
              <label htmlFor="number">Mobile Number</label>
              <input
                id="number"
                className="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-300"
                type="tel"
                name="number"
                placeholder="Enter your Mobile Number"
              />
            </div>
            <Link className="text-right hover:text-teal-400 hover:underline block" to="/logine">
              Sign in with your Email
            </Link>
            <div>
              <button
                type="submit"
                className="w-full mt-5 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-semibold transition duration-200"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>

        {/* Social SignIn */}
        <div className="py-10 w-full max-w-md flex flex-col items-center justify-center gap-10 rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
          <button className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">
            Sign In with Google
          </button>
          <button className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">
            Sign In with FaceBook
          </button>
          <button className="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">
            Sign In with TrueCaller
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPH