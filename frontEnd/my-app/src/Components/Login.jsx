import React from 'react'


export default function Login() {
  return (
   
    <div className="lo">
    <div className="login-container">
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
        <button type="submit">Login</button>
    
    </div>
  </div>
    
  )
}
