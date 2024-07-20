import React from 'react';
import Star from '../assets/Star.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const LogoSlider = () => {
  return (
    <div className='text-center items-center border border-t-black border-b-black'>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 500 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { 
            slidesPerView: 2,
          },
          480: { 
            slidesPerView: 2,
          },
          768: { 
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className='flex justify-center items-center'>
          <h1 className='mt-4 '>UI & UX</h1>
        </SwiperSlide>
        <SwiperSlide className='hidden md:flex justify-center items-center'>
          <img src={Star} alt="Star" className='w-fit' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <h1 className='mt-4 '>Web Development</h1>
        </SwiperSlide>
        <SwiperSlide className='hidden md:flex justify-center items-center'>
          <img src={Star} alt="Star" className='w-fit' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <h1 className='mt-4 '>Digital Marketing</h1>
        </SwiperSlide>
        <SwiperSlide className='hidden md:flex justify-center items-center'>
          <img src={Star} alt="Star" className='w-fit' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <h1 className='mt-4 '>UI & UX</h1>
        </SwiperSlide>
        <SwiperSlide className='hidden md:flex justify-center items-center'>
          <img src={Star} alt="Star" className='w-fit' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <h1 className='mt-4 '>Web Development</h1>
        </SwiperSlide>
        <SwiperSlide className='hidden md:flex justify-center items-center'>
          <img src={Star} alt="Star" className='w-fit' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
