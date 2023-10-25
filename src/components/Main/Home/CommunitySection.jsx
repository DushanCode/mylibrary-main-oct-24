import React from 'react';

import { undraw_2 } from '../../../assets';

const CommunitySection = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 me-auto'>
            <h2 className='mb-4 text-4xl'>MyLibrary Community</h2>
            <p className='mb-4'>
              Once you download the mobile app you can join with your friends
              inside the community who are book bugs the same as you, You can
              post, share and update about what are you reading now. Really
              Interesting!
            </p>
            {/* <p>
              <a href='#' className='btn btn-primary'>
                Download Now
              </a>
            </p> */}
          </div>
          <div className='col-md-6' data-aos='fade-left'>
            <img src={undraw_2} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
