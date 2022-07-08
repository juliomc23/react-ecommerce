import React from 'react'

import './QuantityComponent.css'

function QuantityComponent(props) {
    const { cartItem } = props

    const qty = cartItem.reduce((prev, curr) => (prev + curr.qty), 0)
    return <span className='qty__span--num'>{qty}</span>
}

export default QuantityComponent