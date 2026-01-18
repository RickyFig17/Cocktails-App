import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TallDrinks.scss";

function TallDrinks() {
  return (
    <div className="talldrinks">
      <h2>Tall Drinks</h2>
      <TallDrinksList />
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

function TallDrinksList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Tom Collins",
      alcohol1: "2oz Gin",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour Mix",
      filler2: "",
      filler3: "",
      top: "1oz Soda (Top)",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "John Collins",
      alcohol1: "2oz Whiskey",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour Mix",
      filler2: "",
      filler3: "",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Sloe Gin Fizz",
      alcohol1: "2oz Sloe Gin",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Cherry",
    },
    {
      name: "Lynchburg Lemonade",
      alcohol1: "1 1/2oz Jack Daniels",
      alcohol2: "1/2oz Triple Sec",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Blue Hawaiian",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Pinneapple Juice",
      filler2: "",
      filler3: "",
      top: "Top Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneaple Wedge",
    },
    {
      name: "Sex on the Beach",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "1oz Orange Juice",
      filler2: "1oz Cranberry Juice",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Bahama Mama",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Malibu Rum",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "1oz Orange Juice",
      filler3: "1oz Pinneapple Juice",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Rum Runner",
      alcohol1: "1oz Lt. Rum",
      alcohol2: "1/2oz Blackberry Brandy",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "1 1/2oz Orange Juice",
      filler3: "1 1/2oz Pinneapple Juice",
      top: "Top with Jamaica Rum",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple",
    },
    {
      name: "Mai Tai",
      alcohol1: "1/2oz Lt. Rum",
      alcohol2: "1/2oz Triple sec",
      alcohol3: "1/2oz Creme de Almond",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "3oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Island Tea",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with Coke",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Electric Lemonade",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "flag",
    },
    {
      name: "Miami Ice",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Blue Curacao",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Beach Tea",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "1oz Sweet & Sour",
      filler2: "1oz Cranberry Juice",
      filler3: "",
      top: "Soda or 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lime Wedge",
    },
    {
      name: "Liquid Marijuana",
      alcohol1: "1/2oz Captain Morgan",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "1/2oz Malibu",
      alcohol4: "1/2oz Midori",
      alcohol5: "",
      filler1: "1 1/2oz Pinneapple Juice",
      filler2: "1 1/2oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Mojito",
      alcohol1: "2oz Bacardi Rum",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "1oz Simple Syrup",
      filler2: "1oz Lime Juice",
      filler3: "",
      top: "Soda",
      glass: "Tall Glass",
      mixingMethod: "Swirl",
      garnish: "Mint Stem & Leaves, Lime Wedge or Wheel",
      description:
        "Add 4-5 mint leaves from bottom of stem, get them wet with the mix already on glass. Do not muddle.",
    },
    {
      name: "Frozen Strawberry Daiquiri",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Strawberry Daiqiri mix or Strawberry puree",
      filler2: "1/2oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Specialty",
      mixingMethod: "Blend",
      garnish: "Sugar Rim & Whip Cream",
      description: "Blend with one full glass of ice",
    },
    {
      name: "Frozen Pina Colada",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "3 1/2oz Pina Colada Mix",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "",
      glass: "Specialty",
      mixingMethod: "Blend",
      garnish: "Pinneapple Wedge & Whip Cream",
      description: "Blend with one full glass of ice",
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
                      <strong>Alcohol 1:</strong> {selectedCocktail.alcohol1}
                    </li>
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
                    {selectedCocktail.filler3 && (
                      <li>
                        <strong>Mixer3:</strong> {selectedCocktail.filler3}
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

export default TallDrinks;
