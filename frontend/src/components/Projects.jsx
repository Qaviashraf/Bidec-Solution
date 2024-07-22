import React from 'react'
import projectImg1 from '../assets/ProjectAssets/Mask group.svg'
import rectangle from '../assets/ProjectAssets/Rectangle 31.svg'
import bgimg from '../assets/ProjectAssets/Ellipse 21.svg'
function Projects() {
    return (
        <div className="pb-10 my-10">
            <div
                className="heading flex justify-center lg:justify-around items-center flex-col md:flex-row gap-20 my-10 px-20">
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
                    {/* <img className='' src={bgimg} alt="" /> */}
                    <ul className='absolute bottom-[-10vh] right-0 pl-20'>
                        <li className='font-sans bottom-12 right-[1vw] rotate-[350deg] absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>UI/UX design</li>
                        <li className='font-sans bottom-20 rotate-[35deg] left-0 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-40'>graphics design</li>
                        <li className='font-sans bottom-[8vw] rotate-[320deg] left-[-5vw] absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 '>development</li>
                        <li className='font-sans bottom-24 rotate-[60deg] left-20 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>brand design</li>
                        <li className='font-sans bottom-0 rotate-0 left-1 absolute font-semibold text-md rounded-full bg-[#227C851A] border-2 border-[#FFFFFF] px-5 py-2 w-36'>Web design</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// export default Projects