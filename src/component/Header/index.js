
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return <div>
        {/* <h1>This is the Header</h1> */}
        <ul className="navbar">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Product">Product</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Logout">LOG Out</Link></li>

        </ul>
    </div>
}

export default Header;