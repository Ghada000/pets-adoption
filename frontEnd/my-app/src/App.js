import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';
import Products from './Components/Products.jsx';
import Chat from './Components/Chat.jsx';
import AboutUs from './Components/AboutUs.jsx';

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
      {view === "AboutUs" ? <AboutUs /> : null}
      {view === "" || view === "Home" ? <Products /> : null}
    </div>
  );
}

export default App;