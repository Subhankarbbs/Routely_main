import React from 'react'
import { Link } from 'react-router-dom'

const LoginE = () => {
  return (
    <div className='min-h-screen flex items-center justify-center text-white bg-[#0B0F1A]'>
      <div class="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-center max-w-4xl w-full">

        {/* <!-- Sign In Form --> */}
        <div
          class="w-full max-w-md p-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
          <h1 class="text-4xl font-bold pb-5">Sign In</h1>
          <form action="" class="w-full space-y-4 text-left">
            <div>
              <label for="email">Email</label>
              <input id="email"
                class="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                placeholder="Enter your Email" />
            </div>
            <div>
              <label for="password">Password</label>
              <input id="password"
                class="w-full px-3 py-2 mt-1 border-2 border-teal-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-30"
                type="password" name="password" />
            </div>
            <Link className="text-right hover:text-teal-400 hover:underline block" to="/loginph">
              Sign in with your Mobile Number
            </Link>
            <div>
              <button
                class="w-full mt-5 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-semibold transition duration-200">
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Social SignIn --> */}
        <div
          class="py-10 w-full max-w-md flex flex-col items-center justify-center gap-10 rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
          <button
            class="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
            In with Google</button>
          <button
            class="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
            In with FaceBook</button>
          <button
            class="w-70 bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-bold transition duration-200">Sign
            In with TrueCaller</button>
        </div>
      </div>

    </div>
  )
}

export default LoginE