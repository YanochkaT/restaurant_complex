import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/index.css'; 


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About'
import Services from './Pages/Services'
import Main from './Pages/Main';
import ShopCart from './Pages/ShopCart';
import Login from './Pages/Login';
import Register from './Pages/Reg';
import EmailVerification from './Pages/EmailVerification';




function App() {
  return (

      <div className="App">
      <Header />
     
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ShopCart" element={<ShopCart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />

        <Route path="/Register" element={<Register />} />
      </Routes>
  

      <Footer  />
      </div>

  );
}

export default App;
