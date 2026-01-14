import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
        {categories.map((cat, index) => (
          <motion.li
            key={cat.path}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1, // This creates the staggered "wave"
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Link
              to={cat.path}
              className={`nav-pill ${
                location.pathname === cat.path ? "active" : ""
              }`}
            >
              {cat.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
