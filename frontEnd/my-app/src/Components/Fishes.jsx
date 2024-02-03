// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Fishes() {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     axios.get("http://localhost:5000/api/fishes")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <p>{item.description}</p>
//           <img src={item.image_Url} alt={item.name} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Fishes;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fishes() {
  const [data, setData] = useState([]);
  const [newFish, setNewFish] = useState({
    name: '',
    description: '',
    image_Url: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/fishes")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id, updatedFish) => {
    axios.put(`http://localhost:5000/api/fishes/${id}`, updatedFish)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/fishes/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = () => {
    axios.post('http://localhost:5000/api/fishes', newFish)
      .then(() => {
        fetchData();
        // Clear the form after successful post
        setNewFish({
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
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img src={item.image_Url} alt={item.name} />
          <button onClick={() => handleUpdate(item.id, { name: 'Updated Name' })}>
            Update
          </button>
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
      
      {/* Form for adding a new fish */}
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
        <input
          type="text"
          placeholder="Name"
          value={newFish.name}
          onChange={(e) => setNewFish({ ...newFish, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newFish.description}
          onChange={(e) => setNewFish({ ...newFish, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newFish.image_Url}
          onChange={(e) => setNewFish({ ...newFish, image_Url: e.target.value })}
        />
        <button type="submit">Add Fish</button>
      </form>
    </div>
  );
}

export default Fishes;
