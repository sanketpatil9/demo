
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header=()=> {
        return <div>
            {/* <h1>This is the Header</h1> */}
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Product">Product</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Service">Service</Link></li>
            </ul>
        </div>
}

export default Header;