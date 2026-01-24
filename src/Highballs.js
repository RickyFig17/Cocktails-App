import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Highballs.scss"

function Highballs() {
  return (
    <div className="highballs">
      <h2>HighBalls</h2>
      <HighballList />
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

function HighballList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Presbyterian",
      alcohol: "1 1/2oz Whiskey",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz Gingerale",
      filler2: "1oz Soda",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "7 & 7",
      alcohol: "1 1/2oz Seagram's Seven",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz 7up",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Scotch & Soda",
      alcohol: "1 1/2oz Scotch",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Soda",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Twist (optional)",
    },
    {
      name: "Deward's & Soda",
      alcohol: "1 1/2oz Dewar's Scotch",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Soda",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Twist (optional)",
    },
    {
      name: "Bourbon & Coke",
      alcohol: "1 1/2oz Well Bourbon",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Coke",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Rum & Coke",
      alcohol: "1 1/2oz Rum",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Coke",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Bacardi & Coke",
      alcohol: "1 1/2oz Bacardi Rum",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Coke",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Cuba Libre",
      alcohol: "1 1/2oz Lt. Rum",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Coke",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Gin & Tonic",
      alcohol: "1 1/2oz Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Tonic Water",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Wedge",
    },
    {
      name: "Gin Rickey",
      alcohol: "1 1/2oz Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Soda",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Vodka & Tonic",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Tonic",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Screwdriver",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Greyhound",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Grapefruit Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Salty Dog",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Grapefruit Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Salt on Rim",
    },
    {
      name: "Bloody Mary",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Bloody Mary Mix",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge or Celery Stalk",
    },
    {
      name: "Cape Codder",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Cranberry Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Sea Breeze",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Grapefruit Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Bay Breeze",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Pinneapple Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Madras",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Orange Juice",
      glass: "highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Harvey Wallbanger",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "2oz Orange Juice",
      filler2: "Top with Galliano (1/2oz)",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Fuzzy Navel",
      alcohol: "1 1/2oz Peach Schnapps",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Hairy Navel",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      filler: "2oz Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Sloe Screw",
      alcohol: "1 1/2oz Sloe Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Sloe Comfortable Screw",
      alcohol: "N/A",
      alcohol1: "1oz Southern Comfort",
      alcohol2: "1/2oz Sloe Gin",
      filler: "2oz Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Tequila Sunrise",
      alcohol: "1 1/2oz Tequila",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "2oz Orange Juice",
      filler2: "Top with Grenadine",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Moscow Mule",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "Ginger Beer",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Copper Mug",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Ranch Water",
      alcohol: "1 1/2oz Tequila",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "2oz Club Soda (Topo Chico)",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Menage a Trois",
      alcohol: "1 1/2oz Vodka",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz White Grape Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "jeweler's Hammer",
      alcohol: "1 1/2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "1oz White Grape Juice",
      filler2: "1oz Club Soda",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Americano",
      alcohol: "N/A",
      alcohol1: "3/4oz Campari",
      alcohol2: "3/4oz Sweet Vermouth",
      filler: "2oz Club Soda",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Orange Slice",
    },
    {
      name: "Mint Julep",
      alcohol: "2oz Bourbon",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      glass: "Highball",
      mixingMethod: "Muddle & Build",
      garnish: "Mint Leaves",
      description:
        "Muddle Sugar & Splash of Soda add 4-6 mint leaves & crushed Ice",
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
                        <strong>Alcohol1:</strong> {selectedCocktail.alcohol1}
                      </li>
                    )}
                    {selectedCocktail.alcohol2 !== "N/A" && (
                      <li>
                        <strong>Alcohol2:</strong> {selectedCocktail.alcohol2}
                      </li>
                    )}
                    {selectedCocktail.filler !== "N/A" && (
                      <li>
                        <strong>Mixer:</strong> {selectedCocktail.filler}
                      </li>
                    )}
                    {selectedCocktail.filler1 !== "N/A" && (
                      <li>
                        <strong>Mixer1:</strong> {selectedCocktail.filler1}
                      </li>
                    )}
                    {selectedCocktail.filler2 !== "N/A" && (
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

export default Highballs;
