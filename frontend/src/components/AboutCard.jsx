import React from 'react';
import arrow from '../assets/footerAssets/arrow.svg';
import AboutBg from '../assets/AboutUs/AboutBg.svg';
import Bg2 from '../assets/AboutUs/AboutBg2.svg'

const AboutCard = () => {
  return (
    <div className='mt-20  max-w-screen'>
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
          className="relative text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64"
          style={{
            backgroundImage: `url(${AboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute -top-3 -right-3 bg-white p-3 rounded-full">
            <div className="bg-[#227c85] hover:bg-[#165056] duration-300 cursor-pointer rounded-full">
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
        className="relative text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64" 
        style={{
            backgroundImage: `url(${Bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full">
            <div className="bg-[#227c85] hover:bg-[#165056] duration-300 rounded-full cursor-pointer">
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
          className="relative text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64"
          style={{
            backgroundImage: `url(${AboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
           className="absolute -top-3 -right-3 bg-white p-3 rounded-full cursor-pointer">
            <div className="bg-[#227c85] hover:bg-[#165056] duration-300 rounded-full">
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
        className="relative text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64" 
        style={{
            backgroundImage: `url(${Bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full cursor-pointer">
            <div className="bg-[#227c85] hover:bg-[#165056] duration-300 rounded-full">
              <img className='w-16' src={arrow} alt="" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2">18+</div>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;