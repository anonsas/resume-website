import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar__header">
          <img src={logo} alt="logo" className="logo" />
          <button
            class={`fa-solid fa-bars nav-toggle ${isOpen ? 'nav-toggle-animate' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>

        <ul className={`navbar__links ${isOpen ? 'show-links' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(!isOpen)}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </NavLink>
        </ul>

        <ul className="navbar__socials">
          <a href="https://www.twitter.com" class="fab fa-facebook"></a>
          <a href="https://www.twitter.com" class="fab fa-twitter"></a>
          <a href="https://www.twitter.com" class="fab fa-behance"></a>
          <a href="https://www.twitter.com" class="fab fa-linkedin"></a>
          <a href="https://www.twitter.com" class="fab fa-sketch"></a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
