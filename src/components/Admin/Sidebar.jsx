import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoGrid, IoWalletOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { BsEnvelopePaper } from 'react-icons/bs';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const isActiveStyle =
  'text-[#085dee] border-l-4 border-[#085dee] h-[40px] flex items-center justify-center gap-2';
const isNotActive =
  'text-[#a0a0a0] h-[40px] flex items-center justify-center  gap-2';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between bg-white h-screen overflow-y-scroll max-w-210 scrollbar-hide'>
      <div className='flex flex-col'>
        <h2 className='text-xl capitalize p-10 text-[#0037c3]'>
          anura siriwardana
        </h2>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='profile'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className=' flex items-center gap-2 w-[100px]'>
              <IoGrid />
              Profile
            </span>
          </NavLink>
          <NavLink
            to='/admin/mybooks'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className='flex items-center gap-2 w-[100px]'>
              <MdOutlineLibraryBooks />
              My Books
            </span>
          </NavLink>
          <NavLink
            to='admin/books'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className='flex items-center gap-2 w-[100px]'>
              <IoWalletOutline />
              Payment
            </span>
          </NavLink>
          <NavLink
            to='books'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className='flex items-center gap-2 w-[100px]'>
              <BsEnvelopePaper />
              Agreement
            </span>
          </NavLink>
          <NavLink
            to='admin/books'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className='flex items-center gap-2 w-[100px]'>
              <HiOutlineInboxIn />
              Message
            </span>
          </NavLink>
          <NavLink
            to='admin/books'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActive
            }
          >
            <span className='flex items-center gap-2 w-[100px]'>
              <FiSettings />
              Settings
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
