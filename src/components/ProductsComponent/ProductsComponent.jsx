import React from 'react'
import OneProductComponent from '../OneProductComponent/OneProductComponent'

import './ProductsComponent.css'


function ProductsComponent(props) {

    const {cartItem, products} = props

    return (
        <section className="products__div">
            <article className="oneProduct__div">
                <OneProductComponent products={products} cart={cartItem}/>
            </article>
        </section>
    )
}

export default ProductsComponent