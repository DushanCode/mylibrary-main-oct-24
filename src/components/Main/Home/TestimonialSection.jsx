import React from 'react';
import Slider from 'react-slick';
import { testimonials } from '../../../data';

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='section border-top border-bottom'>
      <div className='container'>
        <div className='row justify-content-center text-center mb-5'>
          <div className='col-md-4'>
            <h2 className='text-4xl section-heading'>Review From Our Users</h2>
          </div>
        </div>
        <div className='row justify-content-center text-center'>
          <div className='col-md-7'>
            <Slider {...settings}>
              {testimonials.map((testimonial) => {
                const { id, name, comment } = testimonial;
                return (
                  <div className='swiper-slide' key={id}>
                    <div className='review text-center'>
                      <p className='stars'>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill'></span>
                        <span className='bi bi-star-fill muted'></span>
                      </p>
                      <h3>Excellent App!</h3>
                      <blockquote>
                        <p>{comment}</p>
                      </blockquote>

                      <p className='review-user'>
                        <img
                          src='assets/img/person_1.jpg'
                          alt=''
                          className='img-fluid rounded-circle mb-3'
                        />
                        <span className='d-block'>
                          <span className='text-black'>{name}</span>, &mdash;
                          App User
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
