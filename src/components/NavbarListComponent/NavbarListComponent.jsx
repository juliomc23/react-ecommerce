import React from 'react';
import './NavbarListComponent.css'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import QuantityComponent from '../QuantityComponent/QuantityComponent';
import { Link } from 'react-router-dom';


const NavbarListComponent = ({ cartItem }) => {

  return (
    <div className='navbar__div'>
      <ul className="ul__list">
        <li className="li__element"><Link to='/' className='link__to'>Home</Link></li>
        <li className="li__element">Man</li>
        <li className="li__element">Woman</li>
        <li className="li__element">Children</li>
        <li className="li__element">Sale</li>
      </ul>
      <div className='cart__div--icon'>
        <IconContext.Provider value={{ size: "2rem" }}>
          <Link to='/cart' className='link__cart'><FaShoppingCart /></Link>
          <Link to='/cart'><QuantityComponent cartItem={cartItem} /></Link>
        </IconContext.Provider>
      </div>
      <Link to='/login' className='link__to link__login'>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <FaUser />
        </IconContext.Provider>
      </Link>
    </div>

  )
}

export default NavbarListComponent