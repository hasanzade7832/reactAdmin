import React from 'react';
import { useCount } from '../contex/CountContext';


const Counter = () => {
  const { increment } = useCount();

  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;