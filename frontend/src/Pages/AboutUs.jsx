import React from 'react';
import ClientSays from '../components/ClientSays';
import Question from '../components/Question';
import { TeamSection } from '../components/TeamSection';
import bgShade from '../assets/HeroSection/Ellipse 18.svg'

export const AboutUs = () => {
    return (
        <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">

            <img className='absolute left-0' src={bgShade} alt="" />
            <div className='flex flex-wrap justify-around items-center w-full'>
                <div className='my-12 text-center md:text-start lg:my-16 lg:pt-20 w-full md:w-96 '>
                    <div
                        data-aos="fade-right" className="flex flex-col justify-start px-3 text-center md:text-start gap-5 items-center">
                        <h1 className='md:text-7xl text-4xl'>About Us</h1>
                        <p className='font-sans'>Welcome to Bidec Solutions, where innovation meets excellence. We are a dedicated team of tech enthusiasts, software engineers, and creative problem-solvers committed to transforming your ideas into powerful digital solutions.</p>
                    </div>
                </div>
                <img
                    data-aos="fade-left" src="https://media.istockphoto.com/id/1397610345/photo/group-of-businesspeople-having-a-meeting-at-their-modern-company.webp?b=1&s=170667a&w=0&k=20&c=GtiXgXe9xgaDruRghz-CM1stL-QHWByAH4JVEPcEHPQ=" className='rounded-full w-96 px-3 lg:w-1/3 lg:h-1/3 ' alt="" />
            </div>

            <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
            <div className='flex flex-col md:flex-row justify-around items-center text-center px-4 py-12 gap-4 max-w-screen'>
                <h1 className='md:text-start text-xl lg:text-4xl w-full lg:w-[500px]'
                    data-aos="fade-up-right">
                    Our Mission Statement
                </h1>
                <p className='md:text-start font-sans w-full lg:w-[500px]'
                    data-aos="fade-up-left">Our mission is to empower businesses of all sizes by providing top-notch software development services that drive growth and success.</p>
            </div>

            <iframe
                className="w-full h-72 my-8"
                // data-aos="fade-up"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.657654990843!2d67.05490477607442!3d24.8413785460196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc4330000d7%3A0x392be2a6cc28669b!2sBidec%20Solution&#39;s%20(pvt)%20Ltd!5e0!3m2!1sen!2s!4v1721731821602!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

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
