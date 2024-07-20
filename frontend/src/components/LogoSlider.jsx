import React from 'react'
import Slider from "react-slick";
import Star from '../assets/Star.svg'

export const LogoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="slider-container max-w-screen">
    <Slider {...settings}>
      <div>
        <h3>UI / UX</h3>
      </div>
      <div>
        <img src={Star} alt="|" />
      </div>
      <div>
      <h3>Web Development</h3>
      </div>
      <div>
      <img src={Star} alt="|" />
      </div>
      <div>
        <h3>Digital Marketing</h3>
      </div>
      <div>
      <img src={Star} alt="|" />
      </div>
    </Slider>
  </div>
  )
}
