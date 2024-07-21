import React from 'react'
import { TiPlus } from "react-icons/ti";
function Question() {
    return (
        <div 
        data-aos="fade-up"
        className="flex justify-center items-start pt-20 p-10 md:px-20 gap-10 flex-col">
            <h1 className='md:text-6xl text-4xl md:px-10 p-0'>Frequently asked questions</h1>
            <div
        data-aos="fade-right" className="flex justify-between  w-full items-center border-2 border-gray-400 rounded-xl">
                <h1 className='md:text-4xl text-lg p-4 md:p-10'>What services does your digital agency offer?</h1>
                <span className='md:text-4xl text-2xl px-4'>
                    <button><TiPlus /></button>
                    {/* <button><TiPlus /></button> */}
                </span>
            </div>
            <div
        data-aos="fade-right" className="flex justify-between w-full items-center border-2 border-gray-400 rounded-xl">
                <h1 className='md:text-4xl text-lg p-4 md:p-10'>What industries do you specialize in?</h1>
                <span className='md:text-4xl text-2xl px-4'>
                    <button><TiPlus /></button>
                    {/* <button><TiPlus /></button> */}
                </span>
            </div>
            <div
        data-aos="fade-right" className="flex justify-between  w-full items-center border-2 border-gray-400 rounded-xl">
                <h1 className='md:text-4xl text-lg p-4 md:p-10'>what is your process for working with clients</h1>
                <span className='md:text-4xl text-2xl px-4'>
                    <button><TiPlus /></button>
                    {/* <button><TiPlus /></button> */}
                </span>
            </div>
        </div>
    )
}

export default Question
