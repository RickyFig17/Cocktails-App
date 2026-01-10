import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VividShaker = () => {
  const [isPouring, setIsPouring] = useState(false);

  return (
    <div 
      className="shaker-wrapper"
      onClick={() => setIsPouring(!isPouring)}
      style={{ cursor: "pointer", width: "150px", height: "150px" }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Neon Gradient Definition */}
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF00FF" /> {/* Magenta Top */}
            <stop offset="50%" stopColor="#8A2BE2" /> {/* Violet Middle */}
            <stop offset="100%" stopColor="#00CED1" /> {/* Teal Bottom */}
          </linearGradient>
        </defs>

        {/* --- THE POURING LIQUID --- */}
        <AnimatePresence>
          {isPouring && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Main Stream */}
              <motion.path
                d="M 55 75 Q 40 110 45 180"
                stroke="#00CED1"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Droplets / Ice Bits */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="2"
                  fill="#00CED1"
                  initial={{ x: 45, y: 80, opacity: 1 }}
                  animate={{ 
                    x: 40 + (Math.random() * 10), 
                    y: 180, 
                    opacity: 0 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 0.6, 
                    delay: i * 0.1 
                  }}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* --- THE SHAKER (Matches your image silhouette) --- */}
        <motion.g
          animate={isPouring ? { rotate: -115, x: -30, y: 40 } : { rotate: 0, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          style={{ originX: "100px", originY: "150px" }}
        >
          {/* 1. The Bottom Tin */}
          <path
            d="M 75 85 L 82 175 C 83 185, 117 185, 118 175 L 125 85"
            stroke="url(#neonGradient)"
            strokeWidth="3"
            fill="#0B0E14"
          />
          
          {/* 2. The Wide Middle Rim */}
          <rect x="70" y="80" width="60" height="6" rx="3" stroke="url(#neonGradient)" strokeWidth="3" fill="#0B0E14" />

          {/* 3. The Curved Shaker Top */}
          <path
            d="M 78 80 C 78 40, 122 40, 122 80"
            stroke="url(#neonGradient)"
            strokeWidth="3"
            fill="#0B0E14"
          />

          {/* 4. The Very Top Cap */}
          <path
            d="M 90 45 L 92 35 C 93 30, 107 30, 108 35 L 110 45"
            stroke="url(#neonGradient)"
            strokeWidth="3"
            fill="#0B0E14"
          />

          {/* 5. The Glass Glare (The dashed line on the left side) */}
          {!isPouring && (
            <path
              d="M 85 100 L 88 150"
              stroke="#00CED1"
              strokeWidth="2"
              strokeDasharray="10 15"
              opacity="0.6"
            />
          )}
        </motion.g>
      </svg>
    </div>
  );
};

export default VividShaker;