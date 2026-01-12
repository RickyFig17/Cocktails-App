import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const categories = [
    { name: "2oz Cocktails", path: "/two-oz-cocktails" },
    { name: "Tall Drinks", path: "/tall-drinks" },
    { name: " Highballs", path: "/highballs" },
    { name: " Cream Drinks and After Dinner Drinks", path: "/cream-drinks" },
    { name: " Martinis", path: "/martinis" },
    { name: " Sours And Margaritas", path: "/sours" },
    { name: " Shooters", path: "/shooters" },
    { name: " Wine Cocktails", path: "/wine-cocktails" },
  ];
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {categories.map((cat) => (
          <li key={cat.path} className="nav-item">
            <Link to={cat.path} className="nav-link">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
