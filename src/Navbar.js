import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const categories = [
    { name: "2oz Cocktails", path: "/two-oz-cocktails" },
    { name: "Tall Drinks", path: "/tall-drinks" },
    { name: " Highballs", path: "/highballs" },
    { name: " Cream Drinks", path: "/cream-drinks" },
    { name: " Martinis", path: "/martinis" },
    { name: " Sours And Margaritas", path: "/sours" },
    { name: " Shooters", path: "/shooters" },
    { name: " Wine Cocktails", path: "/wine-cocktails" },
  ];
  return (
    <nav className="premium-nav">
      <ul className="pill-container">
        {categories.map((cat) => (
          <li key={cat.path}>
            <Link
              to={cat.path}
              className={`nav-pill ${
                location.pathname === cat.path ? "active" : ""
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
