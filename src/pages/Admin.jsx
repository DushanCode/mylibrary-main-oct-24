import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';

import { AdminNavbar, MyBooks, Profile, Sidebar } from '../components';
import { person1 } from '../assets';
import { Route, Routes } from 'react-router-dom';

const Admin = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className='flex md:flex-row flex-col h-screnn transaction-height duration-75 ease-out bg-[#f8f8f8]'>
      <div className='hidden md:block h-screen flex-initial justify-between'>
        <Sidebar />
        <div className='absolute top-5 right-5'>
          <AdminNavbar />
        </div>
      </div>
      <div className='flex md:hidden md:w-0 flex-row'>
        <div className='p-2 w-full flex justify-between items-center shadow-md'>
          <HiMenu
            fontSize={40}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(true)}
          />
          <div className='flex gap-5'>
            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-[5px] shadow-xl'>
              <IoIosNotificationsOutline />
            </div>
            <img
              src={person1}
              alt=''
              className='w-[40px] h-[40px] rounded-[5px]'
            />
          </div>
        </div>
        {toggleSidebar && (
          <div className='fixed w-2/5 bg-white h-screen overflow-y-auto shadow-md z-10'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen w-full overflow-y-scroll'>
        <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='mybooks' element={<MyBooks />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
