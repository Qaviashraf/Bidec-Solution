import React from 'react';

const ImageGrid = ( {images} ) => {
    
  return (
    <div className='py-8 md:py-16'>
      <div className="flex justify-center items-center max-w-screen max-h-screen mx-4 py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img src={images[0]} alt="Big square" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div>
            <img src={images[1]} alt="Small square 1" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src={images[2]} alt="Small square 2" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div>
            <img src={images[3]} alt="Rectangle" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
