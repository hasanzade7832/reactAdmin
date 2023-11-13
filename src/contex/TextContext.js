import React, { createContext, useContext, useState, useEffect } from "react";
import TableConfiguration from "../components/generalTab/configuration/tableConfiguration";
import TableCommand from "../components/generalTab/commands/tableCommands";

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [tableComponent, setTableComponent] = useState(null);
  const [showSplitPane, setShowSplitPane] = useState(false);

  useEffect(() => {
    if (text === "Configuration") {
      setTableComponent(TableConfiguration);
      setShowSplitPane(true);
    } else if (text === "Commands") {
      setTableComponent(TableCommand);
      setShowSplitPane(true);
    } else {
      setTableComponent(null);
      setShowSplitPane(false)
    }
  }, [text]);

  const changeText = (newData) => {
    setText(newData);
  };

  return (
    <TextContext.Provider value={{ text, changeText, tableComponent, showSplitPane }}>
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
