import React,{useState} from 'react';
import "./CSS/Header.css";
import TopHeader from './TopHeader';
import logo from './bidconnect.png';
import {Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import { CSSTransition } from 'react-transition-group';



const Header = () => {

    
  const [isMenu, setisMenu] = React.useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};

  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }else {
      boxClassSubMenu.push('');
  }

  return (
    <header className="header__middle">
        <div className="container_header">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <Link exact activeClassName='is-active' to="/">
                    <img src={logo} alt="logo" /> 
                    </Link>
                </div>

                <div className="header__middle__menus">
              
      
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <Link exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </Link> 
                    </li>
                    <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </Link> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/bidlist"> Bidlist <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <Link onClick={toggleClass} activeClassName='is-active'  to={`/uk`}> UK </Link> </li>
                            <li><Link onClick={toggleClass} activeClassName='is-active' to={`/us`}> US </Link> </li>
                            <li><Link onClick={toggleClass} activeClassName='is-active' to={`/ca`}> Canada </Link> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </Link> </li>
                    <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' to={`/project`}> Projects </Link> </li>
                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
  );
};

export default Header;