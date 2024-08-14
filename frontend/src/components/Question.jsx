import React, { useEffect, useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";
import bgShade from '../assets/HeroSection/Ellipse 18.svg'

import AOS from "aos";
import 'aos/dist/aos.css';


function Question() {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: "1000", delay: "0" });
      });


    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [

        {
            question: 'Why Choose Bidec?',
            answer: 'Choose Bidec because our team of experienced professionals ensures high-quality, secure, and reliable software. We tailor solutions to meet your specific business needs, leveraging the latest technologies for innovative results. Our transparent communication keeps you informed at every step, fostering trust and collaboration.'
        },
        {
            question: 'What services does Bidec offer?',
            answer: 'Bidec offers expert software development, custom solutions tailored to your business needs, and innovative approaches using the latest technologies. Our services include secure, reliable, and robust software creation, all delivered with transparent communication and a client-focused approach to drive your business growth.'
        },
        {
            question: 'Which industries does Bidec specialize in?',
            answer: 'Bidec specializes in various industries including finance, healthcare, education, retail, and manufacturing. Our expertise in these sectors enables us to deliver tailored solutions that address industry-specific challenges, leveraging our deep understanding of market trends and technological advancements to drive business success.'
        },
        {
            question: 'What is your process for working with clients?',
            answer: "We start by understanding your business needs, then design tailored solutions using the latest technologies. Throughout development, we maintain transparent communication, ensuring you're informed at every step. Finally, we deliver high-quality, reliable software, providing ongoing support to ensure your satisfaction and success"
        }
    ];

    return (
        <div
            data-aos="fade-up"
            className="flex justify-center items-start pt-20 p-10 md:px-20 gap-4 flex-col bg-gray-50"
        >
            <img className='absolute left-0' src={bgShade} alt="" />
            <h1 className='md:text-6xl text-3xl md:px-10 p-0'>Frequently asked questions</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    data-aos="fade-right"
                    className="w-full mb-2">
                    <div className="transition duration-300">
                        <div
                            className={`flex justify-between items-center rounded-xl cursor-pointer ${activeIndex === index ? 'bg-[#227c85] text-white rounded-b-none' : 'bg-white text-black'} ${activeIndex === index ? '' : 'border border-gray-400'}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h1 className='md:text-4xl text-lg p-4 md:p-6'>{faq.question}</h1>
                            <span className='md:text-4xl text-2xl px-4'>
                                {activeIndex === index ? <TiMinus /> : <TiPlus />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 bg-[#227c85] text-white rounded-b-xl">
                                <p className='font-sans text-lg px-4'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Question
