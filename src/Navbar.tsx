import React, { useState } from 'react';
import './index.css';

import { CSSTransition } from 'react-transition-group';

// function App() {
//   return (
//     <Navbar>
//       <NavItem icon="🔽">

//         <DropdownMenu></DropdownMenu>
      
//       </NavItem>

      
//     </Navbar>
//   );
// }

function Navbar(props:any) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children } </ul>
    </nav>
  );
}

function NavItem(props: any) {

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href={props.Link} className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main'); //settings? and thats all?
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: any) {
    return (
      <a href={props.Link} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>

        <div className="menu">

        <DropdownItem Link="/my-receipts" leftIcon="📃" >My Receipts</DropdownItem>
        <DropdownItem leftIcon="⚙" goToMenu="settings">Settings</DropdownItem>
        <DropdownItem Link="/" leftIcon="➡">Log Out</DropdownItem>
        
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary"  onEnter={calcHeight}>

        <div className="menu">

        <DropdownItem leftIcon="⏪" goToMenu="main"></DropdownItem>
        <DropdownItem Link="https://www.revzilla.com" leftIcon="😒">Revzilla</DropdownItem>
        <DropdownItem Link="https://www.npmjs.org" leftIcon="😁">Node Package Manager</DropdownItem>
        <DropdownItem Link="https://www.op.gg" leftIcon="😊">OP.GG</DropdownItem>
        
        
        </div>
      </CSSTransition>
    </div>
  )

}

export default Navbar;
export { NavItem, DropdownMenu };
