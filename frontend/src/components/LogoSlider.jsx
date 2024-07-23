import React from 'react'
import '../App.css'
import Star from '../assets/Star.svg';


export const LogoSlider = () => {
 const headings = [
        'Web Development',
        'Graphic Designing',
        'Digital Marketing',
        'Branding',
        'Copywriting',
        'Web Development',
        'Graphic Designing',
        'Digital Marketing',
        'Branding',
        'Copywriting',
        'Web Development',
        'Graphic Designing',
        'Digital Marketing',
        'Branding',
        'Copywriting',
      ];
    
      return (
        <div className="overflow-hidden whitespace-nowrap relative py-1 border border-tb-black">
        <div className="flex animate-slide">
          {headings.concat(headings).map((heading, index) => (
            <div key={index} className="flex items-center mx-4">
              <h1 className="text-2xl font-sans ">
                {heading}
              </h1>
              <img src={Star} alt="star" className="mx-4 w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  





















// import React from 'react';
// import Star from '../assets/Star.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// export const LogoSlider = () => {
//   return (
//     <div className='max-w-screen text-center items-center border border-t-black border-b-black'>
//       <Swiper
//         slidesPerView={8}
//         spaceBetween={0}
//         loop={true}
//         autoplay={{ delay: 500 }}
//         modules={[Navigation, Autoplay]}
//         className="mySwiper"
//         breakpoints={{
//           320: { 
//             slidesPerView: 2,
//           },
//           480: { 
//             slidesPerView: 2,
//           },
//           768: { 
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//           1280: {
//             slidesPerView: 5,
//           },
//         }}
//       >
//         <SwiperSlide className='flex justify-center items-center'>
//           <h1 className='mt-4 '>UI & UX</h1>
//         </SwiperSlide>
//         <SwiperSlide className='hidden md:flex justify-center items-center'>
//           <img src={Star} alt="Star" className='w-fit' />
//         </SwiperSlide>
//         <SwiperSlide className='flex justify-center items-center'>
//           <h1 className='mt-4 '>Web Development</h1>
//         </SwiperSlide>
//         <SwiperSlide className='hidden md:flex justify-center items-center'>
//           <img src={Star} alt="Star" className='w-fit' />
//         </SwiperSlide>
//         <SwiperSlide className='flex justify-center items-center'>
//           <h1 className='mt-4 '>Digital Marketing</h1>
//         </SwiperSlide>
//         <SwiperSlide className='hidden md:flex justify-center items-center'>
//           <img src={Star} alt="Star" className='w-fit' />
//         </SwiperSlide>
//         <SwiperSlide className='flex justify-center items-center'>
//           <h1 className='mt-4 '>UI & UX</h1>
//         </SwiperSlide>
//         <SwiperSlide className='hidden md:flex justify-center items-center'>
//           <img src={Star} alt="Star" className='w-fit' />
//         </SwiperSlide>
//         <SwiperSlide className='flex justify-center items-center'>
//           <h1 className='mt-4 '>Web Development</h1>
//         </SwiperSlide>
//         <SwiperSlide className='hidden md:flex justify-center items-center'>
//           <img src={Star} alt="Star" className='w-fit' />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };
