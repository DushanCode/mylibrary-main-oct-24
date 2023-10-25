import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';

import { person1 } from '../../assets';

const AdminNavbar = () => {
  return (
    <div className='h-[60px] md:p-0 p-10'>
      <div className='flex gap-5'>
        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-[5px] shadow-xl'>
          <IoIosNotificationsOutline />
        </div>
        <img src={person1} alt='' className='w-[40px] h-[40px] rounded-[5px]' />
      </div>
    </div>
  );
};

export default AdminNavbar;
