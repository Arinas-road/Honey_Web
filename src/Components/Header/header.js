import React, { useState } from 'react';
import Hamburger from '../UI/Hamburger';
import logo from '../../Img/logo.png'
import HeaderMain from './HeaderMain';
import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {
   const [isBurgerOpen, setIsBurgerOpen] = useState(false);
   const changeBurger = () => {
      setIsBurgerOpen(!isBurgerOpen)
   }
   return(
      <React.Fragment>
         <div className='navigation'>
            <div className='logo-header-img'>
               <img src={logo}></img>
            </div>
            <ul style={{ animation: isBurgerOpen && 'slideOut 0.5s forwards', display: isBurgerOpen && 'flex' }}>
               <Link className='navigation-li' to="#header" smooth>Home</Link>
               <Link className='navigation-li' to="#main" smooth>About</Link>
               <Link className='navigation-li' to="#contact" smooth>Contact us</Link>
            </ul>
            <div className='hamburger' onClick={changeBurger}>
               <Hamburger isOpen={isBurgerOpen}/>
            </div>
         </div>
         <HeaderMain/>
      </React.Fragment>
   )
}

export default Header