// App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';
import Products from './Components/Products.jsx';
import ShoppingCart from './Components/CartList.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (selectedProduct) => {
    setCart([...cart, selectedProduct]);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Nav handleToggleCart={handleToggleCart} />
      <Slider />
      <Products handleAddToCart={handleAddToCart} />
      {showCart && <ShoppingCart cart={cart} onDeleteItem={handleDeleteItem} />}
    </div>
  );
}

export default App;
