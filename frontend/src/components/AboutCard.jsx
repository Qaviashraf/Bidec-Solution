import React from 'react';
import arrow from '../assets/footerAssets/arrow.svg'

const AboutCard = () => {
  return (
    <div className=''>
    <div className='max-w-screen flex flex-wrap justify-around items-center my-10'>
     <h1 className='text-5xl my-2'>About Us</h1>
     <p className='w-96 my-2 text-center md:text-start font-sans font-semibold'>we are more than just a digital agency; we are architects of online experiences, creators of digital narratives, and partners in your journey towards digital excellence.</p>
    </div>
    <div className='flex flex-wrap justify-center gap-4 my-4'>
    <div className="relative bg-gray-900 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64">
       
        <div className="absolute -top-3 -right-3 bg-white p-3 rounded-full">
      <div className=" bg-teal-500 rounded-full">
        <img className='w-12' src={arrow} alt="" />
      </div>
      </div>
      <div className="text-5xl font-bold mb-2">18+</div>
      <p className="text-sm">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
    
    <div className="relative bg-gray-900 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64">
        
        <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full">
      <div className=" bg-teal-500 rounded-full">
        <img className='w-12' src={arrow} alt="" />
      </div>
      </div>
      <div className="text-5xl font-bold mb-2">18+</div>
      <p className="text-sm">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>

    <div className="relative bg-gray-900 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-tr-[8vh] w-64">
               <div className="absolute -top-3 -right-3 bg-white p-3 rounded-full">
      <div className=" bg-teal-500 rounded-full">
        <img className='w-12' src={arrow} alt="" />
      </div>
      </div>
      <div className="text-5xl font-bold mb-2">18+</div>
      <p className="text-sm">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
    
    <div className="relative bg-gray-900 text-white p-6 py-12 text-center items-center h-64 rounded-2xl rounded-br-[8vh] w-64">
        
        <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full">
      <div className=" bg-teal-500 rounded-full">
        <img  className='w-12' src={arrow} alt="" />
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
