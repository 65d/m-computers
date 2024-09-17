// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/styles/nav.scss';
// import '../assets/styles/HamburgerMenu.scss';

// // import HamburgerMenu from './HamburgerMenu';
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav className='navbar'>
//       <ul>
//         <li className='logo'><Link to="/">M-computers</Link></li>
//         <div className="controol-btns">
//             <li><Link to="/about">O nás</Link></li>
//             <li><Link to="/contact">Kontakty</Link></li>
//         </div>
//         {/* Menu */}
//         <li className={`mobile-menu hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         </li>

//       </ul>

//       <div className={`nav-menu ${isOpen ? 'open' : 'close'}`}>
//           <div style={{marginTop: 10}} className={`mobile-menu hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>

//           </div>
// <div className="menu-text">Menu</div>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/services">Services</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </div>
//       {/* <HamburgerMenu /> */}

//     </nav>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.scss';
import '../assets/styles/HamburgerMenu.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Start the closing animation
      setClosing(true);
      // Wait for the animation to complete (0.5s), then hide the menu
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false); // Reset closing state
      }, 500); // Match the duration of your close animation
    } else {
      // Open the menu
      setIsOpen(true);
    }
  };

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'><Link to="/">M-computers</Link></li>
        <div className="controol-btns">
            <li><Link to="/about">O nás</Link></li>
            <li><Link to="/contact">Kontakty</Link></li>
        </div>
        {/* Menu Toggle Button */}
        <li className={`mobile-menu hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
      </ul>

      {/* Nav Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : closing ? 'close' : ''}`}>
        <div style={{ marginTop: 10 }} className={`mobile-menu hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="menu-text">Menu</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;