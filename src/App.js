import React from 'react';
import Header from './components/Header';
import Main from './Pages/Main';
import Footer from './components/Footer';
import './css/index.css'; 


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About'
import Services from './Pages/Services'

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
     
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
  

      <Footer  />
      </div>
    </Router>
  );
}

export default App;


/*
import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header title="My React App" />
      {}
   </div>
  );
}
export default App;
*/
