
import React, { useState } from 'react';
import logo from "../assets/Bidec-logo.svg";

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='fixed top-0 relative z-50 max-w-screen'
        data-aos="fade-down">
        <div className='flex justify-between items-center max-w-screen min-w-screen px-10 py-4 bg-white shadow-md  bg-trasparent bg-opacity-0 backdrop-filter backdrop-blur-lg '>
            <div>
                <img src={logo} alt="Logo" className='w-20 md:w-24' />
            </div>
            {/* Mobile View */}
            <button className='md:hidden focus:outline-none' onClick={toggleMenu}>
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>
            <div className={`md:hidden absolute z-40 top-16 right-0 w-full bg-white text-center pt-4 pb-8 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <ul className='text-black'>
                    <li className='block p-2'>Home</li>
                    <li className='block p-2'>Services</li>
                    <li className='block p-2'>Contact Us</li>
                    <li className='block p-2'>About Us</li>
                </ul>
            </div>
            {/* Desktop View */}
            {/* <div className='hidden md:flex items-center gap-4'> */}
                <ul className='hidden md:flex font-semibold gap-4'>
                    <li className='font-sans text-[#227c85]'>Home</li> {/* Current page text-green */}
                    <li className='font-sans'>Services</li>
                    <li className='font-sans'>About Us</li>
                    <li className='font-sans'>Blogs</li>
                </ul>
                <div className='hidden md:flex ml-4'>
                    <button className='px-4 py-1 font-sans rounded-3xl bg-transparent border border-black'>Contact Us</button>
                </div>
            {/* </div> */}
        </div>
        </nav>
    );
};
