import React from 'react';

const Footer = () => {
  return (
    <>
      <button className='btn btn-primary absolute top-5 right-5'>
        Let's Chat
      </button>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-4 mb-md-0'>
            <h3 className='text-white'>About MyLibrary</h3>
            <p className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea
              delectus pariatur, numquam aperiam dolore nam optio dolorem
              facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
            <p className='social'>
              <a href='#'>
                <span className='bi bi-twitter'></span>
              </a>
              <a href='#'>
                <span className='bi bi-facebook'></span>
              </a>
              <a href='#'>
                <span className='bi bi-instagram'></span>
              </a>
              <a href='#'>
                <span className='bi bi-linkedin'></span>
              </a>
            </p>
          </div>
          <div className='col-md-7 ms-auto'>
            <div className='row site-section pt-0'>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Navigation</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>New Authors</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Services</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#'>Team</a>
                  </li>
                  <li>
                    <a href='#'>Collaboration</a>
                  </li>
                  <li>
                    <a href='#'>Todos</a>
                  </li>
                  <li>
                    <a href='#'>Events</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-4 mb-4 mb-md-0'>
                <h3 className='text-white'>Downloads</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#'>Get from the App Store</a>
                  </li>
                  <li>
                    <a href='#'>Get from the Play Store</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='row justify-content-center text-center'>
          <div className='col-md-7'>
            <p className='copyright text-white'>
              &copy; Copyright MyLibrary. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
