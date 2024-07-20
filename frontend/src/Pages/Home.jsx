import React from 'react'
import AboutCard from '../components/AboutCard'
import HeroSection from '../components/HeroSection'
import { LogoSlider } from '../components/LogoSlider'
import Services from '../components/Services'

export const Home = () => {
  return (
    <div className='max-w-screen '>
      <HeroSection />
      {/* <LogoSlider /> */}
      <AboutCard />
      <Services />
    </div>
  )
}
