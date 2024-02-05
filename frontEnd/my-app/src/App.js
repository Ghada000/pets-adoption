// // import React, { useState } from 'react';
// // import './App.css';
// // import Nav from './Components/Nav.jsx';
// // import Slider from './Components/Slider.jsx';
// // import Chat from './Components/Chat.jsx';
// // // import AboutUs from './Components/AboutUs.jsx';
// // import ProductsFishes from './Components/ProductsFishes.jsx';
// // import ProductsDogs from './Components/ProductsDogs.jsx';
// // import ProductsCats from './Components/ProductsCats.jsx';
// // import PetCareArticles from './Components/PetCareArticles.jsx'
// // import Plans from './Components/Plans.jsx'
// // import HealthCare from './Components/HealthCare.jsx';
// // // import QRCodeComponent from './Components/QRCodeComponent'
// // import AboutUs  from './Components/AboutUs.jsx';


// // function App() {
// //   const [view, setView] = useState("");
// //   const [cart, setCart] = useState([]);

// //   const changeView = (newView) => {
// //     setView(newView);
// //   };

// //   const handleAddToCart = (product) => {
// //     setCart([...cart, product]);
// //   };

// //   return (
// //     <div className="App">
// //       <Nav changeView={changeView} currentView={view} cart={cart} setCart={setCart} />
// //       <Slider />
// //       {view === "Chat" ? <Chat /> : null}
// //       {view === "ProductsDogs" ? <ProductsDogs /> : null}
// //       {view === "ProductsCats" ? <ProductsCats /> : null}
// //       {view === "ProductsFishes" ? <ProductsFishes/> : null}
// //       {view === "AboutUs" ? <AboutUs/> : null}
     
// //       {(!view || view === "") && <PetCareArticles />}
// //       {(!view || view === "") && <Plans />}
// //       {(!view || view === "") && <HealthCare />}
// //       {/* {(!view || view === "") && <QRCodeComponent />} */}

    

// //       {view === "Chat" && <Chat />}
// //       {view === "AboutUs" && <AboutUs />}
// //       {view === "ProductsDogs" && <ProductsDogs addToCart={handleAddToCart} />}
// //       {view === "ProductsCats" && <ProductsCats addToCart={handleAddToCart} />}
// //       {view === "ProductsFishes" && <ProductsFishes addToCart={handleAddToCart} />}
      
// //       {(view === "Cart" && cart.length > 0) && <CartList cart={cart} setCart={setCart} />}
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Nav from './Components/Nav.jsx';
// import Slider from './Components/Slider.jsx';
// import Chat from './Components/Chat.jsx';
// import ProductsFishes from './Components/ProductsFishes.jsx';
// import ProductsDogs from './Components/ProductsDogs.jsx';
// import ProductsCats from './Components/ProductsCats.jsx';
// import PetCareArticles from './Components/PetCareArticles.jsx';
// import Plans from './Components/Plans.jsx';
// import HealthCare from './Components/HealthCare.jsx';
// // import QRCodeComponent from './Components/QRCodeComponent'
// import AboutUs  from './Components/AboutUs.jsx';
// import CartList from './Components/CartList.jsx'
// import Footer from './Components/Footer.jsx'


// function App() {
//   const [view, setView] = useState("");

//   const [cart, setCart] = useState([]);
 
//   const changeView = (newView) => {
//     setView(newView);
//   };

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="App">
//       <Nav changeView={changeView} currentView={view} cart={cart} setCart={setCart} />
//       <Slider />
//       {view === "Chat" ? <Chat /> : null}
//       {view === "ProductsDogs" ? <ProductsDogs /> : null}
//       {view === "ProductsCats" ? <ProductsCats /> : null}
//       {view === "ProductsFishes" ? <ProductsFishes/> : null}
//       {view === "AboutUs" ? <AboutUs/> : null}
    
     
//       {(!view || view === "") && <PetCareArticles />}
//       {(!view || view === "") && <Plans />}
//       {(!view || view === "") && <HealthCare />}
//       {/* {(!view || view === "") && <QRCodeComponent />} */}
      
    

//       {view === "Chat" && <Chat />}
//       {view === "ProductsDogs" && <ProductsDogs addToCart={handleAddToCart} />}
//       {view === "ProductsCats" && <ProductsCats addToCart={handleAddToCart} />}
//       {view === "ProductsFishes" && <ProductsFishes addToCart={handleAddToCart} />}
     
      
//       {(view === "PetCareArticles" || view === "") && <PetCareArticles />}
//       {(view === "Plans" || view === "") && <Plans />}
//       {(view === "HealthCare" || view === "") && <HealthCare />}
//       {/* {(view === "QRCodeComponent" || view === "") && <QRCodeComponent />} */}

//       {(view === "Cart" && cart.length > 0) && <CartList cart={cart} setCart={setCart} />}
//         <div>
//       <Footer/>

//         </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.jsx';
import Slider from './Components/Slider.jsx';
import Chat from './Components/Chat.jsx';
import ProductsFishes from './Components/ProductsFishes.jsx';
import ProductsDogs from './Components/ProductsDogs.jsx';
import ProductsCats from './Components/ProductsCats.jsx';
import PetCareArticles from './Components/PetCareArticles.jsx';
import Plans from './Components/Plans.jsx';
import HealthCare from './Components/HealthCare.jsx';
import AboutUs from './Components/AboutUs.jsx';
import CartList from './Components/CartList.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  const [view, setView] = useState("");
  const [cart, setCart] = useState([]);

  const changeView = (newView) => {
    setView(newView);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Nav changeView={changeView} currentView={view} cart={cart} setCart={setCart} />
      <Slider />
      {view === "Chat" ? <Chat /> : null}
      {view === "ProductsDogs" ? <ProductsDogs addToCart={handleAddToCart} /> : null}
      {view === "ProductsCats" ? <ProductsCats addToCart={handleAddToCart} /> : null}
      {view === "ProductsFishes" ? <ProductsFishes addToCart={handleAddToCart} /> : null}
      {view === "AboutUs" ? <AboutUs /> : null}
      {(view === "" || view === "Cart") && <PetCareArticles />}
      {(view === "" || view === "Cart") && <Plans />}
      {(view === "" || view === "Cart") && <HealthCare />}
      {view === "Chat" && <Chat />}
      {view === "AboutUs" && <AboutUs />}
      {view === "Cart" && cart.length > 0 && <CartList cart={cart} setCart={setCart} />}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
