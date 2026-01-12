import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WineCocktails.scss";

function WineCocktails() {
  return (
    <div className="two-oz-cocktails">
      <h2>2oz Cocktails</h2>
      <WineCocktailList />
    </div>
  );
}

function CocktailCard({ cocktail, onOpen }) {
  return (
    <motion.div>
      <div
        className="cocktail-card"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 15px rgba(138, 43, 226, 0.4)",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onOpen(cocktail)}
      >
        <h3>{cocktail.name}</h3>
      </div>
    </motion.div>
  );
}

function WineCocktailList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Spritzer",
      alcohol1: "1/2 White Wine",
      alcohol2: "",
      filler1: "1/2 Soda",
      filler2: "",
      glass: "Wine/Fancy",
      mixingMethod: "Pour",
      garnish: "Lemon Twist",
    },
    {
      name: "Mimosa",
      alcohol1: "1/2 Champagne",
      alcohol2: "",
      filler1: "1/2 Orange Juice",
      filler2: "",
      glass: "Flute/Fancy",
      mixingMethod: "Pour",
      garnish: "none",
    },
  ];

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail, index) => (
        <CocktailCard
          key={index}
          cocktail={cocktail}
          onOpen={setSelectedCocktail}
        />
      ))}
      <AnimatePresence>
        {selectedCocktail && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCocktail(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedCocktail.name}</h2>
                <button
                  className="close-x"
                  onClick={() => setSelectedCocktail(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-grid">
                <div className="recipe-section">
                  <h4>Ingredients</h4>
                  <ul>
                    <li>
                      <strong>Base:</strong> {selectedCocktail.liquor1}
                    </li>
                    {selectedCocktail.liquor2 !== "N/A" && (
                      <li>
                        <strong>Modifier:</strong> {selectedCocktail.liquor2}
                      </li>
                    )}
                    {selectedCocktail.filler && (
                      <li>
                        <strong>Mixer:</strong> {selectedCocktail.filler}
                      </li>
                    )}
                  </ul>
                </div>

                <div className="method-section">
                  <h4>Method</h4>
                  <p>
                    <strong>Glass:</strong> {selectedCocktail.glass}
                  </p>
                  <p>
                    <strong>Preparation:</strong>{" "}
                    {selectedCocktail.mixingMethod}
                  </p>
                  <p>
                    <strong>Garnish:</strong> {selectedCocktail.garnish}
                  </p>
                </div>
              </div>
              <button
                className="close-btn"
                onClick={() => setSelectedCocktail(null)}
              >
                GOT IT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WineCocktails;
