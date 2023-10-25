import React from 'react';

import { translator } from '../../../assets';

const Libraries = () => {
  return (
    <div className='text-center py-10 bg-pinkBg'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-[#529d96]'>Our Libraries</h2>
        <div className='lg:flex mt-10'>
          <div className='flex-[0_0_50%] lg:max-w-[50%] '>
            <img src={translator} alt='' className='mx-auto' />
          </div>
          <div className='flex-[0_0_50%] lg:max-w-[50%] mt-10 lg:mt-0 flex items-center'>
            <p>
              Two types of libraries, Sinhala and English are available within
              MyLibrary you can switch between two libraries easily, You can
              select Sinhala or English or both libraries when you signup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libraries;
