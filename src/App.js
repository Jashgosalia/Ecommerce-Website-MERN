import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';




function App() {
  return (
    <>
      {/* <h1>Hello from app1</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Layout />} >
            <Route path ="/" element={<Home />}/>
            <Route path ="about" element={<About />}/>
            <Route path ="contact" element={<Contact />}/>
            <Route path ="home" element={<Home />}/>

          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello from app2</h1> */}
    
    
    </>
   
  );
}

export default App;
