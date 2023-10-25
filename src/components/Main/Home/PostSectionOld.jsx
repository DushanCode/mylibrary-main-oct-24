import React from 'react';
import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

import { posts } from '../../../data';

const PostSection = () => {
  return (
    <div className='bg-pinkBg py-10 h-auto'>
      <div className='container mx-auto'>
        <Link to='/post'>All Post</Link>

        <div className='mt-16'>
          {posts.map((post) => {
            const { id, title, des, published_by, date, img } = post;

            return (
              <div className='lg:flex mb-10 gap-10' key={id}>
                <div className='flex-[0_0_50%] lg:max-w-[50%]'>
                  <img src={img} alt='' className='w-full h-[400px]' />
                </div>
                <div className='flex-[0_0_50%] lg:max-w-[50%]'>
                  <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                      <img
                        src=''
                        alt=''
                        className='w-[40px] h-[40px] rounded-full'
                      />
                      <div>
                        <h5 className='flex gap-1 items-center'>
                          {published_by} <FaCrown />
                        </h5>
                        <span>{date}</span>
                      </div>
                    </div>
                    <button>
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                  <h2 className='text-2xl mt-3'>{title}</h2>
                  <p className='text-xl mt-3 mb-32'>{des}</p>
                  <div className='flex justify-between py-5 items-center border-t-2 border-t-black'>
                    <div>
                      <span className='mr-3'>0 views</span>
                      <span>0 comments</span>
                    </div>
                    <button className='text-[#c47370] text-lg'>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
