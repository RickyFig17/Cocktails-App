import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BottomBar.scss";

const BottomBar = () => {
  const navigate = useNavigate();

  const paths = [
    "/two-oz-cocktails",
    "/tall-drinks",
    "/highballs",
    "/cream-drinks",
    "/martinis",
    "/sours",
    "/shooters",
    "/wine-cocktails",
  ];

  const handleSurprise = () => {
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    navigate(randomPath);
  };

  return (
    <nav className="bottom-bar">
      <Link to="/" className="nav-item">
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </Link>

      <button
        className="nav-item"
        onClick={() => {
          /* Search Logic later */
        }}
      >
        <span className="icon">🔍</span>
        <span className="label">Search</span>
      </button>

      <button className="nav-item" onClick={handleSurprise}>
        <span className="icon">🎲</span>
        <span className="label">Surprise</span>
      </button>
    </nav>
  );
};

export default BottomBar;
