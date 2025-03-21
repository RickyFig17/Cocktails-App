import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/two-oz-cocktails">2oz Cocktails</Link>
        </li>
        <li>
          <Link to="/tall-drinks">Tall Drinks</Link>
        </li>
        <li>
          <Link to="/highballs">Highballs</Link>
        </li>
        <li>
          <Link to="/cream-drinks">Cream Drinks and After Dinner Drinks</Link>
        </li>
        <li>
          <Link to="/martinis">Martinis</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
