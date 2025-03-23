import React from "react";

function Sours() {
  return (
    <>
      <h1>Sours And Margaritas</h1>
      <SoursList />
    </>
  );
}

function SoursList() {
  const cocktails = [
    {
      name: "Stone Sour",
      alcohol1: "1 1/2oz Whiskey",
      alcohol2: "",
      filler1: "1oz Orange Juice",
      filler2: "1oz Sweet & Sour",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Amaretto Sour",
      alcohol1: "1 1/2oz Amaretto",
      alcohol2: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Whiskey Sour",
      alcohol1: "1 1/2oz Whiskey",
      alcohol2: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Rum Sour",
      alcohol1: "1 1/2oz Lt.Rum",
      alcohol2: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Flagg",
    },
    {
      name: "Daiquiri",
      alcohol1: "1 1/2oz Lt.Rum",
      alcohol2: "",
      filler1: "1oz Lime Juice",
      filler2: "1oz Simple Syrup",
      glass: "Cocktail/Rocks",
      mixingMethod: "Shake & Strain",
      garnish: "Lime Wedge",
    },
    {
      name: "Margarita",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "1/2oz Triple Sec",
      filler1: "1 1/2oz Sweet & Sour",
      filler2: "",
      glass: "Margarita",
      mixingMethod: "Shake & Strain",
      garnish: "Salt Rim & Lime Wedge",
    },
    {
      name: "Blue Margarita",
      alcohol1: "1 1/2oz Tequila",
      alcohol2: "1/2oz Blue Curacao",
      filler1: "1 1/2oz Blue Curacao",
      filler2: "",
      glass: "Margarita",
      mixingMethod: "Shake & Strain",
      garnish: "Salt Rim & Lime Wedge",
    },
    {
      name: "Frozen Strawberry Margarita",
      alcohol1: "2oz Tequila",
      alcohol2: "1oz Triple Sec",
      filler1: "1/2oz Sweet & Sour",
      filler2:
        "1oz Strawberry Margarita/ Daiquiri Mix (Blend with one full glass of Ice)",
      glass: "Margarita",
      mixingMethod: "Blend",
      garnish: "Sugar Rim & Lime Wedge",
    },
    {
      name: "Sidecar",
      alcohol1: "1 1/2oz Brandy",
      alcohol2: "1/2oz Triple Sec",
      filler1: "3/4oz Lemon Juice",
      filler2: "3/4oz Simple Syrup",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Sugar Rim & Flagg",
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

export default Sours;
