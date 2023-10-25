import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const AppSection = () => {
  return (
    <section className='section cta-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 me-auto text-center text-md-start mb-5 mb-md-0'>
            <h2 className='text-4xl'>Starts Publishing Your Apps</h2>
          </div>
          <div className='col-md-5 text-center text-md-end'>
            <p>
              <a
                href='#'
                className='btn d-inline-flex align-items-center gap-2'
              >
                <FaApple fontSize={24} />
                <span>App store</span>
              </a>{' '}
              <a
                href='#'
                className='btn d-inline-flex align-items-center gap-2'
              >
                <FaGooglePlay fontSize={22} />
                <span>Google play</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
