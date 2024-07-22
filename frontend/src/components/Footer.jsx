import React from 'react';
import footerBg from '../assets/footerAssets/footerBlurImg.svg';
import facebookIcon from '../assets/footerAssets/facebookIcon.svg';
import linkedInIcon from '../assets/footerAssets/linkedInIcon.svg';
import instaIcon from '../assets/footerAssets/instaIcon.svg';
import arrow from '../assets/footerAssets/arrow.svg';
import logo from '../assets/footerAssets/Logo.svg';

function Footer() {
    return (
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className="container mx-auto text-center flex flex-col items-center py-12 justify-center relative ">
                <h1 className="text-white text-center text-3xl md:text-5xl w-3/4 md:p-10 p-1 mb-8">
                    Let's discuss with us about your project
                </h1>
                <form className="flex justify-center text-white font-sans mb-10 items-center">
                    <input className="border-b bg-transparent focus:outline-none py-2 md:w-72 w-full mr-2 text-lg" type="email" placeholder="bidec000@gmail.com" />
                    <button className="rounded-full hover:bg-[#165056] duration-200 hover:border-[#165056] border p-2"><img src={arrow} alt="" /></button>
                </form>
                <div className="w-full">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row gap-3 text-white p-8 border-b justify-between items-center">
                            <img src={logo} alt="Logo" className="h-8" />
                            <ul className="flex gap-4 flex-col md:flex-row">
                                <li className="font-sans hover:text-[#227c85] text-md rounded-xl hover:font-bold duration-300 cursor-pointer p-2">HOME</li>
                                <li className="font-sans hover:text-[#227c85] text-md rounded-xl hover:font-bold duration-300 cursor-pointer p-2">SERVICES</li>
                                <li className="font-sans hover:text-[#227c85] text-md rounded-xl hover:font-bold duration-300 cursor-pointer p-2">ABOUT US</li>
                                <li className="font-sans hover:text-[#227c85] text-md rounded-xl hover:font-bold duration-300 cursor-pointer p-2">BLOGS</li>
                                <li className="font-sans hover:text-[#227c85] text-md rounded-xl hover:font-bold duration-300 cursor-pointer p-2">CONTACT US</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-8 pb-0 justify-between items-center">
                        <ul className='flex flex-row gap-4'>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={facebookIcon} alt="" /></li>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={linkedInIcon} alt="" /></li>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={instaIcon} alt="" /></li>
                        </ul>
                        <p className='text-gray-400 font-sans '>All Right Reserved Designcy 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
