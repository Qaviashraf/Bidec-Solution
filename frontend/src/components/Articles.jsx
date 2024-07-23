import React from 'react'
import Article1 from '../assets/Articles/article1.svg'
import bgShade from '../assets/HeroSection/Ellipse 18.svg'
import { Link } from 'react-router-dom'

export const Articles = () => {
   return (
      <div className='my-24 max-w-screen '>
         
         <img className='absolute left-0' src={bgShade} alt="" />
         <div className='flex flex-wrap justify-around items-center my-10'>
            <h1
               data-aos="fade-right"
               className='md:text-5xl text-3xl my-2'>Latest articles</h1>
            <Link
            to='/blogs'
               data-aos="fade-left"
               className='hidden md:block py-2 md:mx-24 px-6 font-semibold font-sans bg-[#227c85] hover:bg-[#165056] duration-300 rounded-3xl text-white'>View Our Blogs</Link>
         </div>
         <div
            data-aos="fade-up"
            className='flex flex-wrap justify-center items-center my-10 gap-24'>
            <div className='w-72'>
               <img src={Article1} alt="" className='w-72' />
               <div className='my-2 gap-1'>
                  <h1 className='text-xl'>The Evolution of UI/UX</h1>
                  <p className='font-sans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
               </div>
            </div>

            <div className='w-72'>
               <img src={Article1} alt="" className='w-72' />
               <div className='my-2 gap-1'>
                  <h1 className='text-xl'>The Evolution of UI/UX</h1>
                  <p className='font-sans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
               </div>
            </div>

            <div className='w-72'>
               <img src={Article1} alt="" className='w-72' />
               <div className='my-2 gap-1'>
                  <h1 className='text-xl'>The Evolution of UI/UX</h1>
                  <p className='font-sans text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
               </div>
            </div>
         </div>
      </div>
   )
}
