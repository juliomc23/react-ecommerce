import React from 'react'
import './ShoppingCartComponent.css'
import {Link} from 'react-router-dom'

function ShoppingCartComponent(props) {
  const { cartItem, addItem, removeItem } = props

  const price = cartItem.reduce((prev, curr) => (prev + curr.price * curr.qty), 0)

  if (cartItem.length === 0) {
    return (
      <div className='div__empty'>
        <div className='info__div'>
          <p className='empty__span'>Cart is empty...</p>
          <Link to='/' className='empty__span fill'>Buy something cool!</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className='div__cartInfo'>
        {cartItem.map((product) => (
          <div className="cart__div" key={product.id}>
            <img src={product.img.front} alt={product.title} className="productCart__img" />
            <span className="productCart__title">{product.title}</span>
            <span>{product.size}</span>
            <span className="productCart__price">{product.price}€</span>
            <div className='buttons__div'>
              <button className='button__element--operation add' onClick={() => addItem(product)}>+</button>
              <span className='span__qty'>{product.qty}</span>
              <button className='button__element--operation remove' onClick={() => removeItem(product)}>-</button>
            </div>
          </div>
        ))}
        <span className='span__amountInfo'>Total amount</span>
        <span className='span__amountInfo price'>{price}€</span>
        <Link to='/' className='span__buyMore'>I want to buy something more!</Link>
        <Link to='/checkout'>Process order</Link>
      </div>

    )

  }

}

export default ShoppingCartComponent