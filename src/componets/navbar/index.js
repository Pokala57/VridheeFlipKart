import React from 'react';
import { FaSearch, FaShoppingCart,FaAngleDown } from 'react-icons/fa';
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">

  <div className='logoSearch'>
      <div className="navbar__logo">
           <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"alt="logo" class="logo"/>
            <div className='navLogoSub'>
             <p>Explore <span> Plus</span></p>
             <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt='plus' class="plus"/>
            </div>
      </div>

      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands and more" />
        <FaSearch className="search-icon" />
      </div>

   </div>



      <ul className="navbar__menu">
        <li className="navbar__menu-item">Pokala <FaAngleDown className="arrow-icon" /></li>
        <li className="navbar__menu-item">Become a Seller</li>
        <li className="navbar__menu-item">More <FaAngleDown className="arrow-icon" /> </li>
        <li className="navbar__menu-item">  <FaShoppingCart className="navbar__icon" /> Cart</li>
     
      </ul>

    </nav>
  );
};

export default Nav;
