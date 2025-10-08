import React from 'react'
import Card from './Card'
import calendar from '../assets/images/calendar.png'
import dollar from '../assets/images/dollar.png'
import pin from '../assets/images/pin.png'


const HomeCards = () => {
    return (
        <section className="py-8 container lg:container m-auto">
            <div className="flex flex-col md:flex-row justify-center gap-8 rounded-lg">
                <Card img={calendar} heading={`Real-Time`} explain={`Real time matching with nearby driver`}/>
                <Card img={dollar} heading={`Affordable Pricings`} explain={`Transparent, no hidden fees`}/>
                <Card img={pin} heading={`Effortless Booking`} explain={`Book wherever you want, whenever you want`}/>
            </div>
        </section>
    )
}

export default HomeCards