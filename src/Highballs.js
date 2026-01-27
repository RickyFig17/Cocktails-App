import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Highballs.scss";

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
      image: "images/Highballs/Presbyterian.png",
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
      image: "images/Highballs/7-&-7.png",
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
      image: "images/Highballs/Scotch-&-Soda.png",
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
      image: "images/Highballs/Dewards-&-Soda.png",
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
      image: "images/Highballs/Bourbon-&-Coke.png",
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
      image: "images/Highballs/Rum-&-Coke.png",
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
      name: "Cuba Libre",
      image: "images/Highballs/Cuba-Libre.png",
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
      image: "images/Highballs/Gin-&-Tonic.png",
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
      image: "images/Highballs/Gin-Rickey.png",
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
      image: "images/Highballs/Vodka-Tonic.png",
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
      image: "images/Highballs/Screwdriver.png",
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
      image: "images/Highballs/Greyhound.png",
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
      image: "images/Highballs/Salty-Dog.png",
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
      image: "images/Highballs/Bloody-Mary.png",
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
      image: "images/Highballs/Cape-Codder.png",
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
      image: "images/Highballs/Sea-Breeze.png",
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
      image: "images/Highballs/Bay-Breeze.png",
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
      image: "images/Highballs/Madras.png",
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
      image: "images/Highballs/Harvey-Wallbanger.png",
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
      image: "images/Highballs/Fuzzy-Navel.png",
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
      image: "images/Highballs/Hairy-Navel.png",
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
      image: "images/Highballs/Sloe-Screw.png",
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
      image: "images/Highballs/Sloe-Comfortable-Screw.png",
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
      image: "images/Highballs/Tequila-Sunrise.png",
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
      image: "images/Highballs/Moscow-Mule.png",
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
      image: "images/Highballs/Ranch-Water.png",
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
      image: "images/Highballs/Menage-a-Trois.png",
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
      name: "Americano",
      image: "images/Highballs/Americano.png",
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
      image: "images/Highballs/Mint-Julep.png",
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
