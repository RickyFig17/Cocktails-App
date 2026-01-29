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
        <div className="list-thumbnail">
          <img src={cocktail.image} alt={cocktail.name} />
        </div>
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
      image: "images/Two-oz-drinks/Black-Russian.png",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1oz Kahlua",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "White Russian",
      image: "images/Two-oz-drinks/White-Russian.png",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1oz Kahlua",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kahlua And Cream",
      image: "images/Two-oz-drinks/Kahlua-&-Cream.png",
      alcohol: "2oz Kahlua",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Toasted Almond",
      image: "images/Two-oz-drinks/Toasted-Almond.png",
      alcohol: "N/A",
      alcohol1: "1oz Amaretto",
      alcohol2: "1oz Kahlua",
      filler: "Splash of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Gimlet",
      image: "images/Two-oz-drinks/Gimlet.png",
      alcohol: "2oz Gin",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Vodka Gimlet",
      image: "images/Two-oz-drinks/Vodka-Gimlet.png",
      alcohol: "2oz Vodka",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler: "Splash of Roses's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "God Father",
      image: "images/Two-oz-drinks/Godfather.png",
      alcohol: "N/A",
      alcohol1: "1oz Scotch",
      alcohol2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange",
    },
    {
      name: "God Mother",
      image: "images/Two-oz-drinks/Godmother.png",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Stinger",
      image: "images/Two-oz-drinks/Stinger.png",
      alcohol: "N/A",
      alcohol1: "1oz Brandy",
      alcohol2: "1oz White Creme de Menthe",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon or Mint",
    },
    {
      name: "Colorado Bulldog",
      image: "images/Two-oz-drinks/Colorado-Bulldog.png",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1oz Kahlua",
      filler: "Splash of Coke and Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kamikaze",
      image: "images/Two-oz-drinks/Kamikaze.png",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1oz Triple Sec",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Rusty Nail",
      image: "images/Two-oz-drinks/Rusty-Nail.png",
      alcohol: "N/A",
      alcohol1: "1oz Scotch",
      alcohol2: "1oz Drambuie",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Peel",
    },
    {
      name: "Old Fashion",
      image: "images/Two-oz-drinks/Old-Fashioned.png",
      alcohol: "2oz Whiskey",
      alcohol1: "N/A",
      alcohol2: "N/A",
      filler:
        "1/2oz Simple Syrup, Orange Zest, 2-3 dashes of Bitters. Muddle Ingredients, add Ice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange Peel, Cherry",
    },
    {
      name: "Negroni",
      image: "images/Two-oz-drinks/Negroni.png",
      alcohol: "N/A",
      alcohol1: "3/4oz Gin",
      alcohol2: "3/4oz Sweet Vermouth",
      alcohol3: "3/4oz Campari",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange Peel",
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
