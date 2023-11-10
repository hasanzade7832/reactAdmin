import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./views/Login";
import Home from "./views/Home";
import Counter from "./views/CounterMain";
import Text from "./views/TextDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountProvider } from "../src/contex/CountContext";
import { TextProvider } from "../src/contex/TextContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <CountProvider>
    <TextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </BrowserRouter>
    </TextProvider>
  </CountProvider>
);

// rfce
