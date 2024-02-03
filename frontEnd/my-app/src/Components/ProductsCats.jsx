import React ,{useEffect,useState}from 'react'
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios'

export default function ProductsCats() {
const [data,setData]=useState([])
useEffect(()=>{
axios
.get('http://localhost:5000/api/cats')
.then ((res)=>{
  setData(res.data)
})
.catch((error)=>{
  console.log(error);
})
},[])
console.log(data);





  return (
    <div >


    <h1> Our Cats  </h1>

    <div className='List-Product'>
{data.map((e,i)=>{
return (
  <div className='product'>


  <img src={e.image_url}  />
    <div className='heart'>
    <h4 className='nameof'>{e.name}</h4>
    <FaRegHeart className='h'/>
    </div>
    <div className='class'>
<button>Update</button>
<button>Delete</button>


    </div>
    
    
    </div> )
    })}
    
    
   
    
    
    </div>

    
    </div>
  )
}
