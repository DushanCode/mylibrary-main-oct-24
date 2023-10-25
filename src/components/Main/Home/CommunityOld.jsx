import React from 'react';
import { TbBrandWechat } from 'react-icons/tb';

const Community = () => {
  return (
    <div className='bg-commBg text-center py-10'>
      <div className='container mx-auto'>
        <div className='text-8xl flex justify-center font-normal mb-5'>
          <TbBrandWechat />
        </div>
        <h2 className='text-white text-4xl uppercase font-bold tracking-widest mb-5'>
          COMMUNITY
        </h2>
        <p className='text-lg'>We work with our community to improve lives</p>
      </div>
    </div>
  );
};

export default Community;
