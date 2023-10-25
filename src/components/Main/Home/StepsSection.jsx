import React from 'react';

import { undraw_1 } from '../../../assets';

const StepsSection = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div
          className='row justify-content-center text-center mb-5'
          data-aos='fade'
        >
          <div className='col-md-6 mb-5'>
            <img src={undraw_1} alt='' className='img-fluid' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <div className='step'>
              <span className='number'>01</span>
              <h3>Sign Up</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='step'>
              <span className='number'>02</span>
              <h3>Create Profile</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='step'>
              <span className='number'>03</span>
              <h3>Enjoy the app</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
