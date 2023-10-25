import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='h-screen bg-bgLogin'>
      <div className=' bg-white shadow-lg rounded-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center px-10 py-16'>
        <div className='relative'>
          <Link to='/' className='absolute top-[-50px] left-2'>
            Back to home
          </Link>
          <h2 className='text-2xl font-bold'>Login</h2>

          <div className='mt-10'>
            <form action=''>
              <input
                type='email'
                className='shadow-lg py-3 px-5 outline-none md:w-[500px] rounded-[10px]'
                placeholder='Email'
              />
              <input
                type='password'
                className='shadow-lg py-3 px-5 outline-none md:w-[500px] rounded-[10px] mt-10'
                placeholder='Password'
              />
              <button
                type='submit'
                className='mt-10 block mx-auto bg-black px-5 py-3 rounded-[10px] text-white uppercase font-bold'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
