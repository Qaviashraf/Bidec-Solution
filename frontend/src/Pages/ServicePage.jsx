import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import { data } from '../data'; // Adjust the path if necessary

export const ServicePage = () => {
  // Get the id from the URL
  const { id } = useParams();

  // Find the data for the given id
  const serviceData = data.find(service => service.id === id);

  // Return null or a loading message if no data is found
  if (!serviceData) {
    return <div>No data found</div>;
  }

  const { images, sections } = serviceData;

  return (
    <div className='max-w-screen py-6 bg-gradient-to-r from-gray-100 to-gray-200 opacity-80'>
      {/* First Section */}
      <div className='flex flex-col md:flex-row justify-around items-center py-8 gap-4 max-w-screen'>
        <h1 className='text-center md:text-start text-2xl lg:text-7xl w-full lg:w-[500px]'>
          {sections[0].title}
        </h1>
        <img
          src={sections[0].image}
          alt={sections[0].imageAlt}
          className='w-52 md:w-[350px] rounded-full'
        />
      </div>

      <div className='flex flex-col md:flex-row justify-around items-center text-center px-4 py-8 gap-4 max-w-screen'>
        <h1 className='md:text-start text-xl lg:text-4xl w-full lg:w-[500px]'>
          {sections[0].subtitle}
        </h1>
        <p className='w-full lg:w-[500px]'>{sections[0].text}</p>
      </div>

      {/* Image Grid */}
      <div className='hidden lg:block'>
      <ImageGrid images={images} />
      </div>
      {/* Sections 2 and onward */}
      {sections.slice(1).map((section, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } flex-col justify-around items-center text-center px-4 py-4 gap-4 max-w-screen`}
        >
          <div className='w-full lg:w-[500px] md:text-start '>
            <h1 className='text-2xl lg:text-5xl'>{section.title}</h1>
            <p>{section.text}</p>
          </div>
          <img
            src={section.image}
            alt={section.imageAlt}
            className={`w-52 md:w-[500px] rounded-2xl ${
              index % 2 === 0 ? 'rounded-tr-[180px]' : 'rounded-tl-[180px]'
            }`}
          />
        </div>
      ))}
    </div>
  );
};
