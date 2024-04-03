import React from 'react'
import { useState } from 'react'
// import {IoClose,IoMenu} from react-icons;
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import { useMediaQuery } from "@uidotdev/usehooks";
import { IoMenuSharp ,IoClose} from "react-icons/io5";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isMobile = useMediaQuery( " (max-width : 980px)");
  const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMobile = ()=>{

    if (isMobile) {
      setIsMenuOpen(false);
    }
  }

  const renderLinks = ()=>{
    const listClassName = isMobile ? "nav-list" : "nav-list-web";
    const linkClassName = "link-styling";
    const buttonClassName = "get-started";
    return(
      <ul className={listClassName}>

            <li className="nav-item">
            <Link className={linkClassName} to="/about" reloadDocument onClick={closeMenuOnMobile}>About</Link>
            </li>
            
            {/* <Link className='link-styling'>Services</Link> */}
            <li className="nav-item">
            <Link className={linkClassName} onClick={closeMenuOnMobile}>DiscoGraphy</Link>
            </li>
            
            <li className="nav-item">
            <Link className={linkClassName} onClick={closeMenuOnMobile}>MusicDistribution</Link>
            </li>
            
            <li className="nav-item">
            <Link className={linkClassName} onClick={closeMenuOnMobile}>Blog</Link>
            </li>
            <li className="nav-item">  
            <Link className={linkClassName} to="/contact" onClick={closeMenuOnMobile} reloadDocument>Contact</Link>
            </li>
            <li className="nav-item-without-text-deco">
            <Link to="/register" onClick={closeMenuOnMobile} reloadDocument>
            <div className={`${linkClassName} ${buttonClassName}`} onClick={closeMenuOnMobile}>GetStarted</div>
            </Link>
              
            </li>
          </ul>
    )
  }


  
  return (
    <header className='header'>

    <nav className='navbar'>
        <div className='logo'>
            <Link className='logo-link' to='/' reloadDocument><img src="./nav-logo.png" alt="" /></Link>
            <Link className='logo-link' to='/' reloadDocument><h1>
              PindHoodRecords
              </h1>
              </Link>
        </div>
        {/* <div className={`navbar-container-sm  ${showMenu ? "show-menu":""}`} >
          <button onClick={toggleMenu}>services</button>
        </div> */}
        {isMobile && (
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenuSharp />
          </div>
        )}
        {isMobile ? (
          <div
          className={`nav-menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
          >
            {renderLinks()}
            <div className="nav-close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderLinks()
          )}
      
    </nav>
    </header>
  )
}

export default Navbar
