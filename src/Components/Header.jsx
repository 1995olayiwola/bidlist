import React,{useState} from 'react';
import "./CSS/Header.css";
import TopHeader from './TopHeader';
import logo from './bidconnect.png';
import {Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";




const Header = () => {


  return (
<div>
<nav className="navbar">
  {/* LOGO */}
  <div className="logo">
    <img src={logo}  alt="Bidlist"/>
  </div>
  {/* NAVIGATION MENU */}
  <ul className="nav-links">
    {/* USING CHECKBOX HACK */}
    <input type="checkbox" id="checkbox_toggle" />
    <label htmlFor="checkbox_toggle" className="hamburger">
      ☰
    </label>
    {/* NAVIGATION MENUS */}
    <div className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li className="services">
        <Link to="/bidlist">Bidlist</Link>
        {/* DROPDOWN MENU */}
        <ul className="dropdown">
          <li>
            <Link to="/uk">UK </Link>
          </li>
          <li>
            <Link to="/us">US</Link>
          </li>
          <li>
            <Link to="/canada">Canada</Link>
          </li>
         
        </ul>
      </li>
      <li>
        <Link to="/bidlist">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  </ul>
</nav>

</div>
  );
};

export default Header;