import React, { createContext, useContext, useState, useEffect } from "react";

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (text === "Configuration") {
      setData([1, 2, 3]);
    } else {
      setData([]);
    }
  }, [text]);

  const changeText = (newData) => {
    setText(newData);
  };

  return (
    <TextContext.Provider value={{ text, changeText, data }}>
      {children}
    </TextContext.Provider>
  );
};

const useText = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useText must be used within a TextProvider");
  }
  return context;
};

export { TextProvider, useText };
