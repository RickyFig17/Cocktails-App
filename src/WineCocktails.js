import React from "react";

function WineCocktails() {
  return (
    <>
      <h1>Wine Cocktails</h1>
      <WineCocktailList />
    </>
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
    <ul>
      {cocktails.map((cocktail, index) => (
        <li key={index}>
          <h3>{cocktail.name}</h3>
          <h4>{cocktail.alcohol1}</h4>
          <h4>{cocktail.alcohol2}</h4>
          <h4>{cocktail.filler1}</h4>
          <h4>{cocktail.filler2}</h4>
          <p>{cocktail.glass}</p>
          <p>{cocktail.mixingMethod}</p>
          <p>{cocktail.garnish}</p>
        </li>
      ))}
    </ul>
  );
}

export default WineCocktails;
