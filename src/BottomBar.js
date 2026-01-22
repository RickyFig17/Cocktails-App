import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Swapped Link for NavLink
import { Home, Heart, Search } from "lucide-react"; // 1. Import the icons
import "./BottomBar.scss";

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bottom-bar">
      {/* HOME TAB */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <Home size={24} strokeWidth={1.5} /> {/* 2. Icon goes here (replaces span) */}
        <span className="label">Home</span>
      </NavLink>

      {/* FAVORITES TAB (Replacing Surprise) */}
      <NavLink to="/favorites" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
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
  );
};

export default BottomBar;