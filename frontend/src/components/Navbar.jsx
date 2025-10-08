import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
    const location = useLocation()
    let isSignupPage = location.pathname === '/signup'

    const navigate = useNavigate()
    return (
        <nav className="p-6 md:px-10 text-white bg-[#0B0F1A] flex flex-col gap-3 md:flex-row justify-between items-center">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="h-10 w-auto" />
                </Link>
            </div>
            <div>
                <ul className="flex flex-row items-center space-x-6">
                    <li><a href="support.html" className="hover:text-teal-400 transition">Support</a></li>
                    <li>
                        {
                            isSignupPage ? (
                                <button onClick={() => navigate("/logine")}
                            className="bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-semibold transition duration-200">
                            Login
                        </button>
                            ) : (
                                <button onClick={() => navigate("/signup")}
                            className="bg-teal-500 hover:bg-teal-300 text-black px-5 py-2 rounded-full font-semibold transition duration-200">
                            Sign Up
                        </button>
                            )
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar