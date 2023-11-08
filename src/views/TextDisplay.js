import React from 'react';
import { useText } from '../contex/TextContext';


const Counter = () => {
  const { text } = useText();

  return (
    <>
      <span>{text}</span>
    </>
  );
};

export default Counter;