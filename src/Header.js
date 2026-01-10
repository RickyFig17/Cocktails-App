import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import logo1 from "./images/Logo1.png";
import "./Header.scss";
import BostonShaker from "./BostonShaker";

function Header() {
  return (
    <div className="header-wrapper">
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo1} alt="Vivid Pour" className="header-logo" />
      </motion.div>

      <div className="nav-wrapper">
        <Navbar />
      </div>
      <div className="shaker-container">
        <BostonShaker />
      </div>
    </div>
  );
}

export default Header;
