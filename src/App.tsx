import React from 'react';
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import './App.css';
import Nav from './Nav';

import logo from './ressiscan-logo.svg'

function App() {
  return (
    
    <div className="App">
      <img src={logo} alt="logo" height={200} width={150}/>
      <br />
      Hi Jesus
    </div>
  );
}

export default App;
