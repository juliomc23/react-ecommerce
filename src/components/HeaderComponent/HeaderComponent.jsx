import React from 'react'
import NavbarListComponent from '../NavbarListComponent/NavbarListComponent'
import './HeaderComponent.css'

const HeaderComponent = (props) => {

  const {cartItem} = props

  return (
    <div className="header__div">
    <NavbarListComponent cartItem={cartItem}/>
    </div>
  )
}

export default HeaderComponent