
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";                     // he home pasun sarv component khali Routes chya at takle ..//
import Product from "../Product";
import About from "../About";
import Service from "../Service";
import Blog from "../Blog";
import Profile from "../Profile";
import Register from "../Register";
import Portfolio from "../Portfolio";
import Gallery from "../Gallery";
import Login from '../Login';
import StudentProfileDetails from '../../../component/StudentProfileDetails';     // /* useNavigate sathi use kel */
import ProtectedRoute from "../ProtectedRoute";
import Logout from "../Logout";
import ErrorMessage from "../../../component/ErrorMessage";
// import StudentProfileDetails from "../../../Component/StudentProfileDetails";     // / ha path chukla hota * useNavigate sathi use kel */


import "./Routers.css";

const Routers=() => {
  return <>
    <Routes>

      <Route path="/Home" element={<ProtectedRoute Comp={Home} />} />               {/* Comp ha ref var ahe tya madhe home cha Component stored zala/ ha home ithun pathvla tr tikde protected route madhe ghya pn lagin vrti  */}
      <Route path="/" element={<Login/>} />                        {/* Comp ha ref var ahe tya madhe home cha Component stored zala/ ha home ithun pathvla tr tikde protected route madhe ghya pn lagin vrti  */}
      <Route path="/Product" element={<ProtectedRoute Comp={Product} />} />
      <Route path="/About" element={< ProtectedRoute Comp={About} />} />
      <Route path="/Service" element={< ProtectedRoute Comp={Service} />} />
      <Route path="/Blog" element={<ProtectedRoute Comp={Blog} />} />
      <Route path="/Profile" element={< ProtectedRoute Comp={Profile} />} />
      <Route path="/Register" element={<ProtectedRoute Comp={Register} />} />
      <Route path="/Portfolio" element={<ProtectedRoute Comp={Portfolio} />} />
      <Route path="/Gallery" element={<ProtectedRoute Comp={Gallery} />} />
      <Route path="/Student_Details" element={<ProtectedRoute Comp={StudentProfileDetails} />} />    {/* useNavigate sathi use kel */}
      <Route path="/Logout" element={<ProtectedRoute Comp={Logout} />} />
      <Route path="*" element={<ProtectedRoute Comp={ErrorMessage} />} />


    </Routes>
  </>


};

export default Routers;
