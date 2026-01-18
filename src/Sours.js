import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Sours.scss"

function Sours() {
  return (
    <div className="sour-cocktails">
      <h2>Sours & Margaritas</h2>
      <SoursList />
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

function SoursList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Stone Sour",
      alcohol1: "1 1/2oz Whiskey",
      filler1: "1oz Orange Juice",
      filler2: "1oz Sweet & Sour",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Amaretto Sour",
      alcohol1: "1 1/2oz Amaretto",
      filler1: "2oz Sweet & Sour",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Whiskey Sour",
      alcohol1: "1 1/2oz Whiskey",
      filler1: "2oz Sweet & Sour",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Rum Sour",
      alcohol1: "1 1/2oz Lt.Rum",
      filler1: "2oz Sweet & Sour",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Daiquiri",
      alcohol1: "1 1/2oz Lt.Rum",
      filler1: "1oz Lime Juice",
      filler2: "1oz Simple Syrup",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Lime Wedge",
    },
    {
      name: "Margarita",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "1/2oz Triple Sec",
      filler1: "1 1/2oz Sweet & Sour",
      glass: "Margarita",
      mixingMethod: "Shake & Strain",
      garnish: "Salt Rim & Lime Wedge",
    },
    {
      name: "Blue Margarita",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "1/2oz Blue Curacao",
      filler1: "1 1/2oz Sweet & Sour",
      glass: "Margarita",
      mixingMethod: "Shake & Strain",
      garnish: "Salt Rim & Lime Wedge",
    },
    {
      name: "Frozen Strawberry Margarita",
      alcohol1: "2oz Tequila",
      alcohol2: "1oz Triple Sec",
      filler1: "1/2oz Sweet & Sour",
      filler2:
        "1oz Strawberry Margarita/ Daiquiri Mix (Blend with one full glass of Ice)",
      glass: "Margarita",
      mixingMethod: "Blend",
      garnish: "Sugar Rim & Lime Wedge",
    },
    {
      name: "Sidecar",
      alcohol1: "1 1/2oz Brandy",
      alcohol2: "1/2oz Triple Sec",
      filler1: "3/4oz Lemon Juice",
      filler2: "3/4oz Simple Syrup",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Sugar Rim & Flagg",
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
                      <strong>Alcohol1:</strong> {selectedCocktail.alcohol1}
                    </li>
                    {selectedCocktail.liquor2 !== "N/A" && (
                      <li>
                        <strong>Alcohol2:</strong> {selectedCocktail.alcohol2}
                      </li>
                    )}
                    {selectedCocktail.filler1 && (
                      <li>
                        <strong>Mixer1:</strong> {selectedCocktail.filler1}
                      </li>
                    )}
                    {selectedCocktail.filler2 && (
                      <li>
                        <strong>Mixer2:</strong> {selectedCocktail.filler2}
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

export default Sours;
