import React from 'react'
import AboutCard from '../components/AboutCard'
import HeroSection from '../components/HeroSection'

export const Home = () => {
  return (
    <div className='max-w-screen z-30'>
      <HeroSection />
      <AboutCard />
    </div>
  )
}
