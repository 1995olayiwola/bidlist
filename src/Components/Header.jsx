import React from 'react';
import {Link} from 'react-router-dom';
import "./CSS/Header.css";
import TopHeader from './TopHeader';
import logo from "./bidconnect.png";

const Header = () => {
  return (
    <div className='container'>
      <TopHeader/>
      <div className='subHead'>
        
      <img src={logo} alt="bidconnect" height="70px"/>
      <ul className='headList'>
      <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About US</li></Link>
        <Link to="/bidlist"><li>Bid Lists</li></Link>
        <Link to="/contact"><li>Contact Us</li></Link>
        <Link to="/project"><li>Projects</li></Link>
        <Link to="/tender"><li>Tenders</li></Link>
        <Link to="/signup"><li>Create free account</li></Link>

      </ul>

      </div>
      
        
    </div>
  )
}

export default Header