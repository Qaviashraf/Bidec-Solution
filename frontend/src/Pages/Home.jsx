import React, {useEffect} from 'react'
import AboutCard from '../components/AboutCard'
import HeroSection from '../components/HeroSection'
import { LogoSlider } from '../components/LogoSlider'
import Services from '../components/Services'
import { Articles } from '../components/Articles'
import ClientSays from '../components/ClientSays'
import Question from '../components/Question'
import Projects from '../components/Projects'


export const Home = () => {


  return (
    <div className='max-w-screen '>
      <HeroSection />
      <LogoSlider />
      <AboutCard />
      <Services />
      <Projects />
      <ClientSays />
      <Question />
      <Articles />
    </div>
  )
}
