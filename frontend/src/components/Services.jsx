import React from 'react'
import ballGif from '../assets/servicesAssets/movingBall.svg'
import brandingImg from '../assets/servicesAssets/1.svg'
import designing from '../assets/servicesAssets/2.svg'
import graphics from '../assets/servicesAssets/3.svg'
import UiUx from '../assets/servicesAssets/4.svg'
import bgShade from '../assets/HeroSection/Ellipse 18.svg'
function Services() {
    return (
        <div className='container mx-auto py-10'>
            <div className="heading max-w-screen flex sm:flex-row flex-col justify-around my-10 items-start">
                <h1
                data-aos="fade-right" 
                className='md:text-5xl text-3xl w-full text-center sm:w-1/3 my-2'>We offer Several Service For You</h1>
                <p
                data-aos="fade-left" 
                className='w-96 my-2 text-center w-full sm:w-1/3 text-lg md:text-start font-sans font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            <div className="flex max-w-screen my-10 flex lg:flex-row flex-col justify-evenly lg:items-start items-center gap-10">
                <div data-aos="fade-left" className='relative'>
                    <img className='rounded-lg w-full px-2' src={ballGif} alt="" />
                    <button className='rounded-full font-sans hover:bg-[#165056] duration-300 absolute sm:right-0 right-1 bottom-0 bg-[#227C85] text-white p-3 px-10 sm:px-12'>View All</button>
                </div>
                <div
                data-aos="fade-right"
                className="flex flex-col gap-5 px-3 md:w-1/3">
                    <div className=' border-b border-gray-400 group relative' >
                        <h1 className='text-4xl group-hover:text-[#227C85]' >01<span className='sm:ps-8 ps-2'>Branding </span></h1>
                        <img className='opacity-0 group-hover:opacity-100 absolute z-10 w-20 md:w-52 right-0 top-0 md:left-[-140px] transition-opacity duration-500' src={brandingImg} alt="" />
                        <p className='font-sans lg:ps-20 ps-5 text-lg py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className=' border-b border-gray-400 group relative'>
                        <h1 className='text-4xl group-hover:text-[#227C85]'>02<span className='sm:ps-8 ps-2' >Web Design </span></h1>
                        <img className='opacity-0 group-hover:opacity-100 absolute z-10 w-20 md:w-52 right-0 top-0 md:left-[-140px] transition-opacity duration-500' src={designing} alt="" />
                        <p className='font-sans lg:ps-20 ps-5 text-lg py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className=' border-b border-gray-400 group relative'>
                        <h1 className='text-4xl group-hover:text-[#227C85]'>03<span className='sm:ps-8 ps-2'>Motion Graphic </span></h1>
                        <img className='opacity-0 group-hover:opacity-100 absolute z-10 w-20 md:w-52 right-0 top-0 md:left-[-140px] transition-opacity duration-500' src={graphics} alt="" />
                        <p className='font-sans lg:ps-20 ps-5 text-lg py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className=' border-b border-gray-400 group relative'>
                        <h1 className='text-4xl group-hover:text-[#227C85]'>04<span className='sm:ps-8 ps-2'>UI/UX </span></h1>
                        <img className='opacity-0 group-hover:opacity-100 absolute z-10 w-20 md:w-52 right-0 top-0 md:left-[-140px] transition-opacity duration-500' src={UiUx} alt="" />
                        <p className='font-sans lg:ps-20 ps-5 text-lg py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                </div>
            </div>
            <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
        </div>
    )
}

export default Services
