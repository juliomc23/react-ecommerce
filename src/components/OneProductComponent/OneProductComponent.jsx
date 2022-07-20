import React from 'react'
import { Link } from 'react-router-dom';


import './OneProductComponent.css'


function OneProductComponent(props) {
    const { products } = props

    

    return (
        products.map(product => (
            <Link to={"/product/" + product.id} className='product__card' key={product.id}>
                <span className='product__title'>{product.title}</span>
                <img className='product__img' src={product.img.front} alt={product.title} />
                <span className='product__price' >{product.price}€</span>
                
            </Link>
        ))
    )
}

export default OneProductComponent