import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import clientImg from '../assets/ClientPgAssets/ClientImg.svg'

function ClientSays() {
    return (
        <div className="container mx-auto py-5">
            <h1 data-aos="fade-up" className='text-center lg:text-6xl text-4xl w-full md:w-1/2 mx-auto'>What our client says
                about us</h1>
            <div className='flex justify-center lg:flex-row flex-col gap-10 mx-auto px-10 pt-10'>
                <img data-aos="fade-right" src={clientImg} alt="" />
                <div data-aos="fade-left" className="flex justify-around items-start flex-col lg:w-1/2 w-full px-10">
                    <span>
                        <h1 className='text-4xl'>Daivd Bens</h1>
                        <h1 className='font-sans text-xl'>CEO at SaaS Studio</h1>
                    </span>
                    <p className='font-sans text-md md:text-lg py-5 lg:p-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <button className='border-2 rounded-full p-3 m-1 text-gray-400'><FaArrowLeft /></button>
                        <button className='border-2 rounded-full p-3 m-1 border-[#227C85] text-[#227C85]'><FaArrowRight /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientSays
