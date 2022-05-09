import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar, { NavItem, DropdownMenu } from './Navbar';
import Camera from './camera';
import Home from './home';
import MyReceipts from './my-receipts';
import logo from './ressiscan-logo.svg';
import './App.css';
import './index.css';


function App() {
  return (

    <>

    <Router>
      
      <Navbar>
        <NavItem Link="/camera" icon="📸"></NavItem>
        <a href="/"><img src={ logo } alt='logo' className='logo-image' /></a>
        <NavItem icon="🔽">

          <DropdownMenu></DropdownMenu>
        
        </NavItem>
    
      
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/camera' element={<Camera />} />
        <Route path='/my-receipts' element={<MyReceipts />} />
        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      </Routes>

    </Router>
    </>
  );
}

export default App;
