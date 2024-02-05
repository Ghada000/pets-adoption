

import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import '../App.css'


export default function ProductsDogs() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');
  const [up, setUp] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage_url, setNewImage_url] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/dogs')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (id) => {
    const updatedDog = { name, description, image_url };
    axios
      .put(`http://localhost:5000/api/dogs/${id}`, updatedDog)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/dogs/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddPost = () => {
    const newDog = { name: newName, description: newDescription, image_url: newImage_url };
    axios
      .post('http://localhost:5000/api/dogs', newDog)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Our Dogs</h1>

      <div className="List-Product">
        {data.map((e, i) => {
          return (
            <div key={i}>
              <div className="product">
                <img src={e.image_url} alt={e.name} />
                <div className="heart">
                  <h4 className="nameof">{e.name}</h4>
                  <FaRegHeart className="h" />
                </div>
                <div className="class">
                  <button className='btns' onClick={() => setUp(e.id)}>Update</button>
                  <button className='btns' onClick={() => handleDelete(e.id)}>Delete</button>
                </div>

                {up === e.id ? (
                  <div className="">
                    <div className="login-container">
                      <h2>Update</h2>
                      <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" value={name} onChange={(ee) => setName(ee.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="username">Description</label>
                        <input
                          type="text"
                          id="username"
                          value={description}
                          onChange={(ee) => setDescription(ee.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Image URL</label>
                        <input
                          type="password"
                          id="password"
                          value={image_url}
                          onChange={(ee) => setImage_url(ee.target.value)}
                          required
                        />
                      </div>
                      <button className='btns' onClick={() => handleUpdate(e.id)} type="submit">
                        Update
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="add-post">
        <h2>Add New Dog</h2>
        <div className="form-group">
          <label htmlFor="newName">Name</label>
          <input type="text" id="newName" value={newName} onChange={(ee) => setNewName(ee.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="newDescription">Description</label>
          <input type="text" id="newDescription" value={newDescription} onChange={(ee) => setNewDescription(ee.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="newImage_url">Image URL</label>
          <input type="text" id="newImage_url" value={newImage_url} onChange={(ee) => setNewImage_url(ee.target.value)} required />
        </div>
        <button className='btns' onClick={handleAddPost} type="button">
          Add Post
        </button>
      </div>
    </div>
  );
  ;
}
