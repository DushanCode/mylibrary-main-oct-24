import React, { useState, useEffect } from 'react';

import { books } from '../../../data';

const Books = () => {
  const [images, setImages] = useState(books);

  useEffect(() => {
    setImages(books);
  }, []);

  return (
    <div className='text-center py-10 bg-pinkBg'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-[#529d96]'>
          The Best E-Books and Audio Books are waiting for you !
        </h2>

        <div className='grid lg:grid-cols-7 grid-cols-3 books mt-10 bg-white p-10 blue-gradient '>
          {images.map((image) => (
            <div key={image.id} className='book'>
              <img
                src={image.img}
                alt=''
                className='w-full  lg:h-full h-[150px]  object-cover '
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
