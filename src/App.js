import { useEffect, useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

import Router from './Router';

function App() {

  const [cartItem, setCartItems] = useState(() => {
    return localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : []
  });

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {

      try {
        const req = await fetch('http://localhost:3004/products');
        const res = await req.json();

        setProduct(res)
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
  }, [])

  const addItem = (product) => {

    //Checks the variable localCart with a find, if it finds the item it returns it.
    const localCart = JSON.parse(localStorage.getItem('userCart'))
    const exist = localCart.find(item => item.id === product.id);
    
    //if the variable exist has something it updates the status by traversing the localCart and updating qty + 1, if it does not exist, it returns item
    if (exist) {
      setCartItems(
        localCart.map(item =>{
            return item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        }
        ))
      //if the exist variable has nothing, put in the cartItem the item it has with qty : 1
    } else {
        setCartItems([...cartItem, { ...product, qty: 1}])
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

  
  const [wishList, setWishList] = useState([])

  const addToWishlist = (product) => {
    setWishList(product)
    console.log(wishList)
  }

  

  return (
    <>
      <HeaderComponent cartItem={cartItem} />
      <Router cartItem={cartItem} setCartItems={setCartItems} addItem={addItem} removeItem={removeItem} products={products} setProduct={setProduct} addToWishlist={addToWishlist}/>
    </>
  );
}

export default App;