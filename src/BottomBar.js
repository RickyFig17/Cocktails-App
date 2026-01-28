import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Swapped Link for NavLink
import { Home, Heart, Search } from "lucide-react"; // 1. Import the icons
import { motion } from "framer-motion";
import "./BottomBar.scss";

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      className="bottom-bar"
      initial={{ y: 100, opacity: 0 }} // Start below the screen and invisible
      animate={{ y: 0, opacity: 1 }} // Slide up and fade in
      transition={{
        delay: 2.2, // <--- Change this to match your opening animation length
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <nav className="bottom-bar">
        {/* HOME TAB */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <Home size={24} strokeWidth={1.5} />{" "}
          {/* 2. Icon goes here (replaces span) */}
          <span className="label">Home</span>
        </NavLink>

        {/* FAVORITES TAB (Replacing Surprise) */}
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <Heart size={24} strokeWidth={1.5} /> {/* 2. Icon goes here */}
          <span className="label">Favorites</span>
        </NavLink>

        {/* SEARCH BUTTON */}
        <button
          className="nav-item"
          onClick={() => {
            /* Search Logic later */
          }}
        >
          <Search size={24} strokeWidth={1.5} /> {/* 2. Icon goes here */}
          <span className="label">Search</span>
        </button>
      </nav>
    </motion.nav>
  );
};

export default BottomBar;
