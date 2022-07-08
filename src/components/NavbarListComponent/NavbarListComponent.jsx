import React from 'react';
import './NavbarListComponent.css'
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import QuantityComponent from '../QuantityComponent/QuantityComponent';


const NavbarListComponent = ({ cartItem }) => {

  return (
    <div className='navbar__div'>
      <ul className="ul__list">
        <li className="li__element">Home</li>
        <li className="li__element">Man</li>
        <li className="li__element">Woman</li>
        <li className="li__element">Children</li>
        <li className="li__element">Sale</li>
      </ul>
      <div className='cart__div--icon'>
      <IconContext.Provider value={{ size: "2rem" }}>
          <FaShoppingCart />
          <QuantityComponent cartItem={cartItem} />
        </IconContext.Provider>
      </div>
    </div>

  )
}

export default NavbarListComponent