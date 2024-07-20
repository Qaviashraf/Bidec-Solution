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
    <div className="slider-container">
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
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  )
}
