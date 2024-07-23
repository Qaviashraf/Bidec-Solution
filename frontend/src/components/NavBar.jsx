import React, { useState } from 'react';
import logo from "../assets/Bidec-logo.svg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleToggleServices = () => {
        setShowServices(prevShowServices => !prevShowServices);
    };

    return (
        <nav className='fixed top-0 w-full z-50 max-w-screen'
            data-aos="fade-down">
            <div className='flex justify-between items-center max-w-screen min-w-screen px-10 py-4 bg-white bg-trasparent bg-opacity-0 backdrop-filter backdrop-blur-lg '>
                <div>
                    <img src={logo} alt="Logo" className='w-20 md:w-28' />
                </div>
                {/* Mobile View */}
                <button className='md:hidden focus:outline-none' onClick={toggleMenu}>
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
                <div className={`md:hidden absolute z-40 top-16 right-0 w-full bg-white text-center pt-4 pb-8 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <ul className='text-black'>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>HOME</li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>SERVICES</li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>ABOUT US</li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>BLOGS</li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>CONTACT US</li>
                    </ul>
                </div>
                {/* Desktop View */}
                {/* <div className='hidden md:flex items-center gap-4'> */}
                <ul className='hidden md:flex font-semibold gap-8 '>
                    <Link to='./' className='font-sans text-[#227c85] text-lg duration-300 cursor-pointer'>HOME</Link>
                    <div className='relative'>
                        <Link to='./' className='flex font-sans hover:text-[#227c85] text-lg duration-300 cursor-pointer' onClick={handleToggleServices}>SERVICES
                            {showServices ? (
                                <RiArrowDropUpLine className='mb-1' size={"2rem"} />
                            ) : (
                                <RiArrowDropDownLine className='mb-1' size={"2rem"} />
                            )}
                        </Link>
                        {showServices && (
                            <div className='absolute z-10 left-0 top-full flex flex-col mt-2 w-48 text-center bg-[#eff1f3] border border-gray-300 shadow-lg rounded-2xl'>
                                <Link to='./service/web-design-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-t-2xl'>Web Development</Link>
                                <Link to='./service/web-design-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 '>Graphic Designing</Link>
                                <Link to='./service/branding' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl'>Digital Marketing</Link>
                            </div>
                        )}
                    </div>
                    <Link to='./' className='font-sans hover:text-[#227c85] text-lg duration-300 cursor-pointer'>ABOUT US</Link>
                    <Link to='./' className='font-sans hover:text-[#227c85] text-lg duration-300 cursor-pointer'>BLOGS</Link>
                </ul>
                <div className='hidden md:flex ml-4'>
                    <Link to='./contactus' className='px-4 py-2 font-sans hover:bg-[#227c85] hover:text-white hover:border-white rounded-3xl bg-transparent border-2 border-[#227c85] text-[#227c85] duration-300'>CONTACT US</Link>
                </div>
                {/* </div> */}
            </div>
        </nav>
    );
};
