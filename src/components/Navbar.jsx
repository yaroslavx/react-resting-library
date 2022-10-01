import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to='/' data-testid='main-link'>
        Main
      </Link>
      <Link to='/secondpage' data-testid='second-link'>
        SecondPage
      </Link>
      <Link to='/users' data-testid='users-link'>
        Users
      </Link>
    </>
  );
};

export default Navbar;
