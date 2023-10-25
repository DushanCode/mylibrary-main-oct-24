import React from 'react';
import { motion } from 'framer-motion';

import { phone, phone2 } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='hero-section w-full' id='hero'>
      <div class='wave'>
        <svg
          width='100%'
          height='355px'
          viewBox='0 0 1920 355'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xlink='http://www.w3.org/1999/xlink'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
          >
            <g
              id='Apple-TV'
              transform='translate(0.000000, -402.000000)'
              fill='#FFFFFF'
            >
              <path
                d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z'
                id='Path'
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div className='container'>
        <motion.div
          initial={{
            left: '-100px',
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            left: 0,
            right: 0,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          className='row align-items-center absolute'
        >
          <div className='col-12 hero-text-image'>
            <div className='row'>
              <div className='col-lg-8 text-center text-lg-start'>
                <h1 data-aos='fade-right'>Welcome to My Library</h1>
                <p className='mb-5' data-aos='fade-right' data-aos-delay='100'>
                  Entire world is on your pocket now!
                </p>
                <p
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-offset='-500'
                >
                  <a href='df' className='btn btn-outline-white'>
                    Get started
                  </a>
                </p>
              </div>
              <div className='col-lg-4 iphone-wrap'>
                <img
                  src={phone}
                  alt=''
                  className='phone-1'
                  data-aos='fade-right'
                />
                <img
                  src={phone2}
                  alt=''
                  className='phone-2'
                  data-aos='fade-right'
                  data-aos-delay='200'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
