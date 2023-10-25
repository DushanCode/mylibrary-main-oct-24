import React from 'react';

import { person1, cover } from '../../assets';

const Profile = () => {
  return (
    <div className='p-10'>
      <h1 className='text-xl text-[#0037c3] font-bold'>My Profile</h1>
      <div className='pt-10'>
        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>Name</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'>Anura Siriwardana</p>
        </div>

        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>Title</p>
          <span className='font-bold'>:</span>
          <div className='flex gap-3 flex-wrap'>
            <p className='px-5 py-2 bg-[#3c5b8a] text-white text-sm font-bold rounded-[5px]'>
              Author
            </p>
            <p className='px-5 py-2 bg-[#3c5b8a] text-white text-sm font-bold rounded-[5px]'>
              Translator
            </p>
          </div>
        </div>

        <div className='text-xl flex gap-10 mt-3'>
          <p className='text-xl font-bold'>Profile Image</p>
          <span className='font-bold'>:</span>
          <img src={person1} alt='' className='w-[192px] h-[192px]' />
        </div>

        <div className='text-xl flex md:gap-10 flex-wrap mt-3'>
          <p className='text-xl font-bold'>Cover Image</p>
          <span className='font-bold'>:</span>
          <img src={cover} alt='' className='w-[500px] h-[300px]' />
        </div>

        <div className='text-xl flex gap-10  mt-3'>
          <p className='text-xl font-bold'>Born</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'></p>
        </div>

        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>Died</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'></p>
        </div>

        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>Pen Name</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'></p>
        </div>

        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>Nationality</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'></p>
        </div>

        <div className='text-xl flex gap-10'>
          <p className='text-xl font-bold'>First Published Date</p>
          <span className='font-bold'>:</span>
          <p className='text-xl font-bold'></p>
        </div>

        <div className='text-xl flex flex-wrap md:gap-10'>
          <p className='text-xl font-bold'>About me</p>
          <span className='font-bold'>:</span>
          <p className='text-xl w-[700px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores
            ducimus? Ab, repudiandae explicabo est pariatur ipsa ratione eaque
            sed, voluptatem rem omnis, dolore culpa fugit! Vero, beatae magni.
            Tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
