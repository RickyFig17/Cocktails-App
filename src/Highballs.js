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
      alcohol1: "1 1/2oz Whiskey",
      alcohol2: "",
      filler1: "1oz Gingerale",
      filler2: "1oz Soda",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "7 & 7",
      alcohol1: "1 1/2oz Seagram's Seven",
      alcohol2: "",
      filler1: "2oz 7up",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Scotch & Soda",
      alcohol1: "1 1/2oz Scotch",
      alcohol2: "",
      filler1: "2oz Soda",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Twist (optional)",
    },
    {
      name: "Deward's & Soda",
      alcohol1: "1 1/2oz Dewar's Scotch",
      alcohol2: "",
      filler1: "2oz Soda",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Twist (optional)",
    },
    {
      name: "Bourbon & Coke",
      alcohol1: "1 1/2oz Well Bourbon",
      alcohol2: "",
      filler1: "2oz Coke",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Rum & Coke",
      alcohol1: "1 1/2oz Rum",
      alcohol2: "",
      filler1: "2oz Coke",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Bacardi & Coke",
      alcohol1: "1 1/2oz Bacardi Rum",
      alcohol2: "",
      filler1: "2oz Coke",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Cuba Libre",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "",
      filler1: "2oz Coke",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Wedge",
    },
    {
      name: "Gin & Tonic",
      alcohol1: "1 1/2oz Gin",
      alcohol2: "",
      filler1: "2oz Tonic Water",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Gin Rickey",
      alcohol1: "1 1/2oz Soda",
      alcohol2: "",
      filler1: "2oz Soda",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Vodka & Tonic",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Tonic",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Screwdriver",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Orange Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Greyhound",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Grapefruit Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Salty Dog",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Grapefruit Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Salt on Rim",
    },
    {
      name: "Bloody Mary",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Bloody Mary Mix",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge or Celery Stalk",
    },
    {
      name: "Cape Codder",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Cranberry Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Sea Breeze",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Grapefruit Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Bay Breeze",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Pinneapple Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Madras",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz Orange Juice",
      glass: "highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Harvey Wallbanger",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "2oz Orange Juice",
      filler2: "Top with Galliano (1/2oz)",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Fuzzy Navel",
      alcohol1: "1 1/2oz Peach Schnapps",
      alcohol2: "",
      filler1: "2oz Orange Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Hairy Navel",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      filler1: "2oz Orange Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Sloe Screw",
      alcohol1: "1 1/2oz Sloe Gin",
      alcohol2: "",
      filler1: "2oz Orange Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Sloe Comfortable Screw",
      alcohol1: "1oz Southern Comfort",
      alcohol2: "1/2oz Sloe Gin",
      filler1: "2oz Orange Juice",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Tequila Sunrise",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "",
      filler1: "2oz Orange Juice",
      filler2: "Top with Grenadine",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Moscow Mule",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "Ginger Beer",
      filler2: "",
      glass: "Copper Mug",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Ranch Water",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "",
      filler1: "2oz Club Soda (Topo Chico)",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Menage a Trois",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "1oz Cranberry Juice",
      filler2: "1oz White Grape Juice",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "jeweler's Hammer",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "",
      filler1: "1oz White Grape Juice",
      filler2: "1oz Club Soda",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Americano",
      alcohol1: "3/4oz Campari",
      alcohol2: "3/4oz Sweet Vermouth",
      filler1: "2oz Club Soda",
      filler2: "",
      glass: "Highball",
      mixingMethod: "Build on Ice",
      garnish: "Orange Slice",
    },
    {
      name: "Mint Julep",
      alcohol1: "2oz Bourbon",
      alcohol2: "",
      filler1: "",
      filler2: "",
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

export default Highballs;
