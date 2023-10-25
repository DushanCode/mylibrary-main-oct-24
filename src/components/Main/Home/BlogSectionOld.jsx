import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <div className='bg-blog bg-no-repeat bg-left-top bg-cover text-center py-10'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-[#529d96]'>My Library "Blog"</h2>
        <p className='text-lg my-10'>
          Join my library blog to read interesting articles about books, <br />{' '}
          authors and many more{' '}
        </p>

        <Link
          to='/blog'
          className='px-10 py-3 mt-5 rounded-[50px] bg-[#59dfde] button-gradient text-white border-[1px] border-[#3c9b9b] text-sm font-bold capitalize'
        >
          visit blog
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
