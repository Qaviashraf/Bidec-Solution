import React from 'react'
import projectImg1 from '../assets/ProjectAssets/Mask group1.svg'
import projectImg2 from '../assets/ProjectAssets/Mask group.svg'
import projectImg3 from '../assets/ProjectAssets/Mask group3.svg'
import projectImg4 from '../assets/ProjectAssets/Mask group2.svg'
import rectangle from '../assets/ProjectAssets/Rectangle 31.svg'
import bgimg from '../assets/ProjectAssets/Ellipse 21.svg'
import arrow from '../assets/footerAssets/arrow.svg'
function Projects() {
    return (
        <div className="pb-10 px-3 my-10">
            <div
                className="heading flex justify-between lg:justify-around items-center flex-col md:flex-row gap-20 my-10 px-20">
                <span
                    data-aos="fade-right"
                    className="lg:text-6xl text-4xl lg:w-1/2 w-1/2 relative">
                    Our
                    <span className="relative inline-block">
                        <span className="invisible">spac</span>
                        <img className="bg-green-950 rounded-full absolute top-0 left-1 lg:left-4 lg:h-12 h-8" src={rectangle} alt="" />
                        <span className=""> Project </span>
                    </span>
                    have been done
                </span>
                <div
                    data-aos="fade-down" className="relative">

                    <ul className='absolute bottom-[-10vh] right-[12vh] pl-20 hover:bg-gray-300'>
                        <li className='font-sans bottom-10 right-[1vw] rotate-[350deg] absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-44 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>UI/UX design</li>
                        <li className='font-sans bottom-20 rotate-[25deg] left-1 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-44 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>graphics design</li>
                        <li className='font-sans bottom-[8vw] rotate-[330deg] left-[-8vw] absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-44 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>development</li>
                        <li className='font-sans bottom-16 rotate-[50deg] left-28 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-44 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>brand design</li>
                        <li className='font-sans bottom-0 rotate-0 left-4 absolute text-lg rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2  w-44 text-center hover:bg-[#227C85] hover:text-white hover:border-[#227C85]'>Web design</li>
                    </ul>
                </div>
                <img className='absolute z-[-10] w-screen' src={bgimg} alt="" />
            </div>
            <div
                data-aos="fade-up"
                className="flex flex-col gap-10  pt-10">
                <div className="flex justify-center  lg:flex-row flex-col gap-10 items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="relative">
                            <img src={projectImg1} alt="" />
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-0 bottom-0 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
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
                        <div className="relative">
                            <img src={projectImg2} alt="" />
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-0 bottom-0 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
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
                        <div className="relative">
                            <img src={projectImg3} alt="" />
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-0 bottom-0 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
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
                        <div className="relative">
                            <img src={projectImg4} alt="" />
                            <button className='absolute bg-[#227C85] hover:bg-[#165056] duration-300 right-0 bottom-0 rounded-full z-10 p-4'> <img className='' src={arrow} alt="" /></button>
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