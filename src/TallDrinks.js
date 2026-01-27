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
      image: "images/Tall-Drinks/Tom-Collins.png",
      alcohol: "2oz Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "2oz Sweet & Sour Mix",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "1oz Soda (Top)",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "John Collins",
      image: "images/Tall-Drinks/John-Collins.png",
      alcohol: "2oz Whiskey",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "2oz Sweet & Sour Mix",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Sloe Gin Fizz",
      image: "images/Tall-Drinks/Sloe-Gin-Fizz.png",
      alcohol: "2oz Sloe Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "2oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Cherry",
    },
    {
      name: "Lynchburg Lemonade",
      image: "images/Tall-Drinks/Lynchburg-Lemonade.png",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Jack Daniels",
      alcohol2: "1/2oz Triple Sec",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "3oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Blue Hawaiian",
      image: "images/Tall-Drinks/Blue-Hawaiian.png",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "3oz Pinneapple Juice/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "Top Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneaple Wedge",
    },
    {
      name: "Sex on the Beach",
      image: "images/Tall-Drinks/Sex-on-the-Beach.png",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1oz Orange Juice",
      filler2: "1oz Cranberry Juice",
      filler3: "N/A",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Bahama Mama",
      image: "images/Tall-Drinks/Bahama-Mama.png",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Malibu Rum",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1/2oz Grenadine",
      filler2: "1oz Orange Juice",
      filler3: "1oz Pinneapple Juice",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Rum Runner",
      image: "images/Tall-Drinks/Rum-Runner.png",
      alcohol: "N/A",
      alcohol1: "1oz Lt. Rum",
      alcohol2: "1/2oz Blackberry Brandy",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
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
      image: "images/Tall-Drinks/Mai-Tai.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Lt. Rum",
      alcohol2: "1/2oz Triple sec",
      alcohol3: "1/2oz Creme de Almond",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1/2oz Grenadine",
      filler2: "3oz Sweet & Sour",
      filler3: "N/A",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Island Tea",
      image: "images/Tall-Drinks/Long-Island-Tea.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler: "2oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "Top with Coke",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Electric Lemonade",
      image: "images/Tall-Drinks/Electric-Lemonade.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler: "2oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "flag",
    },
    {
      name: "Miami Ice",
      image: "images/Tall-Drinks/Miami-Ice.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Blue Curacao",
      filler: "2oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      top: "7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Beach Tea",
      image: "images/Tall-Drinks/Long-Beach-Tea.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler: "N/A",
      filler1: "1oz Sweet & Sour",
      filler2: "1oz Cranberry Juice",
      filler3: "N/A",
      top: "Soda or 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lime Wedge",
    },
    {
      name: "Liquid Marijuana",
      image: "images/Tall-Drinks/Liquid-Lemonade.png",
      alcohol: "N/A",
      alcohol1: "1/2oz Captain Morgan",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "1/2oz Malibu",
      alcohol4: "1/2oz Midori",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1 1/2oz Pinneapple Juice",
      filler2: "1 1/2oz Sweet & Sour",
      filler3: "N/A",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Mojito",
      image: "images/Tall-Drinks/Mojito.png",
      alcohol: "2oz Bacardi Rum",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "1oz Simple Syrup",
      filler2: "1oz Lime Juice",
      filler3: "N/A",
      top: "Soda",
      glass: "Tall Glass",
      mixingMethod: "Swirl",
      garnish: "Mint Stem & Leaves, Lime Wedge or Wheel",
      description:
        "Add 4-5 mint leaves from bottom of stem, get them wet with the mix already on glass. Do not muddle.",
    },
    {
      name: "Frozen Strawberry Daiquiri",
      image: "images/Tall-Drinks/Frozen-Strawberry-Daiquiri.png",
      alcohol: "1 1/2oz Lt. Rum",
      alcohol1: "N/A",
      alcohol2: "N/A",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "N/A",
      filler1: "3oz Strawberry Daiqiri mix or Strawberry puree",
      filler2: "1/2oz Sweet & Sour",
      filler3: "N/A",
      glass: "Specialty",
      mixingMethod: "Blend",
      garnish: "Sugar Rim & Whip Cream",
      description: "Blend with one full glass of ice",
    },
    {
      name: "Frozen Pina Colada",
      image: "images/Tall-Drinks/Pina-Colada.png",
      alcohol: "N/A",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "3 1/2oz Pina Colada Mix",
      alcohol3: "N/A",
      alcohol4: "N/A",
      alcohol5: "N/A",
      filler: "2oz Sweet & Sour",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
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
                    {selectedCocktail.top && (
                      <li>
                        <strong>Top:</strong> {selectedCocktail.top}
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
