import React from "react";

function Martinis() {
  return (
    <>
      <h1>Martinis</h1>
      <MartinisList />
    </>
  );
}

function MartinisList() {
  const cocktails = [
    {
      name: "Martini",
      alcohol1: "1oz Dry Vermouth",
      alcohol2: "2oz Gin",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Olive",
    },
    {
      name: "Dry Martini",
      alcohol1: "1/2oz Dry Vermouth",
      alcohol2: "2oz Gin",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Olive",
    },
    {
      name: "Manhattan",
      alcohol1: "1oz Sweet Vermouth",
      alcohol2: "2oz Whiskey or Bourbon",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Cherry",
    },
    {
      name: "Dry Manhattan",
      alcohol1: "1oz Dry Vermouth",
      alcohol2: "2oz Whiskey or Bourbon",
      alcohol3: "2-3 Dashes of Bitters",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Perfect Manhattan",
      alcohol1: "1oz Sweet Vermouth",
      alcohol2: "1oz Dry Vermouth",
      alcohol3: "2oz Whiskey or Bourbon",
      alcohol4: "2-3 Dashes of Bitters",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Gibson",
      alcohol1: "1oz Dry Vermouth",
      alcohol2: "2oz Gin",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Three Cocktail Onions on a Stick",
    },
    {
      name: "Rob Roy",
      alcohol1: "1oz Sweet Vermouth",
      alcohol2: "2oz Scotch",
      alcohol3: "2-3 Dashes of Bitters",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Cherry",
    },
    {
      name: "Dry Rob Roy",
      alcohol1: "1/2oz Dry Vermouth",
      alcohol2: "2oz Scotch",
      alcohol3: "2-3 Dashes of Bitters",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Perfect Rob Roy",
      alcohol1: "1oz Dry Vermouth",
      alcohol2: "1oz Sweet Vermouth",
      alcohol3: "2oz Scotch",
      alcohol4: "2-3 Dashes of Bitters",
      filler1: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist",
    },
    {
      name: "Cosmopolitan",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Cointreau",
      filler1: "3/4oz Simple Syrup",
      filler2: "3/4oz Lime Juice",
      filler3: "Splash of Cranberry Juice",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Lime Wedge",
    },
    {
      name: "Negroni",
      alcohol1: "3/4oz Sweet Vermouth",
      alcohol2: "3/4oz Campari",
      alcohol3: "3/4oz Gin",
      filler1: "",
      filler2: "",
      glass: "Martini",
      mixingMethod: "Stir & Strain",
      garnish: "Orange Peel",
    },
    {
      name: "Apple Martini",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1oz Sour Apple Schnapps",
      filler1: "1 1/2-2oz Sour Mix or Lemon Sour Mix",
      filler2: "",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "Apple Wedge or Cherry",
    },
    {
      name: "Vieux Carre",
      alcohol1: "1/2oz Rye Whiskey",
      alcohol2: "1/2oz Cognac",
      alcohol3: "1/2oz Benedictine",
      alcohol4: "1/2oz Sweet Vermouth",
      alcohol5: "2-3 Dashes of Angostura & Peychauds Bitters",
      filler1: "",
      filler2: "",
      glass: "Martini or Cocktail",
      mixingMethod: "Stir & Strain",
      garnish: "Lemon Twist, Cocktail Cherry",
    },
    {
      name: "Aviation",
      alcohol1: "1 1/2oz Gin",
      alcohol2: "1/2oz Luxardo",
      filler1: "3/4oz Lemon Juice",
      filler2: "1/4oz Creme de Violette",
      glass: "Martini",
      mixingMethod: "Shake & Double Strain",
      garnish: "Luxardo Cherry",
    },
    {
      name: "Espresso Martini",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1oz Kahlua, Tia Maria or Mr. Black",
      filler1: "1oz Espresso",
      filler2: "Simple Syrup & Vanilla Extract Optional",
      glass: "Martini",
      mixingMethod: "Shake & Strain",
      garnish: "3 Coffee Beans",
    },
    {
      name: "The Last Word",
      alcohol1: "3/4oz Gin",
      alcohol2: "3/4oz Luxardo",
      alcohol3: "3/4oz Green Charteuse",
      filler1: "3/4oz Lime Juice",
      filler2: "",
      glass: "Martini",
      mixingMethod: "Shake & Double Strain",
      garnish: "Cherry",
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

export default Martinis;
