import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-text">
          MovieFlix🍿🎥
        </NavLink>
      </div>
      <div className={`nav-links-wrapper ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link">Home 🏠</NavLink>
        <NavLink to="/about" className="nav-link">About ℹ️</NavLink>
        <NavLink to="/contact" className="nav-link">Contact 📧</NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
