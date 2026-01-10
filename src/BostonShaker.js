import React, { useState } from "react";
import { motion } from "framer-motion";

const BostonShaker = () => {
  const [isPouring, setIsPouring] = useState(false);

  // Animation Variants
  const shakerVariants = {
    idle: { 
      rotate: 0, 
      x: 0, 
      y: 0 
    },
    pouring: { 
      rotate: 110, // Tilts to the right
      x: 20,       // Slight shift to make the pivot look natural
      y: 10,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const liquidVariants = {
    idle: { 
      pathLength: 0, 
      opacity: 0 
    },
    pouring: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        repeat: Infinity, 
        ease: "linear",
        delay: 0.2 // Wait for shaker to tilt before pouring
      }
    }
  };

  return (
    <div 
      style={{ cursor: "pointer", display: "inline-block" }} 
      onClick={() => setIsPouring(!isPouring)}
      title="Click to Pour!"
    >
      <motion.svg
        width="100"
        height="120"
        viewBox="60 60 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- THE LIQUID (Animated Stream) --- */}
        {/* We place this first so it appears "behind" the shaker tip if needed, 
            but for a pour it usually comes out the front. */}
        <motion.path
          d="M 95 30 L 120 80" // A straight line pouring out (adjusted for the rotation)
          stroke="#00CED1" // Cyan Liquid
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 5" // Makes it look like droplets/stream
          variants={liquidVariants}
          initial="idle"
          animate={isPouring ? "pouring" : "idle"}
          // We apply the inverse rotation to the liquid so it falls "down" relative to gravity
          // strictly speaking, SVG coordination is tricky, so a simple dash array animation works best here.
        />

        {/* --- THE SHAKER GROUP --- */}
        <motion.g
          variants={shakerVariants}
          initial="idle"
          animate={isPouring ? "pouring" : "idle"}
          style={{ originX: 0.5, originY: 0.8 }} // Rotates from the bottom
        >
          {/* Bottom Tin (The Metal Part) */}
          <path
            d="M 30 100 L 25 50 L 75 50 L 70 100 Z"
            stroke="#8A2BE2" // Neon Violet
            strokeWidth="3"
            fill="#0B0E14"   // Dark fill to hide lines behind it
          />
          
          {/* Top Glass/Tin (The Smaller Part) */}
          <path
            d="M 28 50 L 22 20 L 78 20 L 72 50"
            stroke="#00CED1" // Neon Teal
            strokeWidth="3"
            fill="#0B0E14"
          />

          {/* Decorative Glare/Reflection Line */}
          <path
            d="M 35 90 L 32 60"
            stroke="#8A2BE2"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
        </motion.g>

        {/* --- DROPLETS (Optional Particles) --- */}
        {isPouring && (
           <motion.circle 
             cx="95" cy="80" r="3" 
             fill="#00CED1"
             initial={{ opacity: 1, y: 0 }}
             animate={{ opacity: 0, y: 40 }}
             transition={{ duration: 0.6, repeat: Infinity, ease: "easeIn" }}
           />
        )}
      </motion.svg>
    </div>
  );
};

export default BostonShaker;