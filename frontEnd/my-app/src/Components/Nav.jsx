// Nav.jsx
import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import PetAdoptionList from './CartList'; // Import the ShoppingCart component

export default function Nav(props) {
  const [login, setLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    if (props.currentView !== "") {
      setShowCart(!showCart);
      props.changeView("Cart");
    } else {
      setShowCart(!showCart);
    }
  };

  const handleLoginClick = () => {
    setLogin(!login);
  };

  return (
    <div className='header-Nav'>
      <div className='Nav-logo'>
        <MdOutlinePets />
        <h6 className='name-logo'>PETS</h6>
      </div>

      <div>
        <ul className='nav-ul'>
          <li className='lii'>Home</li>
          <li onClick={() => props.changeView("Chat")} className='lii'>
            Q&A
          </li>
          <li onClick={() => props.changeView("AboutUs")} className='lii'>
            About Us
          </li>
          <li onClick={() => props.changeView("ProductsDogs")} className='lii'>
            Our Dogs
          </li>
          <li onClick={() => props.changeView("ProductsCats")} className='lii'>
            Our Cats
          </li>
          <li onClick={() => props.changeView("ProductsFishes")} className='lii'>
            Our Fishes
          </li>
        </ul>
      </div>

      <div className='Nav-login'>
        <FaCartShopping className='sh' onClick={handleCartClick} />
        <IoPersonSharp className='log' onClick={handleLoginClick} />
      </div>

      {login ? 
        <div className="lo">
          <div className="login-container">
            <TiDelete className='x' onClick={() => setLogin(!login)} />
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Login</button>
          </div>
        </div> 
        : null
      }

      {showCart && props.currentView !== "Home" ? 
        <div className="lo">
          <div className="login-container">
            <TiDelete className='x' onClick={() => setShowCart(false)} />
            <PetAdoptionList cart={props.cart} setCart={props.setCart} />
          </div>
        </div> 
        : null
      }
    </div>
  );
}
