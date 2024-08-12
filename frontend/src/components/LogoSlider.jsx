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
      title: 'Custom Software',
      link: '/service/custom-software-development'
    },
    {
      title: 'UI / UX Design',
      link: '/service/ui-ux-design'
    },
    {
      title: 'Graphic Design',
      link: '/service/graphic-designing'
    },
    {
      title: 'App Development',
      link: '/service/mobile-app-development'
    },
    {
      title: 'E-commerce Solution',
      link: '/service/ecommerce-solutions'
    },
    {
      title: 'Digital Marketing',
      link: '/service/digital-marketing'
    },
    {
      title: 'Web Development',
      link: '/service/web-design-development'
    },
    {
      title: 'Custom Software',
      link: '/service/custom-software-development'
    },
    {
      title: 'UI / UX Design',
      link: '/service/ui-ux-design'
    },
    {
      title: 'Graphic Design',
      link: '/service/graphic-designing'
    },
    {
      title: 'App Development',
      link: '/service/mobile-app-development'
    },
    {
      title: 'E-commerce Solution',
      link: '/service/ecommerce-solutions'
    },
    {
      title: 'Digital Marketing',
      link: '/service/digital-marketing'
    },
    
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap relative py-1 border border-tb-black group">
      <div className="flex animate-slide">
        {Sliders.concat(Sliders).map((Slide, index) => (
          <div key={index} className="flex items-center mx-4">
            <Link className="text-2xl font-sans hover:bg-[#165056] hover:text-white p-2 px-3 duration-300 rounded-lg "
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
