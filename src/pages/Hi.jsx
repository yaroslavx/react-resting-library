import React, { useState } from 'react';

const Hi = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    value === 'hi' && setVisible((prev) => !prev);
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        id='search'
        type='text'
      />
      <button onClick={toggle} id='toggle'>
        Hi
      </button>
      {visible && <h1 id='title'>Hi</h1>}
    </div>
  );
};

export default Hi;
