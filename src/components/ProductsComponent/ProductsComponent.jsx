import React, { useEffect } from 'react'
import OneProductComponent from '../OneProductComponent/OneProductComponent'
import products from '../../products.js';
import ShoppingCartComponent from '../ShoppingCartComponent/ShoppingCartComponent';
import './ProductsComponent.css'
import FullAmountComponent from '../FullAmountComponent/FullAmountComponent';



function ProductsComponent(props) {

    const {setCartItems, cartItem} = props

    const addItem = (product) => {

        //Checks the variable localCart with a find, if it finds the item it returns it.
        const localCart = JSON.parse(localStorage.getItem('userCart'))
        const exist = localCart.find(item => item.id === product.id);

        //if the variable exist has something it updates the status by traversing the localCart and updating qty + 1, if it does not exist, it returns item
        if (exist) {
            setCartItems(
                localCart.map(item =>
                    item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
                ))
            //if the exist variable has nothing, put in the cartItem the item it has with qty : 1
        } else {
            setCartItems([...cartItem, { ...product, qty: 1 }])
        }
    }

    const removeItem = (product) => {

        //Checks the variable localCart with a find, if it finds the item it returns it.
        const localCart = JSON.parse(localStorage.getItem('userCart'))
        const exist = localCart.find(item => item.id === product.id);

        //here we check that if the qty === 1 we update the status filtering that the item.id is different to be able to delete it
        if (exist.qty === 1) {
            setCartItems(localCart.filter(item => item.id !== product.id))
        } else {
            //if the quantity is not 1 what it does is to subtract the quantity of the product until the if is fulfilled again
            setCartItems(
                localCart.map(item =>
                    item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
                ))
        }
    }

    //useEffect set the cartItem and depends from cartItem, to be watching it
    useEffect(() => {
        localStorage.setItem('userCart', JSON.stringify(cartItem))
    }, [cartItem])

    return (
        <section className="products__div">
            <article className="oneProduct__div">
                <OneProductComponent products={products} cart={cartItem} addItem={addItem} />
            </article>
            <div className="shoppingCart__div">
                <ShoppingCartComponent cartItem={cartItem} addItem={addItem} removeItem={removeItem} />
                <FullAmountComponent cartItem={cartItem} />
            </div>
        </section>
    )
}

export default ProductsComponent