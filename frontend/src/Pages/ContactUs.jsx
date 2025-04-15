import React, { useRef, useEffect, useState } from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import { IoArrowForward } from 'react-icons/io5';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const formDataRef = useRef();
  const [loader, setLoader] = useState(false)

  const services = [
    'A new website',
    'Branding',
    'Motion graphics',
    'E-Commerce',
    'Development',
    'On-going support',
    'App from scratch',
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const form = formDataRef.current;

    const formData = {
      name: form['name'].value,
      email: form['email'].value,
      message: form['message'].value,
    };

    try {
      setLoader(true);

      const res = await axios.post("https://bidecsol.com/send-email.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", res.data);

      setTimeout(() => {
        setLoader(false); // turn off loader after 2 seconds
      }, 2000);

    } catch (error) {
      console.error("Error posting data:", error);
      setLoader(false); // turn off loader immediately on error
    }
  };


  return (
    <div className='py-12 px-10 md:px-20 bg-gradient-to-r from-gray-50 to-gray-100 text-black'>
      <div className='flex flex-wrap justify-around items-center'>
        <h1 className='md:text-7xl text-4xl my-12 lg:my-32 lg:pt-20 w-full md:w-1/2' data-aos='fade-right'>
          Good things happen when you say <span className='text-[#227c85]'>hey.</span>
        </h1>
        <img
          src='https://www.ujudebug.com/wp-content/uploads/2022/07/contact-us-content.gif'
          className='rounded-full w-52 md:w-96 lg:w-[600px]'
          alt='Contact Us Illustration'
          data-aos='fade-left'
        />
      </div>

      <div className='md:mt-20 mt-10 md:text-5xl text-2xl' data-aos='fade-up'>
        <div className='flex justify-between items-center'>
          <h1 className='mb-3'>I am interested in :</h1>
          <span className='text-9xl hidden md:block text-[#227c85]'><FiArrowDownLeft /></span>
        </div>
        <div className="flex flex-wrap">
          {services.map((title, idx) => (
            <button
              key={idx}
              value={title}
              className='rounded-full outline outline-1 outline-[#227c85] outline-offset-2 m-2 md:m-3 p-2 md:text-lg text-sm font-sans px-5 bg-transparent hover:bg-[#227c85] hover:text-white duration-300'
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      <form ref={formDataRef} onSubmit={submit} className='mt-20' data-aos='fade-up'>
        <input
          name='name'
          required
          className='outline-0 border-b border-gray-300 p-3 w-full font-sans text-lg md:text-2xl mx-2 md:w-96 bg-transparent'
          type='text'
          placeholder='Name*'
        />
        <input
          name='email'
          required
          className='outline-0 border-b border-gray-300 p-3 w-full font-sans text-lg md:text-2xl mx-2 md:w-96 bg-transparent'
          type='email'
          placeholder='Email*'
        />
        <textarea
          name='message'
          required
          className='resize-none outline-0 border-b border-gray-300 p-3 pt-8 font-sans text-lg md:text-2xl mx-2 w-full md:w-3/4 bg-transparent'
          placeholder='Message'
        />
        <button
          type='submit'
          className='rounded-full outline outline-1 outline-offset-1 my-5 p-2 flex items-center md:text-lg text-sm font-sans px-5 bg-[#227c85] hover:bg-transparent hover:text-[#227c85] duration-300'
        >
          {loader ? 'Submitting...' : 'Submit'}  <IoArrowForward className='ml-2 mt-1' />
        </button>
      </form>

      <div className='flex lg:flex-row flex-col justify-between gap-8 md:mt-20 mt-10'>
        <div className='rounded-md rounded-tr-[20vh] p-10 w-full lg:w-1/2 bg-[#227c85] hover:bg-teal-900 hover:text-white duration-300' data-aos='fade-right'>
          <h2 className='sm:text-4xl text-2xl py-3'>United Kingdom</h2>
          <p className='w-3/4 mb-6'>
            24 Sandgates, <br />
            Guilford Road, <br />
            Chertsey
          </p>
          <h2 className='sm:text-4xl text-xl py-3'>+971-52-104-7673</h2>
          <p className='text-lg'>
            Have a quick question you need answering?
            Check out - FAQ's : Working with Bidec Solutions
          </p>
        </div>

        <div className='w-full md:w-1/2 p-5 lg:pl-20' data-aos='fade-left'>
          <p className='text-gray-400 text-lg'>Work with us</p>
          <h2 className='md:text-5xl text-2xl pb-7'>marketing@bidecsol.com</h2>
          <h2 className='md:text-4xl text-xl pb-3'>Follow us</h2>
          <ul className='space-y-1'>
            <li>
              <a href='https://www.facebook.com/bidecsolutions' target='_blank' rel='noreferrer' className='md:text-xl text-md text-[#227c85] hover:underline'>Facebook</a>
            </li>
            <li>
              <a href='https://x.com/bidecsolutions' target='_blank' rel='noreferrer' className='md:text-xl text-md text-[#227c85] hover:underline'>X</a>
            </li>
            <li>
              <a href='https://www.instagram.com/bidecsolutions' target='_blank' rel='noreferrer' className='md:text-xl text-md text-[#227c85] hover:underline'>Instagram</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/bidec-solutions' target='_blank' rel='noreferrer' className='md:text-xl text-md text-[#227c85] hover:underline'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
