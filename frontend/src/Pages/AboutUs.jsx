import React, { useEffect } from 'react';
import ClientSays from '../components/ClientSays';
import Question from '../components/Question';
import { TeamSection } from '../components/TeamSection';
import bgShade from '../assets/HeroSection/Ellipse 18.svg'

import AOS from "aos";
import 'aos/dist/aos.css';

export const AboutUs = () => {


    useEffect(() => {
        AOS.init({ duration: "1000", delay: "0" });
    });

    return (
        <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">

            <img className='absolute left-0' src={bgShade} alt="" />
            <div className='flex flex-wrap justify-around items-center w-full'>
                <div className='my-12 text-center md:text-start lg:my-16 lg:pt-20 w-full md:w-96 '>
                    <div
                        data-aos="fade-right" className="flex flex-col justify-start px-3 text-center md:text-start gap-5 items-center">
                        <h1 className='md:text-7xl text-4xl'>About Us</h1>
                        <span>
                            <p className='text-lg'>Who We Are</p>
                            <p className='font-sans'>Welcome to Bidec, a premier UK-based software house dedicated to transforming ideas into innovative digital solutions. Founded with a vision to empower businesses through technology, Bidec has grown into a trusted partner for companies across various industries, providing cutting-edge software, web, and mobile solutions that drive success.
                            </p>
                        </span>
                    </div>
                </div>
                <img
                    data-aos="fade-left" src="https://media.istockphoto.com/id/1397610345/photo/group-of-businesspeople-having-a-meeting-at-their-modern-company.webp?b=1&s=170667a&w=0&k=20&c=GtiXgXe9xgaDruRghz-CM1stL-QHWByAH4JVEPcEHPQ=" className='rounded-full w-96 px-3 lg:w-1/3 lg:h-1/3 ' alt="" />
            </div>

            <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
            <div className='flex flex-col md:flex-row justify-around items-center text-center px-4 gap-4 max-w-screen'>
                <h1 className='md:text-start text-xl lg:text-4xl w-full lg:w-[500px]'
                    data-aos="fade-up-right">
                    Our Mission Statement
                </h1>
                <p className='md:text-start font-sans w-full lg:w-[500px]'
                    data-aos="fade-up-left">Our mission is to deliver exceptional software solutions that help businesses thrive in the digital age. We are committed to excellence, innovation, and customer satisfaction, ensuring that every project we undertake meets the highest standards of quality and performance.
                </p>
            </div>

            <iframe 
            className="w-full h-72 my-8"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9960.532469302214!2d-0.5258073204633038!3d51.38223144081252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s24%20Sandgates%2C%20Guilford%20Road%20Chertsey%20KT16%209LT%20UK!5e0!3m2!1sen!2s!4v1723630721005!5m2!1sen!2s" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <img className='absolute left-0' src={bgShade} alt="" />
            <TeamSection />

            <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
            <ClientSays />

            {/* <img className='absolute left-0' src={bgShade} alt="" /> */}
            <Question />
        </div>
    );
};

export default AboutUs;
