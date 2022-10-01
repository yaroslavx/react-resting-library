import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import User from '../components/usersForTest/User';
import UsersForTest from '../components/usersForTest/UserForTest';
import Hi from '../pages/Hi';
import MainPage from '../pages/MainPage';
import PageNotFound from '../pages/PageNotFound';
import SecondPage from '../pages/SecondPage';
import UserPage from '../pages/UserPage';
import Users from '../users/Users';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/hi' element={<Hi />} />
        <Route path='/secondpage' element={<SecondPage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users-test' element={<UsersForTest />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
