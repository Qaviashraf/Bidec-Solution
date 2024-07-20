import React, { useEffect }  from 'react'
import AboutCard from '../components/AboutCard'
import HeroSection from '../components/HeroSection'
import { LogoSlider } from '../components/LogoSlider'
import Services from '../components/Services'
import { Articles } from '../components/Articles'
import AOS from "aos";
import 'aos/dist/aos.css';


export const Home = () => {
  
    useEffect(() => {
      AOS.init({ duration: "1000", delay: "0"});
    });
  

  return (
    <div className='max-w-screen '>
      <HeroSection />
      <LogoSlider />
      <AboutCard />
      <Services />
      <Articles />
    </div>
  )
}
