import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PetCareArticles.css'; // You can create a CSS file for styling

const PetCareArticles = () => {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <h1 className='title'>All you need to know about your new pet</h1>
      <div className="pet-care-articles">
    
        <article className="pet-article">
          <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pet 1" />
          <div className="article-content">
            <h2>Tips for Caring for Your New Dog</h2>
            <p>
              Bringing a rescue dog into your home is an exciting journey that requires patience and responsible care. As your new companion adjusts to a different environment
            </p>
            <button className='o9ros' onClick={() => toggleModal(`
              , provide a calm and comfortable space for them. Establishing a routine for feeding, walks, and playtime creates a sense of security. Schedule a vet check-up to address any health concerns and set up a wellness plan. Ensure your dog has proper identification and consider microchipping for added security. Use positive reinforcement training to teach commands and foster good behavior., Introduce your dog to new environments and people gradually for positive socialization. Provide a nutritious diet suitable for their needs and engage in regular exercise to maintain their well-being. Establish a grooming routine based on their coat type and make it a positive experience. Spend quality time bonding through play, walks, and affection. Monitor your dog's behavior, paying attention to cues and seeking professional advice if needed. Shower your new companion with love, kindness, and patience as you build a lasting and trusting relationship. Adopting a rescue dog is a rewarding commitment that, with understanding and care, leads to a lifelong bond.
            `)}>
              Read More
            </button>
          </div>
        </article>

        {/* Article 2 */}
        <article className="pet-article">
         
          <img src="https://images.unsplash.com/photo-1560115246-30778a6578be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pet 2" />
          <div className="article-content">
          <h2> A Guide for Cat Owners</h2>
          <p>
          Adopting a new cat is a heartwarming experience that requires thoughtful care to ensure a smooth transition into their new home. 
          </p>
          
          
          <button className='o9ros' onClick={() => toggleModal(`Allow your new feline friend to explore at their own pace, creating a quiet and safe space where they can retreat if needed. Cats appreciate consistency, so establish a routine for feeding, playtime, and litter box maintenance to provide a sense of security.  Create a stimulating environment with scratching posts, cozy resting spots, and interactive toys. Cats thrive on vertical space, so provide perches or cat trees for climbing and observing their surroundings. Regular grooming, such as brushing and nail trimming, helps maintain your cats coat and overall well-being.
                  Litter box cleanliness is crucial. Scoop daily and choose a litter your cat prefers. Place the litter box in a quiet, accessible location. Monitor your cats behavior and seek veterinary advice if you notice any sudden changes, as cats may hide signs of illness'`)}>
            Read More
          </button>
         </div> 
        </article>

        {/* Article 3 */}
        <article className="pet-article">
         
          <img src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pet 3" />
          <div className="article-content">
          <h2> Tips for Aquarium Enthusiasts</h2>
          <p>
          Welcoming a new fish into your aquarium requires attention to detail and a commitment to their well-being. Research the specific needs of your fish species , including with 
          </p>


          <button className='o9ros' onClick={() => toggleModal(` including water parameters, tank size, and potential tankmates. Gradually introduce new fish to the aquarium to minimize stress and territorial conflicts. Regular water changes and proper maintenance contribute to a thriving aquarium.  Consider the compatibility of different fish species to avoid conflicts and ensure a harmonious community. Seek advice from knowledgeable sources or a local aquarium store to make informed decisions about tankmates. Providing a serene and well-maintained space helps your fish flourish.
                  Remember that each fish has unique preferences, and understanding their behavior enhances your ability to care for them effectively. With proper attention to water quality, feeding, and environmental enrichment, you can create a joyful and healthy life for your aquatic companion.`)}>
            Read More
          </button>
          </div>
        </article>
      </div>

      {/* Modal */}
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Extended Content</Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: modalContent }} />
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PetCareArticles;
