
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import '../App.css'
export default function ProductsCats() {
  const [data, setData] = useState([]);
  const [newCat, setNewCat] = useState({
    name: '',
    description: '',
    image_Url: '',
  });

  const fetchData = () => {
    axios.get("http://localhost:5000/api/cats")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    axios.post('http://localhost:5000/api/cats', newCat)
      .then(() => {
        fetchData();
        // Clear the form after a successful post
        setNewCat({
          name: '',
          description: '',
          image_Url: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Our Cats</h1>

      <div className='List-Product'>
        {data.map((cat, index) => (
          <div className='product' key={index}>
            <img src={cat.image_url} alt={`Cat ${index}`} />
            <div className='heart'>
              <h4 className='nameof'>{cat.name}</h4>
              <FaRegHeart className='h' />
            </div>
            <div className='class'>
              <button className='btns'>Update</button>
              <button className='btns'>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
        <input
          type="text"
          placeholder="Name"
          value={newCat.name}
          onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newCat.description}
          onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCat.image_Url}
          onChange={(e) => setNewCat({ ...newCat, image_Url: e.target.value })}
        />
        <button type="submit"   className='btns'>Add Cat</button>
      </form>
    </div>
  );
}

