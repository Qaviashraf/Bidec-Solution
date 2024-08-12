import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Footer from './components/Footer';
import { NavBar } from './components/NavBar';

import './App.css';

// Pages
import { Home } from './Pages/Home';
import { ServicePage } from './Pages/ServicePage';
import ContactUs from './Pages/ContactUs';
import { AboutUs } from './Pages/AboutUs';
import { Blogs } from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import NotFound from './Pages/NotFound'; 

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className='max-w-screen overflow-hidden'>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service/:id' element={<ServicePage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
