import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='container d-flex justify-content-between align-items-center '>
      <div className='logo '>
        <h1>
          <a href='/' className='text-[#42c2f5]'>
            MyLearning
          </a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
      </div>

      <nav
        id='navbar'
        className={`${showMenu ? 'navbar navbar-mobile' : 'navbar'}`}
      >
        <ul>
          <li>
            <a className='active ' href='index.html'>
              Home
            </a>
          </li>
          <li>
            <a href='features.html'>About</a>
          </li>
          <li className='dropdown'>
            <a href='#'>
              <span>Publish with us</span>{' '}
              <i className='bi bi-chevron-down'></i>
            </a>
            <ul>
              <li>
                <a href='#'>New Authors</a>
              </li>
              <li>
                <a href='#'>Convert to Ebook</a>
              </li>
              <li>
                <a href='#'>Covert to Audiobook</a>
              </li>
            </ul>
          </li>
          <li class='dropdown'>
            <a href='#'>
              <span>My Library</span> <i class='bi bi-chevron-down'></i>
            </a>
            <ul>
              <li>
                <a href='#'>Libraries</a>
              </li>
              <li>
                <a href='#'>Authors</a>
              </li>
              <li>
                <a href='#'>Books</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='contact'>Contact Us</a>
          </li>
          <li>
            <a href='admin/profile'>Author</a>
          </li>
          <li>
            <a href='login'>Login</a>
          </li>
        </ul>
        <button
          class='bi bi-list mobile-nav-toggle'
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
