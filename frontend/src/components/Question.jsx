import React, { useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";

function Question() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What services does your digital agency offer?',
            answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever'
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever'
        },
        {
            question: 'What is your process for working with clients?',
            answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever'
        }
    ];

    return (
        <div 
            data-aos="fade-up"
            className="flex justify-center items-start pt-20 p-10 md:px-20 gap-4 flex-col bg-gray-50"
        >
            <h1 className='md:text-6xl text-4xl md:px-10 p-0'>Frequently asked questions</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    data-aos="fade-right"
                    className="w-full mb-2"
                >
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
                            <p className='font-sans'>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Question
