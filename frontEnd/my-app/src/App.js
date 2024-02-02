// import React , {useState} from 'react';
// import './App.css';
// import Nav from './Components/Nav.jsx';
// import Slider from './Components/Slider.jsx';
// import Products from './Components/Products.jsx';
// import Chat from './Components/Chat.jsx';
// // import Login from '../src/Login.jsx';


// function App() {
//   const[view,setView]=useState("")
 
//   const changeView = (newView)=>{
//     setView(newView)
//   }
//   return (
//     <div className="App">
//      <Nav changeView={changeView}/>

//       <Slider/>
//       <Products/> 

//       {view === "Chat" && <Chat changeView={changeView} />}
      
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';
import Products from './Components/Products.jsx';
import Chat from './Components/Chat.jsx';


function App() {
  const [view, setView] = useState("");

  const changeView = (newView) => {
    setView(newView);
  };
  
  return (
    <div className="App">
      <Nav changeView={changeView} />
      <Slider />
      {view === "Chat" && <Chat changeView={changeView} />}
     
      {view === "" || view === "Home" ? <Products /> : null}
    </div>
  );
}

export default App;