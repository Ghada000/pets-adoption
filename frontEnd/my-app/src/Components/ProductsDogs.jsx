import React ,{useEffect,useState}from 'react'
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios'

export default function ProductsDogs() {
const [data,setData]=useState([])
const [name,setName]=useState('')
const [description,setDescription]=useState('')
const [image_url,setImage_url]=useState('')
const [up,setUp]=useState('')
useEffect(()=>{
axios
.get('http://localhost:5000/api/dogs')
.then ((res)=>{
  setData(res.data)
})
.catch((error)=>{
  console.log(error);
})
},[])
console.log(data);
const handleUpdate = (id) => {
  const updatedDog={name,description,image_url}
  console.log(updatedDog)
  axios.put(`http://localhost:5000/api/dogs/${id}`,updatedDog)
    .then(() => {
      window.location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/api/dogs/${id}`)
    .then(() => {
      window.location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
};





  return (
    <div >


    <h1> Our Dogs  </h1>

    <div className='List-Product'>
{data.map((e,i)=>{
return (
<div>



  <div className='product'>


  <img src={e.image_url}  />
    <div className='heart'>
    <h4 className='nameof'>{e.name}</h4>
    <FaRegHeart className='h'/>
    </div>
    <div className='class'>
<button onClick={()=>setUp(e.id)}>Update</button>
<button onClick={()=>handleDelete(e.id)}>Delete</button>
</div>

{up === e.id ? (<div className="">
    <div className="login-container">
      <h2>Update</h2>
     
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
         value={name}
         onChange={(ee)=>setName(ee.target.value)}
          
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="username">Description</label>
          <input
            type="text"
            id="username"
            value={description}
            onChange={(ee)=>setDescription(ee.target.value)}
         
          
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="password">image_url</label>
          <input
            type="password"
            id="password"
            value={image_url}
            onChange={(ee)=>setImage_url(ee.target.value)}
            
           
            required
          />
        </div>
        <button onClick={()=>handleUpdate(e.id)} type="submit">Update</button>
    
    </div>
  </div>
) : null}

    </div>
    
    </div> )
    })}
    
    
   
    
    
    </div>

    
    </div>
  )
}
