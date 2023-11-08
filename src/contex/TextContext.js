import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext();

const TextProvider = ({ children }) => {
    
  const [text, setText] = useState("mammad");

  return (
    <TextContext.Provider value={{ text }}>
      {children}
    </TextContext.Provider>
  );
};

const useText = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useText must be used within a TextProvider');
  }
  return context;
};

export { TextProvider, useText };
