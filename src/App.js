import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Main, Admin, Home, Login } from './pages';
import { Profile, MyBooks } from './components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Home />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='profile' element={<Profile />} />
          <Route path='mybooks' element={<MyBooks />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
