import React, { useState } from 'react';
import './Health.css';

const HealthCare = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    exercise: '',
    animalType: '', // Added animalType field
  });

  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Perform checks based on norms and set response
    let animalResponse = 'Your pet is fine.';

    const normWeight = 15; // Set the norm weight for all animals

    if (formData.weight > normWeight) {
      animalResponse = 'Your pet is overweight. Consider reducing the food.';
    } else if (formData.weight < normWeight) {
      animalResponse = 'Your pet needs to eat more for better health.';
    }

    // Additional conditions for different animal types
    if (formData.animalType === 'cat') {
      // Add specific conditions for cats
      // Example: Check if age is less than 5 for a kitten
      if (formData.age < 5) {
        animalResponse = 'Your kitten is doing well!';
      }
    } else if (formData.animalType === 'dog') {
      // Add specific conditions for dogs
      // Example: Check if exercise is less than 30 minutes for a sedentary dog
      if (formData.exercise < 30) {
        animalResponse = 'Your dog needs more exercise for optimal health.';
      }
    } else if (formData.animalType === 'rabbit') {
      // Add specific conditions for rabbits
      // Example: Check if weight is less than 2 for a small rabbit
      if (formData.weight < 2) {
        animalResponse = 'Your small rabbit is doing well!';
      }
    } else if (formData.animalType === 'fish') {
      // Add specific conditions for fish
      // Example: Check if height is 0 for a fish
      if (formData.height === 0) {
        animalResponse = 'Your fish is doing well!';
      }
    }

    setResponse(animalResponse);
  };

  return (
    <div className="health-care">
      <div className="image-container">
        {/* Dog image goes here */}
        <img src="https://i.pinimg.com/564x/18/05/9e/18059e4da2911e58c4fd0e4b824c57a8.jpg" alt="Dog" />
      </div>
      <div className="form-container">
        <h2 >Health Care Information</h2>
        <form>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Weight:
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Exercise (minutes per day):
            <input
              type="text"
              name="exercise"
              value={formData.exercise}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Animal Type:
            <select
              name="animalType"
              value={formData.animalType}
              onChange={handleInputChange}
            >
              <option value="">Select Animal Type</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="fish">Fish</option>
            </select>
          </label>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {response && <p className="response">{response}</p>}
      </div>
    </div>
  );
};

export default HealthCare;
