import React from "react";

function TallDrinks() {
  return (
    <>
      <h3>Tall Drinks</h3>
      <TallDrinksList />
    </>
  );
}

function TallDrinksList() {
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
        name: "",
        alcohol1: "",
        alcohol2: "",
        alcohol3: "",
        alcohol4: "",
        alcohol5: "",
        filler1: "",
        filler2: "",
        filler3: "",
        top: "",
        glass: "",
        mixingMethod: "",
        garnish: "",
      },
      {
        name: "",
        alcohol1: "",
        alcohol2: "",
        alcohol3: "",
        alcohol4: "",
        alcohol5: "",
        filler1: "",
        filler2: "",
        filler3: "",
        top: "",
        glass: "",
        mixingMethod: "",
        garnish: "",
      },
      {
        name: "",
        alcohol1: "",
        alcohol2: "",
        alcohol3: "",
        alcohol4: "",
        alcohol5: "",
        filler1: "",
        filler2: "",
        filler3: "",
        top: "",
        glass: "",
        mixingMethod: "",
        garnish: "",
      },
  ];
  return (
    <ul>
      {cocktails.map((cocktail, index) => (
        <li key={index}>
          <h3>{cocktail.name}</h3>
          <h4>{cocktail.alcohol1}</h4>
          <h4>{cocktail.alcohol2}</h4>
          <h4>{cocktail.alcohol3}</h4>
          <h4>{cocktail.alcohol4}</h4>
          <h4>{cocktail.alcohol5}</h4>
          <h4>{cocktail.filler1}</h4>
          <h4>{cocktail.filler2}</h4>
          <h4>{cocktail.filler3}</h4>
          <p>{cocktail.glass}</p>
          <p>{cocktail.mixingMethod}</p>
          <p>{cocktail.garnish}</p>
        </li>
      ))}
    </ul>
  );
}

export default TallDrinks;
