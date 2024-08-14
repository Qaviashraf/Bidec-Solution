import React, { useEffect } from 'react';
import arrow from '../assets/footerAssets/arrow.svg';
import AboutBg from '../assets/AboutUs/AboutBg.svg';
import Bg2 from '../assets/AboutUs/AboutBg2.svg'
import bgShade from '../assets/HeroSection/Ellipse 18.svg'
import AboutBgHover from '../assets/AboutUs/AboutBgHover.svg'

import '../App.css'


import AOS from "aos";
import 'aos/dist/aos.css';


const AboutCard = () => {

  
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });


  return (
    <div className='mt-20  max-w-screen'>

      <img className='absolute left-0' src={bgShade} alt="" />
      <div className='flex flex-wrap justify-around items-center my-10'>
        <h1 className='text-5xl my-2'
          data-aos="fade-right"
        >About Us</h1>
        <p className='w-80 md:w-96 my-2 text-center text-sm md:text-start font-sans font-semibold'
          data-aos="fade-left"
        >
          We are more than just a Software House,we specialize in delivering cutting-edge software solutions tailored to meet the unique needs of our clients. Our innovative approach ensures that we stay ahead in the ever-evolving tech landscape.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 my-4'>
        <div
          data-aos="fade-up"
          className="relative rotate-45 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64 AboutBg1 group"
          >

          <div className="absolute -top-3 -right-3 bg-white p-3 rounded-full">
            <div className="bg-[#227c85] group-hover:bg-[#0c1a16]  duration-300 cursor-pointer rounded-full">
              <img className='w-16' src={arrow} alt="" />
            </div>
          </div>
          <div className="text-md fontbold mb-2">Innovative <br /> Solutions</div>
          <p className="text-sm">
          At BiDEC Solutions, we specialize in delivering cutting-edge software solutions tailored to meet the unique needs of our clients.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="relative -rotate-45 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64 AboutBg group">
          <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full">
            <div className="bg-[#227c85] group-hover:bg-[#0c1a16]  duration-300 rounded-full cursor-pointer">
              <img className='w-16' src={arrow} alt="" />
            </div>
          </div>
          <div className="text-md fontbold mb-2">Client Approach</div>
          <p className="text-sm">
          With a team of highly skilled developers, designers, and project managers, BiDEC Solutions brings together years of experience and expertise.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="relative rotate-45 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64 AboutBg1 group"
          >
          <div
            className="absolute -top-3 -right-3 bg-white p-3 rounded-full cursor-pointer">
            <div className="bg-[#227c85] group-hover:bg-[#0c1a16]  duration-300 rounded-full">
              <img className='w-16' src={arrow} alt="" />
            </div>
          </div>
          <div className="text-md fontbold mb-2">End-to-End <br /> Services</div>
          <p className="text-sm">
          From initial concept to deployment and support, BiDEC Solutions offers a full range of services. 
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="relative -rotate-45 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64 AboutBg group">
          <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full cursor-pointer">
            <div className="bg-[#227c85] group-hover:bg-[#0c1a16]  duration-300 rounded-full">
              <img className='w-16' src={arrow} alt="" />
            </div>
          </div>
          <div className="text-md fontbold mb-2">Commitment to Excellence</div>
          <p className="text-sm">
          We are passionate about technology and take pride in the quality of our work.
          </p>
        </div>
      </div>

      <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
    </div>
  );
};

export default AboutCard;