import React from "react";
import "./TwoOzCocktails.scss";

function TwoOzCocktails() {
  return (
    <div className="two-oz-cocktails">
      <h2>2oz Cocktails</h2>
      <TwoOzCocktailsList />
    </div>
  );
}

function CocktailCard({ cocktail }) {
  return (
    <div className="cocktail-card">
      <h3>{cocktail.name}</h3>
      <p>
        <strong>{cocktail.liquor1}</strong>
      </p>
      <p>
        <strong>{cocktail.liquor2}</strong>
      </p>
      <p>{cocktail.filler}</p>
      <p>{cocktail.glass}</p>
      <p>{cocktail.mixingMethod}</p>
      <p>{cocktail.garnish}</p>
    </div>
  );
}

function TwoOzCocktailsList() {
  const cocktails = [
    {
      name: "Black Russian",
      liquor1: "1oz Vodka",
      liquor2: "1oz Kahlua",
      filler: "",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "White Russian",
      liquor1: "1oz Vodka",
      liquor2: "1oz Kahlua",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kahlua And Cream",
      liquor1: "2oz Kahlua",
      liquor2: "N/A",
      filler: "Splash Of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Toasted Almond",
      liquor1: "1oz Amaretto",
      liquor2: "1oz Kahlua",
      filler: "Splash of Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Gimlet",
      liquor1: "2oz Gin",
      liquor2: "N/A",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Vodka Gimlet",
      liquor1: "2oz Vodka",
      liquor2: "N/A",
      filler: "Splash of Roses's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "God Father",
      liquor1: "1oz Scotch",
      liquor2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Orange",
    },
    {
      name: "God Mother",
      liquor1: "1oz Vodka",
      liquor2: "1oz Amaretto",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Stinger",
      liquor1: "1oz Brandy",
      liquor2: "1oz White Creme de Menthe",
      filler: "N/A",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon or Mint",
    },
    {
      name: "Colorado Bulldog",
      liquor1: "1oz Vodka",
      liquor2: "1oz Kahlua",
      filler: "Splash of Coke and Cream",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "none",
    },
    {
      name: "Kamikaze",
      liquor1: "1oz Vodka",
      liquor2: "1oz Triple Sec",
      filler: "Splash of Rose's Lime Juice",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lime Wedge",
    },
    {
      name: "Rusty Nail",
      liquor1: "1oz Scotch",
      liquor2: "1oz Drambuie",
      filler: "none",
      glass: "Rocks Glass",
      mixingMethod: "Build on Ice",
      garnish: "Lemon Peel",
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

export default TwoOzCocktails;
