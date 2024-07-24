import React from 'react';
import arrow from '../assets/footerAssets/arrow.svg';
import AboutBg from '../assets/AboutUs/AboutBg.svg';
import Bg2 from '../assets/AboutUs/AboutBg2.svg'
import bgShade from '../assets/HeroSection/Ellipse 18.svg'
import AboutBgHover from '../assets/AboutUs/AboutBgHover.svg'

import '../App.css'

const AboutCard = () => {
  return (
    <div className='mt-20  max-w-screen'>

      <img className='absolute left-0' src={bgShade} alt="" />
      <div className='flex flex-wrap justify-around items-center my-10'>
        <h1 className='text-5xl my-2'
          data-aos="fade-right"
        >About Us</h1>
        <p className='w-80 md:w-96 my-2 text-center md:text-start font-sans font-semibold'
          data-aos="fade-left"
        >
          We are more than just a digital agency; we are architects of online experiences, creators of digital narratives, and partners in your journey towards digital excellence.
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
          <div className="text-5xl font-bold mb-2">18+</div>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
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
          <div className="text-5xl font-bold mb-2">18+</div>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
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
          <div className="text-5xl font-bold mb-2">18+</div>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
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
          <div className="text-5xl font-bold mb-2">18+</div>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
    </div>
  );
};

export default AboutCard;