import React from "react";

function CreamDrinks() {
  return (
    <>
      <h3>Cream Drinks and After Dinner Drinks</h3>
      <CreamDrinksList />
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
      <p>
        <strong>{cocktail.alcohol3}</strong>
      </p>
      <p>{cocktail.filler1}</p>
      <p>{cocktail.filler2}</p>
      <p>{cocktail.glass}</p>
      <p>{cocktail.mixingMethod}</p>
      <p>{cocktail.garnish}</p>
    </div>
  );
}

function CreamDrinksList() {
  const cocktails = [
    {
      name: "Grasshopper",
      alcohol1: "1oz White Creme de Cacao",
      alcohol2: "1oz Green Creme de Menthe",
      filler: "Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "none",
    },
    {
      name: "Pink Squirrel",
      alcohol1: "1oz White Creme de Cacao",
      alcohol2: "1oz Creme de Almond (Noyeaux)",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "none",
    },
    {
      name: "Brandy Alexander",
      alcohol1: "1oz Brown Creme de Cacao",
      alcohol2: "1oz Brandy",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "Nutmeg",
    },
    {
      name: "Alexander",
      alcohol1: "1oz Brown Creme de Cacao",
      alcohol2: "1oz Gin",
      filler: "2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "Nutmeg",
    },
    {
      name: "Mudslide",
      alcohol1: "3/4oz Vodka",
      alcohol2: "3/4oz Bailey's Irish Cream",
      alcohol3: "3/4oz Kahlua",
      filler: "1 1/2oz Cream",
      glass: "Cocktail",
      mixingMethod: "Shake & Strain",
      garnish: "None",
    },
    {
      name: "Irish Coffee",
      alcohol1: "1 1/2oz Irish Whiskey",
      alcohol2: "",
      filler: "Fill with Hot Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
    },
    {
      name: "Keoke Coffee",
      alcohol1: "3/4oz Brandy (First Ingredient)",
      alcohol2: "3/4oz Kahlua",
      alcohol3: "3/4oz Brown Creme de Cacao",
      filler: "Fill with Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
    },
    {
      name: "Nutty Irishman",
      alcohol1: "1oz Bailey's Irish Cream",
      alcohol2: "1oz Frangelico",
      filler: "Fill with Hot Coffee",
      glass: "Irish Coffee",
      mixingMethod: "Pour",
      garnish: "Whip Cream",
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

export default CreamDrinks;
