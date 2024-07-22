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
        <div className="pb-10 my-10">
            <div
                className="heading flex justify-center lg:justify-around items-center flex-col lg:flex-row gap-20 my-10 px-20">
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
                <div data-aos="fade-down" className="relative">
                    <ul
                        className='absolute bottom-[-10vh] lg:right-[10vw] pl-20'>
                        <li className='font-sans bottom-12 right-[1vw] rotate-[350deg] absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>UI/UX design</li>
                        <li className='font-sans bottom-20 rotate-[35deg] left-0 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-40'>graphics design</li>
                        <li className='font-sans bottom-[8vw] rotate-[320deg] left-[-5vw] absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 '>development</li>
                        <li className='font-sans bottom-24 rotate-[60deg] left-20 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>brand design</li>
                        <li className='font-sans bottom-0 rotate-0 left-1 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>Web design</li>
                    </ul>
                </div>
                <img className='absolute w-screen right-0' src={bgimg} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center py-10 gap-10">
                <div className="flex justify-around flex-col xl:flex-row items-center gap-10">
                    <div
                        data-aos="fade-up"
                    >
                        <div className="relative">
                            <img className='' src={projectImg1} alt="" />
                            <button className='absolute right-0 bottom-3 z-10 '>
                                <img className='p-3 rounded-full bg-[#227C85]' src={arrow} alt="" />
                            </button>
                        </div>
                        <div>
                            <h1 className='text-4xl py-5'>E-commerce Website
                                Design</h1>
                            <p className='flex gap-5 divide-x divide-gray-300 text-gray-400 text-lg'>
                                <span className='px-5 font-sans'>UI/UX Design</span>
                                <span className='px-5 font-sans'>Wireframe</span>
                                <span className='px-5 font-sans'>Prototype</span>
                            </p>
                        </div>
                    </div>
                    <div

                        data-aos="fade-up" className="xl:pt-32 pt-0 ">
                        <div className="relative">
                            <img src={projectImg2} alt="" />
                            <button className='absolute right-0 bottom-3 z-10 '>
                                <img className='p-3 rounded-full bg-[#227C85]' src={arrow} alt="" />
                            </button>
                        </div>
                        <div>
                            <h1 className='text-4xl py-5'>E-commerce Website
                                Design</h1>
                            <p className='flex gap-5 divide-x divide-gray-300 text-gray-400 text-lg'>
                                <span className='px-5 font-sans'>UI/UX Design</span>
                                <span className='px-5 font-sans'>Wireframe</span>
                                <span className='px-5 font-sans'>Prototype</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-col xl:flex-row items-center gap-10">
                    <div
                        data-aos="fade-up">
                        <div className="relative">
                            <img src={projectImg3} alt="" />
                            <button className='absolute right-0 bottom-3 z-10 '>
                                <img className='p-3 rounded-full bg-[#227C85]' src={arrow} alt="" />
                            </button>
                        </div>
                        <div>
                            <h1 className='text-4xl py-5'>E-commerce Website
                                Design</h1>
                            <p className='flex gap-5 divide-x divide-gray-300 text-gray-400 text-lg'>
                                <span className='px-5 font-sans'>UI/UX Design</span>
                                <span className='px-5 font-sans'>Wireframe</span>
                                <span className='px-5 font-sans'>Prototype</span>
                            </p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up" className="xl:pt-32 pt-0 ">
                        <div className="relative">
                            <img src={projectImg4} alt="" />
                            <button className='absolute right-0 bottom-3 z-10 '>
                                <img className='p-3 rounded-full bg-[#227C85]' src={arrow} alt="" />
                            </button>
                        </div>
                        <div>
                            <h1 className='text-4xl py-5'>E-commerce Website
                                Design</h1>
                            <p className='flex gap-5 divide-x divide-gray-300 text-gray-400 text-lg'>
                                <span className='px-5 font-sans'>UI/UX Design</span>
                                <span className='px-5 font-sans'>Wireframe</span>
                                <span className='px-5 font-sans'>Prototype</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='bg-[#227C85] p-3 px-5 rounded-full text-white font-sans'>View All Projects</button>
            </div>
        </div>
    )
}

export default Projects
