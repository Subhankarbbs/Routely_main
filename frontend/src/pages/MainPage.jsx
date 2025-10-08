import React from 'react'

const MainPage = () => {
  return (
    <div className='min-h-screen text-white bg-[#0b0f1a]'>
        <div className="flex flex-row gap-5 justify-around">
            <div className='flex flex-col gap-5'>
                <div className='bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]'>
                    <form action="">
                        <label htmlFor="Pickup">From</label>
                        <input id='Pickup' type="text" />
                        <label htmlFor="Destination">To</label>
                        <input id='Pickup' type="text" />
                    </form>
                </div>
                <div className='bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]'>
                    <label htmlFor="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio est adipisci, dolore illo saepe laborum, odit animi qui placeat soluta? Quas incidunt neque ex animi repellat quam necessitatibus magnam!</label>
                </div>
            </div>
            <div>
                MAP
            </div>
        </div>
    </div>
  )
}

export default MainPage