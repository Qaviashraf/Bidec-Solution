import { useState, useEffect  } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import Footer from './components/Footer'
import { NavBar } from './components/NavBar'

import './App.css'
import { ServicePage } from './Pages/ServicePage'

import AOS from "aos";
import 'aos/dist/aos.css';
import ContactUs from './Pages/ContactUs'

function App() {

  
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });


  return (
    <div className='max-w-screen overflow-hidden'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service/:id' element={<ServicePage />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
