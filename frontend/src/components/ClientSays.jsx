import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clientImg from '../assets/ClientPgAssets/ClientImg.svg';
import clientImg1 from '../assets/ClientPgAssets/1.jpg';
import clientImg2 from '../assets/ClientPgAssets/2.jpg';
import clientImg3 from '../assets/ClientPgAssets/3.jpg';
import clientImg4 from '../assets/ClientPgAssets/4.jpg';

import AOS from "aos";
import 'aos/dist/aos.css';


// Example data for the slider
const clientTestimonials = [
    {
        name: 'Michael Brown',
        position: 'Head of Operations at Global Logistics',
        testimonial: "The custom logistics and supply chain management software Bidec created for us has revolutionized our operations. The system is user-friendly, reliable, and perfectly tailored to our needs. Bidec's team was professional, responsive, and a pleasure to work with.",
        image: clientImg1
    },
    {
        name: 'Emily Davis',
        position: 'Founder of EduLearn',
        testimonial: "Our educational platform developed by Bidec has received rave reviews from both students and educators. The virtual classrooms and management systems are intuitive and efficient. Bidec's expertise in educational software is unmatched, and their support has been invaluable.",
        image: clientImg2
    },
    {
        name: 'James Lee',
        position: 'CTO of Smart Homes Ltd',
        testimonial: "Bidec's IoT solutions have enabled our smart devices to communicate and function seamlessly. Their innovative approach and technical expertise have been crucial in bringing our vision to life. We are extremely satisfied with the partnership and look forward to future collaborations.",
        image: clientImg3
    },
    {
        name: 'Tom White',
        position: 'Co-Founder of Real Estate Dynamics',
        testimonial: "Bidec's real estate management software has streamlined our property management and tenant communication. The CRM features have enhanced our customer interactions, and the software's reliability has been outstanding. Bidec is a trusted partner for our digital needs.",
        image: clientImg4
    },
      // Add more testimonials as needed
];

function ClientSays() {

        
    useEffect(() => {
        AOS.init({ duration: "1000", delay: "0" });
      });

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? clientTestimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1));
        }, 4000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const { name, position, testimonial, image } = clientTestimonials[currentIndex];

    return (
        <div className="container mx-auto py-5">
            <h1 data-aos="fade-up" className='text-center lg:text-6xl text-4xl w-full md:w-1/2 mx-auto'>
                What our clients say about us
            </h1>
            <div className='flex justify-center lg:flex-row flex-col gap-10 mx-auto px-10 pt-10'>
                <img data-aos="fade-right" src={image} alt={name} className="w-full h-auto max-w-xs" />
                <div data-aos="fade-left" className="flex justify-around items-start flex-col lg:w-1/2 w-full px-10">
                    <span>
                        <h1 className='text-4xl'>{name}</h1>
                        <h2 className='font-sans text-xl'>{position}</h2>
                    </span>
                    <p className='font-sans text-md md:text-lg py-5 lg:p-0'>{testimonial}</p>
                    <div>
                        <button
                            className='border-2 rounded-full p-3 m-1 hover:border-[#165056] hover:text-[#165056]  text-gray-400'
                            onClick={handlePrev}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className='border-2 rounded-full p-3 m-1 hover:bg-[#165056] hover:border-white hover:text-white duration-300 border-[#227C85] text-[#227C85]'
                            onClick={handleNext}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSays;
