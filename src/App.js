import { useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ProductsComponent from './components/ProductsComponent/ProductsComponent';


function App() {

  const [cartItem, setCartItems] = useState(() => {
    return localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : []
  });

  return (
    <>
      <HeaderComponent cartItem={cartItem}/>
      <ProductsComponent cartItem={cartItem} setCartItems={setCartItems}/>
    </>
  );
}

export default App;