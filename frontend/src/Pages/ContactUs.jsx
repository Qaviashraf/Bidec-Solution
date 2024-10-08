import React, { useRef , useEffect } from 'react'
import { FiArrowDownLeft } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";

import AOS from "aos";
import 'aos/dist/aos.css';


const ContactUs = () => {
  const data = [
    { title: 'A new website' },
    { title: 'Branding' },
    { title: 'Motion graphics' },
    { title: 'E-Commerce' },
    { title: 'Development' },
    { title: 'On-going support' },
    { title: 'App from scratch' }
  ];

  const formDataRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const form = formDataRef.current;
    const formData = {
      firstName: form['first-name'].value,
      lastName: form['last-name'].value,
      email: form['email'].value,
      budget: form['budget'].value,
      message: form['message'].value,
      newsletter: form['newsletter'].checked,
      dataConsent: form['data-consent'].checked,
    };
    console.log(formData);
  };

  


  return (
    <div className='py-12 text-black px-10 md:px-20 bg-gradient-to-r from-gray-50 to-gray-100 '>
        <div className='flex flex-wrap justify-around'>
      <h1 className='md:text-7xl text-4xl my-12 lg:my-32 lg:pt-20 w-full md:w-1/2 '>Good things happen when you say
        <span> hey.
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
            className='absolute lg:w-[400px] hidden lg:block w-52 left-0 h-6 '
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 Q50,0 80,10 T200,100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg> */}
        </span>
      </h1>
      <img src="https://www.ujudebug.com/wp-content/uploads/2022/07/contact-us-content.gif" className='rounded-full w-52 md:w-96 lg:w-[600px] ' alt="" />
      </div>
      <div className="md:mt-20 mt-10 md:text-5xl text-2xl">
        <div className="flex justify-between"><h1 className='mb-3'>I am interested in :</h1> <h1 className='text-9xl hidden md:block'><FiArrowDownLeft /></h1></div>
        {
          data.map((data, index) => (
            <button key={index} className='rounded-full outline outline-1 outline-[#227c85]  outline-offset-2 md:m-3 m-2 p-2 md:text-lg text-sm font-sans px-5 bg-transparent hover:bg-[#227c85] duration-300 hover:text-white' value={data.title}>{data.title}</button>
          ))
        }
      </div>
      <form ref={formDataRef} onSubmit={submit} className='mt-20'>
        <input name='first-name' className='outline-0 border-b border-gray-300 p-3 w-full  font-sans text-lg md:text-2xl mx-2 md:w-96 bg-transparent' type="text" placeholder='First name*' />
        <input name='last-name' className='outline-0 border-b border-gray-300 p-3  font-sans text-lg md:text-2xl mx-2 w-full md:w-96 bg-transparent' type="text" placeholder='Last name*' />
        <input name='email' className='outline-0 border-b border-gray-300 p-3 font-sans text-lg md:text-2xl mx-2 w-full md:w-1/2 bg-transparent' type="email" placeholder='Email*' />
        <br />
        <input name='budget' className='outline-0 border-b border-gray-300 p-3 font-sans text-lg md:text-2xl mx-2 w-full md:w-1/2 bg-transparent' type="number" placeholder='Budget (€)' />
        <input name='message' className='outline-0 border-b border-gray-300 p-3 font-sans text-lg md:text-2xl mx-2 w-full md:w-3/4 bg-transparent' type="text" placeholder='Message' />
        <br />
        <div className="flex justify-between">
          <div>
            <input name='newsletter' className='m-2 mt-8' type="checkbox" />I'm happy to receive a monthly newsletter from Bidec Solutions
            <br />
            <input name='data-consent' className='m-2' type="checkbox" />I understand that Bidec Solutions will securely hold my data in accordance with their privacy policy.
          </div>
        </div>
        <button className='rounded-full outline outline-1 outline-offset-1 my-5 p-2 flex md:text-lg text-sm font-sans px-5  bg-[#227c85] hover:bg-transparent duration-300 ' type='submit'>Submit <IoArrowForward className='ms-2 my-1.5' /></button>
      </form>
      <div className='flex lg:flex-row flex-col justify-between align-center md:mt-20 mt-5'>
        <div className="rounded-md rounded-tr-[20vh] p-10 w-full lg:w-1/2 bg-[#227c85] hover:bg-teal-900 hover:text-white duration-300">
          <div className="flex">
            <div className="w-1/3">
              <h1 className='sm:text-4xl text-2xl py-3'>United Kingdom</h1>
              <p className="w-1/2">
              24 Sandgates,
              Guilford Road,
              Chertsey
              </p>
            </div>
            {/* <div className="w-1/2">
              <h1 className='sm:text-4xl text-2xl py-3'>New York</h1>
              <p className="w-1/2">KOTA
                477 Madison Ave
                Midtown Manhattan
                6th Floor, NY 10022</p>
            </div> */}
          </div>
          <div>
            <h1 className='sm:text-4xl text-xl text-start py-10'>+971-52-104-7673</h1>
            <p className='text-lg'>Have a quick question you need answering ?
              Check out - FAQ's : Working with Bidec Solutions</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5 lg:ps-20">
          {/* <p className='text-gray-400 text-lg p-0'>General</p>
          <h1 className='md:text-5xl text-2xl pb-1'>hello@kota.co.uk</h1>
          <p className='text-gray-400 text-lg p-0'>New business</p>
          <h1 className='md:text-5xl text-2xl pb-1'>newbiz@kota.co.uk</h1> */}
          <p className='text-gray-400 text-lg p-0'>Work with us</p>
          <h1 className='md:text-5xl text-2xl pb-7'>marketing@bidecsol.com</h1>
          <h1 className='md:text-4xl text-xl pb-3'>Follow us</h1>
          <h2 className='md:text-xl text-md pb-1'> 
          <a href="https://www.facebook.com/bidecsolutions" >FACEBOOK</a>
          </h2>
          <h2 className='md:text-xl text-md pb-1'>
            <a href="https://x.com/bidecsolutions" >X</a>
          </h2>
          <h2 className='md:text-xl text-md pb-1'>
          <a href="https://www.instagram.com/bidecsolutions" >Instagram</a>
          </h2>
          <h2 className='md:text-xl text-md pb-1'>
            <a href="https://www.linkedin.com/company/bidec-solutions" >Linkedin</a>
          </h2>

        </div>
      </div>
    </div>
  )
}

export default ContactUs