import React from 'react'

const Card = ({img,heading,explain}) => {
    return (
        <div
            className="flex flex-col items-center justify-between p-6 rounded-xl bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1f] shadow-[0_0_15px_rgba(100,116,255,0.2)]">
            <img src={ img } alt="calendar" />
            <h2 className="text-2xl font-bold">{ heading }</h2>
            <p className="mt-2 mb-4">
                { explain }
            </p>
        </div>
    )
}

export default Card