import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './container/Pages/Home';
import About from './container/Pages/About';
import Blog from './container/Pages/Blog';
import Product from './container/Pages/Product';
// import Blog from './container/Pages/Product';
import Profile from './container/Pages/Profile';
import Register from "./container/Pages/Register";
import Service from "./container/Pages/Service";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Blog/> */}
    {/* <Product /> */}
    {/* <Profile/> */}
    {/* <Register/> */}
    {/* <Service/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
