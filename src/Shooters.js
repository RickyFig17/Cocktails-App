import React from "react";

function Shooters() {
  return (
    <>
      <h1>Shooters</h1>
      <ShootersList />
    </>
  );
}

function ShootersList() {
  const cocktails = [
    {
      name: "Purple Hooter Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Raspberry Liqueur",
      alcohol3: "",
      filler1: "Splash of Sweet & Sour",
      filler2: "Splash of Cranberry",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "",
      alcohol1: "",
      alcohol2: "",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "",
      mixingMethod: "",
      garnish: "",
    },
    {
      name: "",
      alcohol1: "",
      alcohol2: "",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "",
      mixingMethod: "",
      garnish: "",
    },
    {
      name: "",
      alcohol1: "",
      alcohol2: "",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "",
      mixingMethod: "",
      garnish: "",
    },
    {
      name: "",
      alcohol1: "",
      alcohol2: "",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "",
      mixingMethod: "",
      garnish: "",
    },
    {
      name: "",
      alcohol1: "",
      alcohol2: "",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
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

export default Shooters;
