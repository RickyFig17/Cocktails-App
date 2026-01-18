import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TwoOzCocktails.scss";

function TwoOzCocktails() {
  return (
    <div className="two-oz-cocktails">
      <h2>2oz Cocktails</h2>
      <TwoOzCocktailsList />
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

function TwoOzCocktailsList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Black Russian",
      Alcohol1: "1oz Vodka",
      Alcohol2: "1oz Kahlua",
      filler: "",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "White Russian",
      Alcohol1: "1oz Vodka",
      Alcohol2: "1oz Kahlua",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kahlua And Cream",
      Alcohol1: "2oz Kahlua",
      Alcohol2: "N/A",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Toasted Almond",
      Alcohol1: "1oz Amaretto",
      Alcohol2: "1oz Kahlua",
      filler: "Splash of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Gimlet",
      Alcohol1: "2oz Gin",
      Alcohol2: "N/A",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Vodka Gimlet",
      Alcohol1: "2oz Vodka",
      Alcohol2: "N/A",
      filler: "Splash of Roses's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "God Father",
      Alcohol1: "1oz Scotch",
      Alcohol2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange",
    },
    {
      name: "God Mother",
      Alcohol1: "1oz Vodka",
      Alcohol2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Stinger",
      Alcohol1: "1oz Brandy",
      Alcohol2: "1oz White Creme de Menthe",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon or Mint",
    },
    {
      name: "Colorado Bulldog",
      Alcohol1: "1oz Vodka",
      Alcohol2: "1oz Kahlua",
      filler: "Splash of Coke and Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kamikaze",
      Alcohol1: "1oz Vodka",
      Alcohol2: "1oz Triple Sec",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Rusty Nail",
      Alcohol1: "1oz Scotch",
      Alcohol2: "1oz Drambuie",
      filler: "none",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Peel",
    },
    {
      name: "Old Fashion",
      Alcohol1: "2oz Whiskey",
      filler:
        "1/2oz Simple Syrup, Orange Zest, 2-3 dashes of Bitters. Muddle Ingredients, add Ice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange Peel, Cherry",
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
                      <strong>Alcohol 1:</strong> {selectedCocktail.Alcohol1}
                    </li>
                    {selectedCocktail.Alcohol2 !== "N/A" && (
                      <li>
                        <strong>Alcohol 2:</strong> {selectedCocktail.Alcohol2}
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

export default TwoOzCocktails;
