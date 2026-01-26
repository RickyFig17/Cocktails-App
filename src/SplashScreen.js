import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.scss";
import Logo from "./assets/Logo1.png";

function SplashScreen({ onComplete }) {
  return (
    <motion.div
      className="splash-container"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src={Logo}
        alt="Vivid Pour Logo"
        className="splash-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      />

      {/* Optional: Add a subtle neon glow ring behind the logo */}
      <motion.div
        className="splash-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </motion.div>
  );
}

export default SplashScreen;
