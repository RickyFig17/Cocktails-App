import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Martinis.scss";

function Martinis() {
  return (
    <div className="martinis-cocktails">
      <h2>Martinis</h2>
      <MartinisList />
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

function MartinisList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Martini",
      alcohol: "N/A",
      alcohol1: "2oz Gin",
      alcohol2: "1oz Dry Vermouth",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Olive",
    },
    {
      name: "Dry Martini",
      alcohol: "N/A",
      alcohol1: "2oz Gin",
      alcohol2: "1/2oz Dry Vermouth",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Olive",
    },
    {
      name: "Manhattan",
      alcohol: "N/A",
      alcohol1: "2oz Whiskey or Bourbon",
      alcohol2: "1oz Sweet Vermouth",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Cherry",
    },
    {
      name: "Dry Manhattan",
      alcohol: "N/A",
      alcohol1: "2oz Whiskey or Bourbon",
      alcohol2: "1oz Dry Vermouth",
      alcohol3: "2-3 Dashes of Bitters",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Perfect Manhattan",
      alcohol: "N/A",
      alcohol1: "2oz Whiskey or Bourbon",
      alcohol2: "1oz Sweet Vermouth",
      alcohol3: "1oz Dry Vermouth",
      alcohol4: "2-3 Dashes of Bitters",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Gibson",
      alcohol: "N/A",
      alcohol1: "2oz Gin",
      alcohol2: "1oz Dry Vermouth",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Three Cocktail Onions on a Stick",
    },
    {
      name: "Rob Roy",
      alcohol: "N/A",
      alcohol1: "2oz Scotch",
      alcohol2: "1oz Sweet Vermouth",
      alcohol3: "2-3 Dashes of Bitters",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Cherry",
    },
    {
      name: "Dry Rob Roy",
      alcohol: "N/A",
      alcohol1: "2oz Scotch",
      alcohol2: "1/2oz Dry Vermouth",
      alcohol3: "2-3 Dashes of Bitters",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Perfect Rob Roy",
      alcohol: "N/A",
      alcohol1: "2oz Scotch",
      alcohol2: "1oz Dry Vermouth",
      alcohol3: "1oz Sweet Vermouth",
      alcohol4: "2-3 Dashes of Bitters",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Cosmopolitan",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Cointreau",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "3/4oz Simple Syrup",
      filler2: "3/4oz Lime Juice",
      filler3: "Splash of Cranberry Juice",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Lime Wedge",
    },
    {
      name: "Negroni",
      alcohol: "N/A",
      alcohol1: "3/4oz Gin",
      alcohol2: "3/4oz Sweet Vermouth",
      alcohol3: "3/4oz Campari",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Orange Peel",
    },
    {
      name: "Apple Martini",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1oz Sour Apple Schnapps",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "1 1/2-2oz Sour Mix or Lemon Sour Mix",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Apple Wedge or Cherry",
    },
    {
      name: "Vieux Carre",
      alcohol: "N/A",
      alcohol1: "1/2oz Rye Whiskey",
      alcohol2: "1/2oz Cognac",
      alcohol3: "1/2oz Benedictine",
      alcohol4: "1/2oz Sweet Vermouth",
      alcohol5: "2-3 Dashes of Angostura & Peychauds Bitters",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini or Cocktail",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist, Cocktail Cherry",
    },
    {
      name: "Aviation",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Gin",
      alcohol2: "1/2oz Luxardo",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "3/4oz Lemon Juice",
      filler2: "1/4oz Creme de Violette",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Shake & Double Strain",
      garnish: "Luxardo Cherry",
    },
    {
      name: "Espresso Martini",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1oz Kahlua, Tia Maria or Mr. Black",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1oz Espresso",
      filler2: "Simple Syrup & Vanilla Extract Optional",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "3 Coffee Beans",
    },
    {
      name: "The Last Word",
      alcohol: "N/A",
      alcohol1: "3/4oz Gin",
      alcohol2: "3/4oz Luxardo",
      alcohol3: "3/4oz Green Charteuse",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "3/4oz Lime Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Martini",
      mixingMethod: "Shake & Double Strain",
      garnish: "Cherry",
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
                <button
                  className="close-x"
                  onClick={() => setSelectedCocktail(null)}
                >
                  ×
                </button>
                {selectedCocktail.image && (
                  <img
                    src={selectedCocktail.image}
                    alt={selectedCocktail.name}
                    className="modal-cocktail-img"
                  />
                )}
                <h2>{selectedCocktail.name}</h2>
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
                    {selectedCocktail.alcohol4 !== "N/A" && (
                      <li>
                        <strong>Alcohol 4:</strong> {selectedCocktail.alcohol4}
                      </li>
                    )}
                    {selectedCocktail.alcohol5 !== "N/A" && (
                      <li>
                        <strong>Alcohol 5:</strong> {selectedCocktail.alcohol5}
                      </li>
                    )}
                    {selectedCocktail.filler !== "N/A" && (
                      <li>
                        <strong>Mixer:</strong> {selectedCocktail.filler}
                      </li>
                    )}
                    {selectedCocktail.filler1 !== "N/A" && (
                      <li>
                        <strong>Mixer 1:</strong> {selectedCocktail.filler1}
                      </li>
                    )}
                    {selectedCocktail.filler2 !== "N/A" && (
                      <li>
                        <strong>Mixer 2:</strong> {selectedCocktail.filler2}
                      </li>
                    )}
                    {selectedCocktail.filler3 !== "N/A" && (
                      <li>
                        <strong>Mixer 3:</strong> {selectedCocktail.filler3}
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

export default Martinis;
