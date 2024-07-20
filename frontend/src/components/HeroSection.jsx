import React from 'react';
import arrow from '../assets/footerAssets/arrow.svg';
import HeroBg from '../assets/HeroSection/HeroBg.svg';
import HeroBg2 from '../assets/HeroSection/HeroBg2.svg';
import Video from '../assets/HeroSection/Group 31.svg'
// import { FaPlay } from 'react-icons/fa';  // Import play icon

const HeroSection = () => {
  const handlePlay = (e) => {
    e.preventDefault(); // Prevent the default action of clicking a link
    const videoElement = e.currentTarget.querySelector('video');
    videoElement.requestFullscreen(); // Request fullscreen
    videoElement.play(); // Play the video
  };

  return (
    <section 
      className="max-w-screen py-20 flex justify-center"
      
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: '1400px', 
        backgroundPosition: '50% 15%',  
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', 
        height: '100vh'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-around w-screen">
        <div className="lg:w-1/2">
          <h1
           data-aos="fade-right" 
          className="text-4xl md:text-7xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            More Than Just <br /> 
            <span className="inline-flex items-center">
              <span className="mx-2">A</span>
              <img src={arrow} alt="Arrow Icon" className="bg-[#227c85] hover:bg-teal-500 rounded-full w-10 h-10" />
              <span className="mx-2">Creative</span>
            </span>
            <br />Agency
          </h1>
          <div className='flex flex-wrap gap-2'
           data-aos="fade-up-left" 
           >
            <button className="bg-[#227c85] py-1 px-4 mr-2 text-white rounded-full text-xl font-semibold font-sans hover:bg-teal-500 transition duration-300 ease-in-out">
              View Projects
            </button>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/40" alt="Client 1" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
              <img src="https://via.placeholder.com/40" alt="Client 2" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
              <img src="https://via.placeholder.com/40" alt="Client 3" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
              <span className="ml-4 text-gray-700 font-sans text-xl font-medium">
                100k+ Awesome <br /> Clients
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 mx-2 lg:mt-0 relative"
           data-aos="fade-left" 
           >
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed md:w-96 ">
            The Art Of Visual Communication, Creatively Impacting The World Around Us - One Good Design At A Time.
          </p>
          <div className="mt-8 relative cursor-pointer"  onClick={handlePlay}>
            <img src={Video} alt="" />
            <video src="https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4" className="absolute w-0" />
                      </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
