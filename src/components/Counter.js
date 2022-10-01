import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducers/counterReducer';
import { getCounterValue } from '../store/reducers/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>value = {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
