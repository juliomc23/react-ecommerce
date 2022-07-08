import React from 'react'
import './ShoppingCartComponent.css'

function ShoppingCartComponent(props) {
  const { cartItem,addItem, removeItem} = props

  return (
    cartItem.map(product => (
      <div className="cart__div" key={product.id}>
        <img src={product.img} alt={product.title} className="productCart__img" />
        <span className="productCart__title">{product.title}</span>
        <span className="productCart__price">{product.price}€</span>
        <div className='buttons__div'>
          <button className='button__element--operation add' onClick={()=>addItem(product)}>+</button>
          <button className='button__element--operation remove' onClick={()=>removeItem(product)}>-</button>
        </div>

      </div>
    ))
  )
}

export default ShoppingCartComponent