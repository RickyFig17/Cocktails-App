import React from "react";

function WineCocktails() {
  return (
    <>
      <h1>Wine Cocktails</h1>
      <WineCocktailList />
    </>
  );
}

function CocktailCard({ cocktail }) {
  return (
    <div className="cocktail-card">
      <h3>{cocktail.name}</h3>
      <p>
        <strong>{cocktail.alcohol1}</strong>
      </p>
      <p>
        <strong>{cocktail.alcohol2}</strong>
      </p>
      <p>{cocktail.filler1}</p>
      <p>{cocktail.filler2}</p>
      <p>{cocktail.glass}</p>
      <p>{cocktail.mixingMethod}</p>
      <p>{cocktail.garnish}</p>
    </div>
  );
}

function WineCocktailList() {
  const cocktails = [
    {
      name: "Spritzer",
      alcohol1: "1/2 White Wine",
      alcohol2: "",
      filler1: "1/2 Soda",
      filler2: "",
      glass: "Wine/Fancy",
      mixingMethod: "Pour",
      garnish: "Lemon Twist",
    },
    {
      name: "Mimosa",
      alcohol1: "1/2 Champagne",
      alcohol2: "",
      filler1: "1/2 Orange Juice",
      filler2: "",
      glass: "Flute/Fancy",
      mixingMethod: "Pour",
      garnish: "none",
    },
  ];

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail, index) => (
        <CocktailCard key={index} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default WineCocktails;
