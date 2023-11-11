import React, { createContext, useContext, useState, useEffect } from "react";
import TableConfiguration from "../components/generalTab/tableConfiguration";

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [tableComponent, setTableComponent] = useState("");

  useEffect(() => {
    if (text === "Configuration") {
      setTableComponent(TableConfiguration);
    } else {
      setTableComponent("");
    }
  }, [text]);

  const changeText = (newData) => {
    setText(newData);
  };

  return (
    <TextContext.Provider value={{ text, changeText, tableComponent }}>
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

export { TextProvider, useText, TextContext };
