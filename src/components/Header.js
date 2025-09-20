import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/little-lemon-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" style={{ height: "60px", marginBottom: "10px" }} />
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/" aria-label="Go to Home Page">Home</Link></li>
          <li><Link to="/booking" aria-label="Go to Booking Page">Reserve a Table</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;