import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Error from './Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./demo-menu/Navbar";

const App = () => {
  return(
    <>      
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
    
   
    </>
  );
};

export default App;