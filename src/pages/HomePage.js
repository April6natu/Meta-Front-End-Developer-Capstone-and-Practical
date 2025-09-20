import React from "react";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek-salad.jpg";
import salmon from "../assets/lemon-garlic-salmon.jpg";
import bruschetta from "../assets/bruschetta.jpg";

function HomePage() {
  return (
    <main aria-labelledby="home-heading">
      <section>
        <h1 id="home-heading">Welcome to Little Lemon</h1>
        <p>
          Experience the finest Mediterranean flavors in a cozy atmosphere. We’re
          here to make your dining unforgettable.
        </p>
        {/* Call-to-action button */}
        <Link
          to="/booking"
          className="btn"
          aria-label="Reserve a table at Little Lemon"
        >
          Reserve a Table
        </Link>
      </section>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About Us</h2>
        <p>
          Little Lemon is a family-owned restaurant serving authentic
          Mediterranean dishes made with fresh, locally sourced ingredients.
        </p>
      </section>

      <section aria-labelledby="specials-heading">
        <h2 id="specials-heading">Today’s Specials</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div className="section" style={{ width: "250px", textAlign: "center" }}>
            <img src={greekSalad} alt="Greek Salad" style={{ width: "100%" }} />
            <h3>Greek Salad</h3>
            <Link to="/booking" className="btn" aria-label="Book Greek Salad">Book Now</Link>
          </div>
          <div className="section" style={{ width: "250px", textAlign: "center" }}>
            <img src={salmon} alt="Lemon Garlic Salmon" style={{ width: "100%" }} />
            <h3>Lemon Garlic Salmon</h3>
            <Link to="/booking" className="btn" aria-label="Book Lemon Garlic Salmon">Book Now</Link>
          </div>
          <div className="section" style={{ width: "250px", textAlign: "center" }}>
            <img src={bruschetta} alt="Bruschetta" style={{ width: "100%" }} />
            <h3>Bruschetta</h3>
            <Link to="/booking" className="btn" aria-label="Book Bruschetta">Book Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;