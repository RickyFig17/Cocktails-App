import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import logo1 from "./assets/Logo1.png";
import "./Header.scss";
import BostonShaker from "./BostonShaker";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

function Header({searchTerm, setSearchTerm}) {

  return (
    <div className="header-wrapper">
      <div className="header-container">
        {/* <div className="shaker-container">
          <BostonShaker />
        </div> */}
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <img src={logo1} alt="Vivid Pour" className="header-logo" />
          </Link>
        </motion.div>
      </div>
      <div className="desktop-search-wrapper">
        <div className="search-bar">
          <Search size={24} strokeWidth={1.5} color={"#888"} />
          {/* <span className="search-icon"></span> */}
          <input
            type="text"
            placeholder="Search cocktails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
