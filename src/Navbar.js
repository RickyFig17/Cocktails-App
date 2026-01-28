import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdLocalDrink } from "react-icons/md"; //2oz Drinks
import { MdOutlineLocalDrink } from "react-icons/md"; //Shooters
import { FaGlassMartiniAlt } from "react-icons/fa"; //Martini
import { PiChampagneBold } from "react-icons/pi"; //Wine Cocktails
import { LuCitrus } from "react-icons/lu"; //Sours
import { PiPintGlassBold } from "react-icons/pi"; //Tall Drinks
import { MdCoffee } from "react-icons/md"; //Cream Drinks
import { FaGlassWaterDroplet } from "react-icons/fa6"; // Highballs

import { motion } from "framer-motion";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();

  const iconMap = {
    twoOz: <MdLocalDrink />, // Looks like a rocks glass
    tall: <PiPintGlassBold />,
    highball: <FaGlassWaterDroplet />,
    cream: <MdCoffee />,
    martini: <FaGlassMartiniAlt />,
    sour: <LuCitrus />,
    shooter: <MdOutlineLocalDrink />,
    wine: <PiChampagneBold />,
  };

  const categories = [
    { name: "2oz Cocktails", path: "/two-oz-cocktails", iconKey: "twoOz" },
    { name: "Tall Drinks", path: "/tall-drinks", iconKey: "tall" },
    { name: " Highballs", path: "/highballs", iconKey: "highball" },
    { name: " Cream Drinks", path: "/cream-drinks", iconKey: "cream" },
    { name: " Martinis", path: "/martinis", iconKey: "martini" },
    { name: " Sours And Margaritas", path: "/sours", iconKey: "sour" },
    { name: " Shooters", path: "/shooters", iconKey: "shooter" },
    { name: " Wine Cocktails", path: "/wine-cocktails", iconKey: "wine" },
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
              <div className="pill-wrapper">
                <span className="pill-icon">{iconMap[cat.iconKey]}</span>
                <span className="pill-label">{cat.name}</span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
