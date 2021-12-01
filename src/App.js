import React, { useState, useEffect } from "react";
import axios from "axios";
import useDarkMode from './Hooks/useDarkMode'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./style.css";

const App = () => {

  const [ coinData, darkMode, setDarkMode ] = useDarkMode()
  
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;