import React from 'react'

import './FullAmountComponent.css'

function FullAmountComponent(props) {
    const { cartItem } = props
    const price = cartItem.reduce((prev, curr) => (prev + curr.price * curr.qty), 0)

    const qty = cartItem.reduce((prev, curr) => (prev + curr.qty), 0)

    return cartItem.length === 0
        ?
        <div className='info__div'>
            <p className='empty__span'>Cart is empty...</p>
            <p className='empty__span fill'>Fill it!</p>
        </div>
        :
        <div className='amount__div'>
            <p className='price__paragraph'>Total amount: {price}€</p>
            <span className='qty__span'>Quantity: {qty}</span>
        </div>
}

export default FullAmountComponent