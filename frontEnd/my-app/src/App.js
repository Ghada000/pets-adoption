import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';
import Chat from './Components/Chat.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ProductsFishes from './Components/ProductsFishes.jsx';
import ProductsDogs from './Components/ProductsDogs.jsx';
import ProductsCats from './Components/ProductsCats.jsx';
import CartList from './Components/CartList.jsx';

function App() {
  const [view, setView] = useState("");
  const [cart, setCart] = useState([]);

  const changeView = (newView) => {
    setView(newView);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Nav changeView={changeView} currentView={view} cart={cart} setCart={setCart} />
      <Slider />

      {view === "Chat" && <Chat />}
      {view === "AboutUs" && <AboutUs />}
      {view === "ProductsDogs" && <ProductsDogs addToCart={handleAddToCart} />}
      {view === "ProductsCats" && <ProductsCats addToCart={handleAddToCart} />}
      {view === "ProductsFishes" && <ProductsFishes addToCart={handleAddToCart} />}
      
      {(view === "Cart" && cart.length > 0) && <CartList cart={cart} setCart={setCart} />}
    </div>
  );
}

export default App;
