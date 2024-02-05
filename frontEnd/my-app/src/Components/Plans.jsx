import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faFish,
  faShieldDog,
  faHeartMusicCameraBolt,
  faBitcoinSign,
  faMagnifyingGlassLocation,
  faShoppingBasket,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import './plan.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const PlanSection = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // You can perform any necessary actions here, e.g., send data to a server
    // For now, let's just set a message
    setSubmitMessage('Thank you! We will call you soon.');
  };

  const closeModal = () => {
    setSubmitMessage(''); // Clear the message when closing the modal
    setIsModalOpen(false);
  };

  const addToBucket = (plan) => {
    setSelectedPlans([...selectedPlans, plan]);
  };

  const removeFromBucket = (index) => {
    const updatedPlans = [...selectedPlans];
    updatedPlans.splice(index, 1);
    setSelectedPlans(updatedPlans);
  };
  const plans = [
    {
      title: 'Pet Care',
      duration: '1 day',
      features: ['Pet Room', 'Pet Grooming', 'Pet Exercise', 'Pet Meals'],
      price: 50,
      icon: faMagnifyingGlassLocation,
    },
    {
      title: 'Pet Care',
      duration: '5 days',
      features: ['Pet Room', 'Pet Grooming', 'Pet Exercise', 'Pet Meals'],
      price: 120,
      icon: faFish,
    },
    {
      title: 'Pet Care',
      duration: '15 days',
      features: ['Pet Room', 'Pet Grooming', 'Pet Exercise', 'Pet Meals'],
      price: 400,
      icon: faShieldDog,
    },
    {
      title: 'Pet Care',
      duration: '25 days',
      features: ['Pet Room', 'Pet Grooming', 'Pet Exercise', 'Pet Meals'],
      price: 600,
      icon: faHeartMusicCameraBolt,
    },
    {
      title: 'Pet Care',
      duration: '50 days',
      features: ['Pet Room', 'Pet Grooming', 'Pet Exercise', 'Pet Meals'],
      price: 800,
      icon: faBitcoinSign,
    },
  ];

  return (
    <section className="plan" id="plan">
      <h1 className="heading">
        Choose a <span>plan</span>
      </h1>
      <div className="box-container">
        {/* Mapping over plans to display boxes */}
        {plans.map((plan, index) => (
          <div className="box" key={index}>
            <h3 className="title">{plan.title}</h3>
            <h3 className="day">{plan.duration}</h3>
            <FontAwesomeIcon icon={plan.icon} className="icon" />
            <div className="list">
              {plan.features.map((feature, i) => (
                <p key={i}>
                  {feature} <FontAwesomeIcon icon={faCheck} />
                </p>
              ))}
            </div>
            <div onClick={() => addToBucket(plan)} className="buy-button">
              Buy Plan <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
          </div>
        ))}
      </div>

      {/* Displaying the shopping basket icon with badge */}
      <div className="bucket-icon" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faShoppingBasket} />
        {selectedPlans.length > 0 && <span className="badge">{selectedPlans.length}</span>}
      </div>

      {/* Modal for displaying selected plans and form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '300px',
            maxHeight: '400px',
            margin: 'auto',
            borderRadius: '32px'
          },
        }}
      >
        <div className="bucket-modal">
          <h2>Your Bucket</h2>
          <div className="close-icon" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          {selectedPlans.map((selectedPlan, index) => (
            <div key={index} className="selected-plan">
              <p>
                {selectedPlan.title} ({selectedPlan.duration})
              </p>
              <div className="cancel-icon" onClick={() => removeFromBucket(index)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            </div>
          ))}
          {/* Form for name, number, and submit button */}
          <div className="form-container">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Your Number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
            <button id='submit' onClick={handleSubmit}>Submit</button>
            {submitMessage && <p className="thank-you-message">{submitMessage}</p>}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default PlanSection;
