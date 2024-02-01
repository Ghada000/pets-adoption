import React ,{useState} from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { TiDelete  } from "react-icons/ti";

import Slider from './Slider';
import Login from './Login';


export default function Nav() {
const [ login, setlogin  ] = useState(false)

  return (
    
    <div className='header-Nav' >

    <div className='Nav-logo'>
    <MdOutlinePets/>
    <h6 className='name-logo'>PETS</h6>
    </div>


    <div >
    <ul className='nav-ul'>
    <li className='lii'>Home </li>
 <li className='lii'>Q&A</li>
 <li className='lii'>About Us</li>


     </ul>


    </div>

    


    <div className='Nav-login'>
    
    <FaCartShopping className='sh' />
    <IoPersonSharp className='log' onClick={()=> setlogin( !login ) }/>


    </div>

    

    {login ? <div className="lo">
    <div className="login-container">
    <TiDelete  className='x' onClick={()=>{ setlogin(!login)}} />
      <h2>Login</h2>
     
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
         
          
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            
           
            required
          />
        </div>
        <button type="submit" >Login</button>
      

    
    </div>
  </div> : null }


    </div>
    

     
    
  )
}
