import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CreamDrinks.scss";

function CreamDrinks() {
  return (
    <div className="creamdrinks">
      <h2>CreamDrinks</h2>
      <CreamDrinksList />
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

function CreamDrinksList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Grasshopper",
      alcohol: "N/A",
      alcohol1: "1oz White Creme de Cacao",
      alcohol2: "1oz Green Creme de Menthe",
      alcohol3: "N/A",
      filler: "Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "none",
    },
    {
      name: "Pink Squirrel",
      alcohol: "N/A",
      alcohol1: "1oz White Creme de Cacao",
      alcohol2: "1oz Creme de Almond (Noyeaux)",
      alcohol3: "N/A",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "none",
    },
    {
      name: "Brandy Alexander",
      alcohol: "N/A",
      alcohol1: "1oz Brown Creme de Cacao",
      alcohol2: "1oz Brandy",
      alcohol3: "N/A",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "Nutmeg",
    },
    {
      name: "Alexander",
      alcohol: "N/A",
      alcohol1: "1oz Brown Creme de Cacao",
      alcohol2: "1oz Gin",
      alcohol3: "N/A",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "Nutmeg",
    },
    {
      name: "Mudslide",
      alcohol: "N/A",
      alcohol1: "3/4oz Vodka",
      alcohol2: "3/4oz Bailey's Irish Cream",
      alcohol3: "3/4oz Kahlua",
      filler: "1 1/2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "None",
    },
    {
      name: "Irish Coffee",
      alcohol: "1 1/2oz Irish Whiskey",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      filler: "Fill with Hot Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
    },
    {
      name: "Keoke Coffee",
      alcohol: "N/A",
      alcohol1: "3/4oz Brandy (First Ingredient)",
      alcohol2: "3/4oz Kahlua",
      alcohol3: "3/4oz Brown Creme de Cacao",
      filler: "Fill with Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
    },
    {
      name: "Nutty Irishman",
      alcohol: "N/A",
      alcohol1: "1oz Bailey's Irish Cream",
      alcohol2: "1oz Frangelico",
      alcohol3: "N/A",
      filler: "Fill with Hot Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
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
                    {selectedCocktail.alcohol !== "N/A" && (
                      <li>
                        <strong>Alcohol:</strong> {selectedCocktail.alcohol}
                      </li>
                    )}
                    {selectedCocktail.alcohol1 !== "N/A" && (
                      <li>
                        <strong>Alcohol 1:</strong> {selectedCocktail.alcohol1}
                      </li>
                    )}
                    {selectedCocktail.alcohol2 !== "N/A" && (
                      <li>
                        <strong>Alcohol 2:</strong> {selectedCocktail.alcohol2}
                      </li>
                    )}
                    {selectedCocktail.alcohol3 !== "N/A" && (
                      <li>
                        <strong>Alcohol 3:</strong> {selectedCocktail.alcohol3}
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

export default CreamDrinks;
