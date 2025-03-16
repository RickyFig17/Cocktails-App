import React from "react";

function TwoOzCocktails() {
  return (
    <>
      <h2>2oz Cocktails</h2>
      <TwoOzCocktailsList />
    </>
  );
}

function TwoOzCocktailsList() {
  const cocktails = [
    {
      name: "Black Russian",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "N/A",
    },
  ];

  return (
    <ul>
      {cocktails.map((cocktail, index) => (
        <li key={index}>
          <h3>{cocktail.name}</h3>
          <p>{cocktail.glass}</p>
          <p>{cocktail.mixingMethod}</p>
          <p>{cocktail.garnish}</p>
        </li>
      ))}
    </ul>
  );
}

export default TwoOzCocktails;
