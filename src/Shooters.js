import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Shooters.scss";

function Shooters() {
  return (
    <div className="shooters-cocktails">
      <h2>Shooters</h2>
      <ShootersList />
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

function ShootersList() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const cocktails = [
    {
      name: "Purple Hooter Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Raspberry Liqueur",
      alcohol3: "N/A",
      filler: "N/A",
      filler1: "Splash of Sweet & Sour",
      filler2: "Splash of Cranberry",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Melon Ball Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Melon Liqueur",
      alcohol3: "N/A",
      filler: "Splash of Pineapple Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Sex On The Beach Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "N/A",
      filler: "N/A",
      filler1: "Splash of Orange Juice",
      filler2: "Splash of Cranberry Juice",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Woo Woo Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "N/A",
      filler: "Splash of Cranberry",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Silk Panties",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Kamikaze Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Triple Sec",
      alcohol3: "N/A",
      filler: "Splash of Roses's Lime Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Blue Kamikaze Shooter",
      alcohol: "N/A",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "N/A",
      filler: "Splash of Roses' Lime Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Orgasm",
      alcohol: "N/A",
      alcohol1: "1oz Amaretto",
      alcohol2: "1/2oz Kahlua",
      alcohol3: "1/2oz Bailey's Irish Cream",
      filler: "Splash of Cream",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Mind Eraser",
      alcohol: "N/A",
      alcohol1: "1oz Kahlua",
      alcohol2: "1oz Vodka",
      alcohol3: "N/A",
      filler: "Splash of Soda",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Rocks",
      mixingMethod: "On Ice",
      description:
        "Kahlua needs to be poured first then the Vodka. Customer must drink through a straw",
      garnish: "none",
    },
    {
      name: "Alabama Slammer",
      alcohol: "N/A",
      alcohol1: "1oz Southern Comfort",
      alcohol2: "1/2oz Amaretto",
      alcohol3: "1/2oz Sloe Gin",
      filler: "Splash of Orange Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Washington Apple",
      alcohol: "N/A",
      alcohol1: "1oz Crown Royal",
      alcohol2: "1/2oz Sour Apple Schnapps",
      alcohol3: "N/A",
      filler: "Splash of Cranberry Juice",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Green Tea",
      alcohol: "N/A",
      alcohol1: "1oz Jameson",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "N/A",
      filler: "N/A",
      filler1: "Splash of Pinneapple Juice",
      filler2: "Splash of Sweet & Sour Mix",
      filler3: "Splash of Sprite",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Buttery Nipple",
      alcohol: "N/A",
      alcohol1: "1oz Butterschotch Schnapps",
      alcohol2: "1oz Bailey's Irish Cream",
      alcohol3: "N/A",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Pony",
      mixingMethod: "Spoon Float",
      garnish: "none",
    },
    {
      name: "B-52",
      alcohol: "N/A",
      alcohol1: "1/3 Kahlua",
      alcohol2: "1/3 Bailey's Irish Cream",
      alcohol3: "1/3 Grand Marnier",
      filler: "N/A",
      filler1: "N/A",
      filler2: "N/A",
      filler3: "N/A",
      glass: "Pony",
      mixingMethod: "Spoon Float",
      garnish: "none",
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
                    {selectedCocktail.liquor2 !== "N/A" && (
                      <li>
                        <strong>Alcohol 2:</strong> {selectedCocktail.alcohol2}
                      </li>
                    )}
                    {selectedCocktail.alcohol3 !== "N/A" && (
                      <li>
                        <strong>Alcohol 3:</strong> {selectedCocktail.alcohol3}
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

export default Shooters;
