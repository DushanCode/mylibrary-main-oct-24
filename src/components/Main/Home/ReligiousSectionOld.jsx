import React from 'react';

import { religious } from '../../../assets';

const ReligiousSection = () => {
  return (
    <div className='text-center py-10 bg-pinkBg'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-[#529d96]'>Religious Section</h2>
        <div className='py-10'>
          <div className='lg:flex gap-10 flex-row-reverse'>
            <div className='flex-[0_0_50%] lg:max-w-[50%]'>
              <img src={religious} alt='' />
            </div>
            <div className='flex-[0_0_50%] lg:max-w-[50%] flex items-center'>
              <p className='text-xl mt-10'>
                When any user login to my library can access the religious
                section with the paid membership. Many items are availble to
                elimate your beauty!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousSection;
