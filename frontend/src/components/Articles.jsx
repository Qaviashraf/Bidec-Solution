import React from 'react';
import bgShade from '../assets/HeroSection/Ellipse 18.svg';
import { Link } from 'react-router-dom';
import { blogsData } from '../blogsData';

export const Articles = () => {
   // Slice the first 3 articles from the blogsData array
   const topThreeArticles = blogsData.slice(0, 3);

   return (
      <div className='my-24 max-w-screen relative'>
         
         <img className='absolute left-0' src={bgShade} alt="Background shade" />
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
            className='flex flex-wrap justify-center items-center my-10 gap-24'>
            {topThreeArticles.map(article => (
               <Link to={`/blogs/${article.title}`} key={article.id} className='w-72'>
                  <img src={article.imageSrc} alt={article.imageAlt} className='w-72 rounded-xl' data-aos="fade-up"/>
                  <div className='my-2 gap-1'  data-aos="fade-right">
                     <h1 className='text-xl'>{article.title}</h1>
                     <p className='font-sans text-sm'>{article.description}</p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};
