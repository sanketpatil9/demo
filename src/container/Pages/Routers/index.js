
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Product from "../Product";
import About from "../About";
import Service from "../Service";
import Blog from "../Blog";
import Profile from "../Profile";
import Register from "../Register";



import "./Routers.css";

const Routers = () => {
  return <>
  <Routes>
      <Route path="/" element={<Home />} />    
      <Route path="/Product" element={<Product />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </>
  
  
};

export default Routers;
