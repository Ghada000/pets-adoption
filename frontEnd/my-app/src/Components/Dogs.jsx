// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dogs() {
//   const [data, setData] = useState([]);
//   const [newDog, setNewDog] = useState({
//     name: '',
//     description: '',
//     image_Url: '',
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get("http://localhost:5000/api/dogs")
//       .then((response) => {
//         setData(response.data) 
//         console.log(data)  ;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdate = (id, updatedDog) => {
//     axios.put(`http://localhost:5000/api/dogs/${id}`, updatedDog)
//       .then(() => {
//         fetchData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/api/dogs/${id}`)
//       .then(() => {
//         fetchData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleAdd = () => {
//     axios.post('http://localhost:5000/api/dogs', newDog)
//       .then(() => {
//         fetchData();
//         // Clear the form after successful post
//         setNewDog({
//           name: '',
//           description: '',
//           image_Url: '',
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <p>{item.description}</p>
//           <img src={item.image_url} alt={item.name} />
//           <button onClick={() => handleUpdate(item.id, { name: 'Updated Name' })}>
//             Update
//           </button>
//           <button onClick={() => handleDelete(item.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
      
//       {/* Form for adding a new dog */}
//       <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newDog.name}
//           onChange={(e) => setNewDog({ ...newDog, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newDog.description}
//           onChange={(e) => setNewDog({ ...newDog, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newDog.image_Url}
//           onChange={(e) => setNewDog({ ...newDog, image_Url: e.target.value })}
//         />
//         <button type="submit">Add Dog</button>
//       </form>
//     </div>
//   );
// }

// export default Dogs;
