// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function Cats() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:5000/api/cats")
// //       .then((response) => {
// //         setData(response.data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);
  
// //   return (
// //     <div>
// //       {data.map((item) => (
// //         <div key={item.id}>
// //           <h1>{item.name}</h1>
// //           <p>{item.description}</p>
// //           <img src={item.image_Url} alt={item.name} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Cats;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Cats() {
//   const [data, setData] = useState([]);
//   const [newCat, setNewCat] = useState({
//     name: '',
//     description: '',
//     image_Url: '',
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get("http://localhost:5000/api/cats")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdate = (id, updatedCat) => {
//     axios.put(`http://localhost:5000/api/cats/${id}`, updatedCat)
//       .then(() => {
//         fetchData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/api/cats/${id}`)
//       .then(() => {
//         fetchData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleAdd = () => {
//     axios.post('http://localhost:5000/api/cats', newCat)
//       .then(() => {
//         fetchData();
//         // Clear the form after successful post
//         setNewCat({
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
//           <img src={item.image_Url} alt={item.name} />
//           <button onClick={() => handleUpdate(item.id, { name: 'Updated Name' })}>
//             Update
//           </button>
//           <button onClick={() => handleDelete(item.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
      
//       {/* Form for adding a new cat */}
//       <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newCat.name}
//           onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newCat.description}
//           onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newCat.image_Url}
//           onChange={(e) => setNewCat({ ...newCat, image_Url: e.target.value })}
//         />
//         <button type="submit">Add Cat</button>
//       </form>
//     </div>
//   );
// }

// export default Cats;
