import React from 'react';
// import {
//   BrowserRouter as Router, Route, Link
// } from "react-router-dom";
import './App.css';
import './index.css'
import Navbar, { NavItem, DropdownMenu } from './Navbar'
import logo from './ressiscan-logo.svg'

function App() {
  return (
    <>

    <Navbar>
      <NavItem Link="/camera" icon="📸"></NavItem>
      <NavItem icon="🔽">

        <DropdownMenu></DropdownMenu>
        
      </NavItem>

      
    </Navbar>
    <div className='content'>
      <img src={logo} alt="logo" />
      <span>Hi Jesus I Made a Navbar</span>
    </div>
    </>
  );
}

export default App;
