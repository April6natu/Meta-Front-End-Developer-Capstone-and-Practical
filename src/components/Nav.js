import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/booking" style={{ color: "#fff", textDecoration: "none" }}>Reservations</Link>
    </nav>
  );
}

export default Nav;
