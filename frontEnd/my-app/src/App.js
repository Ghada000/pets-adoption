import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';

import Chat from './Components/Chat.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ProductsFishes from './Components/ProductsFishes.jsx';
import ProductsDogs from './Components/ProductsDogs.jsx';
import ProductsCats from './Components/ProductsCats.jsx';


function App() {
  const [view, setView] = useState("");

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <Nav changeView={changeView} />
      <Slider />
      {view === "Chat" ? <Chat /> : null}
      {view === "ProductsDogs" ? <ProductsDogs /> : null}
      {view === "ProductsCats" ? <ProductsCats /> : null}
      {view === "ProductsFishes" ? <ProductsFishes/> : null}

    

    </div>
  );
}

export default App;