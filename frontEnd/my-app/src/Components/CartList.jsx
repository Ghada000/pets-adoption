// CartList.jsx
import React, { useState, useEffect } from 'react';

function CartList({ cart, setCart }) {
  const [adopterInfo, setAdopterInfo] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdopterInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const calculateTotalAdoptionFee = () => {
    return cart.reduce((total, pet) => {
      const adoptionFee = parseFloat(pet.adoptionFee);

      if (!isNaN(adoptionFee)) {
        return total + adoptionFee;
      } else {
        console.error(`Invalid adoption fee for pet: ${pet.name}`);
        return total;
      }
    }, 0);
  };

  const handleAdoptPet = () => {
    console.log('Adopting pet with adopter info:', adopterInfo);
    alert('Pet adopted successfully!');
  };

  const handleRemovePet = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log('Cart in CartList:', cart);
  }, [cart]);

  if (!cart || !Array.isArray(cart)) {
    console.error('Invalid cart data:', cart);
    return <div>Error loading cart</div>;
  }

  return (
    <div className="cart-list">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((pet, index) => (
          <li key={index}>
            {pet.name} - Adoption Fee: {pet.adoptionFee} TND
            <button onClick={() => handleRemovePet(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Adoption Fee: {calculateTotalAdoptionFee()} TND</p>

      <div className="adoption-container">
        <h3>Adopter Information</h3>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={adopterInfo.name} onChange={handleChange} />

          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={adopterInfo.phoneNumber} onChange={handleChange} />

          <label>Address:</label>
          <input type="text" name="address" value={adopterInfo.address} onChange={handleChange} />
        </form>
        <button onClick={handleAdoptPet}>Adopt Pet</button>
      </div>
    </div>
  );
}

export default CartList;
