import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import logo1 from "./images/Logo1.png";
import "./Header.scss";
import BostonShaker from "./BostonShaker";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        {/* <div className="shaker-container">
          <BostonShaker />
        </div> */}
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 5, y: 5 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <img src={logo1} alt="Vivid Pour" className="header-logo" />
          </Link>
        </motion.div>
      </div>
      <div className="nav-wrapper">
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 5, y: 5 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
