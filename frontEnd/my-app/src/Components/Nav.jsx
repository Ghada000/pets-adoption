// Nav.jsx
import React, { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import Slider from './Slider';
import Login from './Login';
import ShoppingCart from './CartList'; // Import ShoppingCart

export default function Nav({ handleDeleteItem }) {
  const [login, setLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="header-Nav">
      <div className="Nav-logo">
        <MdOutlinePets />
        <h6 className="name-logo">PETS</h6>
      </div>

      <div>
        <ul className="nav-ul">
          <li className="lii">Home </li>
          <li className="lii">Q&A</li>
          <li className="lii">About Us</li>
        </ul>
      </div>

      <div className="Nav-login">
        <FaCartShopping className="sh" onClick={handleToggleCart} />
        <IoPersonSharp className="log" onClick={() => setLogin(!login)} />
      </div>

      {login ? (
        <div className="lo">
          {/* Login content */}
        </div>
      ) : null}

      {showCart && <ShoppingCart cart={[]} onDeleteItem={handleDeleteItem} />} {/* Pass the correct props */}
    </div>
  );
}
