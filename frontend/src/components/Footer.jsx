import React from 'react';
import footerBg from '../assets/footerAssets/footerBlurImg.svg';
import logo from '../assets/footerAssets/Logo.svg';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HiOfficeBuilding } from "react-icons/hi";

function Footer() {
    return (
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className="container mx-auto text-center flex flex-col items-center justify-center relative ">
                {/* <h1 className="text-white text-center text-3xl md:text-5xl w-3/4 md:p-10 p-1 mb-8">
                    Let's discuss with us about your project
                </h1>
                <form className="flex justify-center text-white font-sans mb-10 items-center">
                    <input className="border-b bg-transparent focus:outline-none py-2 md:w-72 w-full mr-2 text-lg" type="email" placeholder="bidec000@gmail.com" />
                    <button className="rounded-full hover:bg-[#165056] duration-200 hover:border-[#165056] border p-2"><img src={arrow} alt="" /></button>
                </form> */}
                <div className="w-full">
                    <div className="container flex items-center justify mx-auto">
                        <div className="flex flex-col lg:flex-row gap-8 text-white p-8 pb-12 border-b justify-around items-center lg:items-baseline">
                            <div className="flex flex-col md:items-baseline items-center justify-center p-8  w-full md:w-1/2 ">
                                <img src={logo} alt="Logo" className="h-12" />
                                <p className='font-sans py-3 text-sm text-start'>Welcome to Bidec, a premier UK-based software house dedicated to transforming ideas into innovative digital solutions. Founded with a vision to empower businesses through technology, Bidec has grown into a trusted partner for companies across various industries, providing cutting-edge software, web, and mobile solutions that drive success.</p>
                            </div>
                            <div className="text-start flex flex-col md:items-baseline items-center justify-center text-center  md:w-1/4 w-full">
                                <h1 className="text-xl py-4">Quick Links</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/">HOME</Link></li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/aboutus">ABOUT US</Link></li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/blogs">BLOGS</Link></li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/contactus">CONTACT US</Link></li>
                                </ul>
                            </div>
                            <div className="text-start flex flex-col md:items-baseline items-center justify-center text-center  md:w-1/4 w-full">
                                <h1 className="text-xl py-4">Services</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/service/web-design-development">WEB DEVELOPMENT</Link></li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/service/branding">GRAPHIC DESIGNING</Link></li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2"><Link className="font-sans" to="/service/web-design-development">DIGITAL MARKETING</Link></li>
                                </ul>
                            </div>
                            <div className="text-start flex flex-col md:items-baseline items-center justify-center  md:w-1/4 w-full">
                                <h1 className="text-xl py-4">Follow Us</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2">FACEBOOK</li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2">TWITTER</li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2">INSTAGRAM</li>
                                    <li className="font-sans hover:text-[#227c85] text-sm rounded-xl hover:font-bold duration-300 cursor-pointer p-2">LINKEDIN</li>
                                </ul>
                            </div>
                            <div className="text-start flex flex-col md:items-baseline items-center justify-center md:w-1/2 w-full">
                                <h1 className="text-xl text-center py-4">Get in Touch</h1>
                                <ul className="">
                                    <li className="font-sans font-light text-sm rounded-xl duration-300 cursor-pointer p-2">Ready to turn your ideas into reality ? Contact Bidec today to discuss your project and see how we can help you achieve your business goals.
                                    </li>
                                    <li className="font-sans font-light text-sm rounded-xl duration-300 cursor-pointer p-2 pl-6 relative"><MdEmail className='absolute hover:text-[#227c85] duration-300 left-0 top-3 text-lg ' /> marketing@bidecsol.com </li>
                                    <li className="font-sans font-light text-sm rounded-xl duration-300 cursor-pointer p-2 pl-6 relative"><FaPhone className='absolute hover:text-[#227c85] duration-300 left-0 top-3 text-lg ' /> +971-52-104-7673</li>
                                    <li className="font-sans font-light text-sm rounded-xl duration-300 cursor-pointer p-2 pl-6 relative"><HiOfficeBuilding className='absolute hover:text-[#227c85] duration-300 left-0 top-3 text-lg ' /> Bidec Software House, 24 Sandgates, Guilford Road Chertsey KT16 9LT UK</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row p-4 justify-center items-center">
                        {/* <ul className='flex flex-row gap-4'>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={facebookIcon} alt="" /></li>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={linkedInIcon} alt="" /></li>
                            <li className='rounded-full p-2 w-8 h-8 border hover:bg-[#165056] duration-200 hover:border-[#165056]'><img src={instaIcon} alt="" /></li>
                        </ul> */}
                        <p className='text-gray-400 font-sans '>© 2024 <span>Bidec</span> All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
