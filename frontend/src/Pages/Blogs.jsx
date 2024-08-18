import React, { useEffect } from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import bgShade from '../assets/HeroSection/Ellipse 18.svg';
import { Link } from 'react-router-dom';
import { blogsData } from '../blogsData'; // Import the blogsData
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: '1000', delay: '0' });
  }, []);
  
  return (
    <div className='md:py-24 mb-36 py-12 justify-center max-w-screen relative'>
            <img className='rotate-180 right-0 top-10 absolute hidden md:block' src={bgShade} alt="Background shade" />
      <img className='absolute left-0 md:block hidden' src={bgShade} alt="Background shade" />
      <div className='flex flex-wrap justify-around items-center my-2 px-4'>
        <h1
          data-aos="fade-right"
          className='text-3xl md:text-5xl my-8 md:my-2 text-center'>Latest Blogs</h1>
        <div className="flex justify-between hidden md:block">
          <h1 className='text-4xl md:text-9xl' data-aos="fade-down-left"><FiArrowDownLeft /></h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xlgrid-cols-4 gap-x-6 xl:gap-x-8">
            {blogsData.map((blog) => (
              <Link to={`/blogs/${blog.title}`} key={blog.id} className="group relative z-10">
                <div className='w-full'>
                  <img src={blog.imageSrc} alt={blog.imageAlt} className='w-full rounded-xl group-hover:opacity-75'  data-aos="fade-up"/>
                  <div className='my-2 gap-1' data-aos="fade-right">
                    <h1 className='text-2xl'>{blog.title}</h1>
                    <p className='font-sans text-md'>{blog.description}</p>
                    <p className='font-sans text-sm'>{blog.price}</p>
                  </div>
                </div> 
              </Link>
            ))}
          </div>    
        </div>
      </div>
      <img className='rotate-180 right-0 absolute' src={bgShade} alt="Background shade" />
    </div>
  );
};
