import React from 'react';
import '../App.css';  // Ensure this file contains the custom CSS
import Star from '../assets/Star.svg';
import { Link } from 'react-router-dom';

export const LogoSlider = () => {
  const Sliders = [
    {
      title: 'Web Development',
      link: '/service/web-design-development'
    },
    {
      title: 'Graphic Designing',
      link: '/service/branding'
    },
    {
      title: 'Digital Marketing',
      link: '/service/web-design-development'
    },
    {
      title: 'Branding',
      link: '/service/branding'
    },
    {
      title: 'Copywriting',
      link: '/service/web-design-development'
    },
    {
      title: 'Web Development',
      link: '/service/web-design-development'
    },
    {
      title: 'Graphic Designing',
      link: '/service/branding'
    },
    {
      title: 'Digital Marketing',
      link: '/service/web-design-development'
    },
    {
      title: 'Branding',
      link: '/service/branding'
    },
    {
      title: 'Copywriting',
      link: '/service/web-design-development'
    },
    {
      title: 'Web Development',
      link: '/service/web-design-development'
    },
    {
      title: 'Graphic Designing',
      link: '/service/branding'
    },
    {
      title: 'Digital Marketing',
      link: '/service/web-design-development'
    },
    {
      title: 'Branding',
      link: '/service/branding'
    },
    {
      title: 'Copywriting',
      link: '/service/web-design-development'
    },
    
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap relative py-1 border border-tb-black group">
      <div className="flex animate-slide">
        {Sliders.concat(Sliders).map((Slide, index) => (
          <div key={index} className="flex items-center mx-4">
            <Link className="text-3xl font-sans hover:bg-[#165056] hover:text-white p-2 px-3 duration-300 rounded-lg "
            to={Slide.link}>
              {Slide.title}
            </Link>
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
