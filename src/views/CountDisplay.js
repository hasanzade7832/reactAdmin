import React from 'react';
import { useCount } from '../contex/CountContext';


const Counter = () => {
  const { count } = useCount();

  return (
    <>
      <span>{count}</span>
    </>
  );
};

export default Counter;