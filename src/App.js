// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const handleToggle = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     setTimeout(() => setData({ some: 'some' }), 100);
//   }, []);

//   return (
//     <div className='App'>
//       <h1 data-testid='input-value'>{value}</h1>
//       {toggle && <div data-testid='toggled-div'>Button is toggled </div>}
//       {data && <div style={{ color: 'red' }}>somedata</div>}
//       <h1>HI MY NAME IS</h1>
//       <button onClick={handleToggle} data-testid='toggle-button'>
//         SomeButton
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         type='text'
//         placeholder='whats your name'
//       />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageFirst from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';
import PageSecond from './pages/SecondPage';
import UserPage from './pages/UserPage';
import AppRouter from './router/AppRouter';
import Users from './users/Users';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
