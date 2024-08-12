import React from 'react'
import rectangle from '../assets/ProjectAssets/Rectangle 31.svg'
import bgimg from '../assets/ProjectAssets/Ellipse 21.svg'
import arrow from '../assets/footerAssets/arrow.svg'
import bgShade from '../assets/HeroSection/Ellipse 18.svg'
import '../App.css'

import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="pb-10 px-3 py-5">
            <img className='absolute left-0' src={bgShade} alt="" />
            <div
                className="heading flex justify-center text-center md:text-evenly lg:justify-between items-center flex-col md:flex-row gap-20 md:my-10 md:px-20">
                <span
                    data-aos="fade-right"
                    className="md:text-6xl text-4xl lg:w-[50%] w-full relative">
                    Our Project have been done
                </span>
                <div
                    data-aos="fade-down" className="hidden lg:block">

                    <ul className='relative top-24 right-32 xl:right-[250px] pl-20 hover:bg-gray-300'>
                        <Link to='service/ui-ux-design' className='font-sans bottom-10 right-[1vw] rotate-[350deg] absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-48 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>UI/UX design</Link>
                        <Link to='service/graphic-designing' className='font-sans bottom-20 rotate-[25deg] left-1 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-48 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>graphics design</Link>
                        <Link to='service/mobile-app-development' className='font-sans top-[-150px] rotate-[330deg] right-16 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-48 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>App development</Link>
                        <Link to='service/ecommerce-solution' className='font-sans bottom-16 rotate-[50deg] left-28 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-48 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>E-commerce</Link>
                        <Link to='service/web-design-development' className='font-sans bottom-2.5 rotate-0 left-4 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-48 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>Web design</Link>
                    </ul>
                </div>

                <img className='absolute z-[-10] right-2.5' src={bgimg} alt="" />
            </div>
            <div
                data-aos="fade-up"
                className="flex flex-col gap-10  pt-10">
                <div className="flex justify-center  lg:flex-row flex-col gap-10 items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="relative projectBgImg" >
                            <div className="img">

                            </div>
                            {/* <img src={projectImg1} alt="" /> */}
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-2.5 bottom-2.5 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
                        </div>
                        <h1 className='text-4xl pt-8'>E-commerce Website
                            Design</h1>
                        <p className='divide-x-2 py-2 divide-gray-300 text-gray-400'>
                            <span className='font-sans text-lg px-4'>UI/UX Design</span>
                            <span className='font-sans text-lg px-4'>Wireframe</span>
                            <span className='font-sans text-lg px-4'>Prototype</span>
                        </p>
                    </div>
                    <div className='flex flex-col lg:pt-32 p-0 justify-center items-center'>
                        <div className="relative projectBgImg" >
                            <div className="img">

                            </div>
                            {/* <img src={projectImg2} alt="" /> */}
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-2.5 bottom-2.5 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
                        </div>
                        <h1 className='text-4xl pt-8'>E-commerce Website
                            Design</h1>
                        <p className='divide-x-2 py-2 divide-gray-300 text-gray-400'>
                            <span className='font-sans text-lg px-4'>UI/UX Design</span>
                            <span className='font-sans text-lg px-4'>Wireframe</span>
                            <span className='font-sans text-lg px-4'>Prototype</span>
                        </p>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                className="flex justify-center gap-10 items-center">
                <div className="flex justify-center  lg:flex-row flex-col gap-10 items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="relative projectBgImg" >
                            <div className="img">

                            </div>
                            {/* <img src={projectImg3} alt="" /> */}
                            <button className='absolute bg-[#227C85] m-4 hover:bg-[#165056] duration-300 right-2.5 bottom-2.5 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
                        </div>
                        <h1 className='text-4xl pt-8'>E-commerce Website
                            Design</h1>
                        <p className='divide-x-2 py-2 divide-gray-300 text-gray-400'>
                            <span className='font-sans text-lg px-4'>UI/UX Design</span>
                            <span className='font-sans text-lg px-4'>Wireframe</span>
                            <span className='font-sans text-lg px-4'>Prototype</span>
                        </p>
                    </div>
                    <div className='flex flex-col lg:pt-32 p-0 justify-center items-center'>
                        <div className="relative projectBgImg" >
                            <div className="img">

                            </div>
                            {/* <img src={projectImg4} alt="" /> */}
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-2.5 bottom-2.5 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
                        </div>
                        <h1 className='text-4xl pt-8'>E-commerce Website
                            Design</h1>
                        <p className='divide-x-2 py-2 divide-gray-300 text-gray-400'>
                            <span className='font-sans text-lg px-4'>UI/UX Design</span>
                            <span className='font-sans text-lg px-4'>Wireframe</span>
                            <span className='font-sans text-lg px-4'>Prototype</span>
                        </p>
                    </div>
                </div>
            </div>

            <div
                data-aos="fade-up" className="flex justify-center pt-10">
                <button className='font-sans hover:bg-[#165056] duration-300 text-lg bg-[#227C85] p-3 px-7 text-white rounded-full '>View All Projects</button>
            </div>

        </div>
    )
}

export default Projects