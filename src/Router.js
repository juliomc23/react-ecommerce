import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent'
import ErrorComponent from './components/ErrorComponent/ErrorComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'
import ProductComponent from './components/ProductComponent/ProductComponent'
import ProductsComponent from './components/ProductsComponent/ProductsComponent'
import RegisterComponent from './components/RegisterComponent/RegisterComponent'
import ShoppingCartComponent from './components/ShoppingCartComponent/ShoppingCartComponent'

function Router({setCartItems, cartItem, addItem, removeItem, products, setProduct, addToWishlist}) {

  return (
        <Routes>
            <Route exact path='/' element={< ProductsComponent cartItem={cartItem} setCartItems={setCartItems} addItem={addItem} removeItem={removeItem} products={products} setProduct={setProduct} />}/>
            <Route path='/login' element={<LoginComponent />}/>
            <Route path='/register' element={<RegisterComponent />} />
            <Route path='/cart' element={<ShoppingCartComponent cartItem={cartItem} addItem={addItem} removeItem={removeItem} />}/>
            <Route exact path='/product/:id' element={<ProductComponent products={products} addItem={addItem} addToWishlist={addToWishlist}/>}/>
            <Route path='/checkout' element={<CheckoutComponent />} />

            <Route path='*' element={<ErrorComponent />} />
        </Routes>
  )
}

export default Router