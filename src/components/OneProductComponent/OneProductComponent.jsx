import React from 'react'
import './OneProductComponent.css'

function OneProductComponent(props) {
    const { products, addItem } = props


    return (
        products.map(product => (
            <div className='product__card' key={product.id}>
                <span className='product__title'>{product.title}</span>
                <img className='product__img' src={product.img} alt={product.title} />
                <span className='product__price' >{product.price}€</span>
                <button className='product__button--add' onClick={()=>addItem(product)}>Add</button>
            </div>
        ))
    )
}

export default OneProductComponent