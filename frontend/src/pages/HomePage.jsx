import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import HowItWorks from '../components/HowItWork'


const HomePage = () => {
  return (
    <>
        <div className='min-h-screen text-white bg-[#0B0F1A]'>
            <Hero />
            <HomeCards />
            <HowItWorks />
        </div>
    </>
  )
}

export default HomePage