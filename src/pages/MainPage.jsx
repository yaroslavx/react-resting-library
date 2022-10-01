import React from 'react';
import Counter from '../components/Counter';

const MainPage = () => {
  return (
    <>
      <div data-testid='main-page'>MainPage</div>
      <div>
        <Counter />
      </div>
    </>
  );
};

export default MainPage;
