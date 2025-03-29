import React from "react";
import "./TallDrinks.scss";

function TallDrinks() {
  return (
    <>
      <h3>Tall Drinks</h3>
      <TallDrinksList />
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
      <p>
        <strong>{cocktail.alcohol4}</strong>
      </p>
      <p>
        <strong>{cocktail.alcohol5}</strong>
      </p>
      <p>{cocktail.filler1}</p>
      <p>{cocktail.filler2}</p>
      <p>{cocktail.filler3}</p>
      <p>{cocktail.glass}</p>
      <p>{cocktail.mixingMethod}</p>
      <p>{cocktail.garnish}</p>
      <p>{cocktail.description}</p>
    </div>
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
      name: "John Collins",
      alcohol1: "2oz Whiskey",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour Mix",
      filler2: "",
      filler3: "",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Sloe Gin Fizz",
      alcohol1: "2oz Sloe Gin",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "1oz Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Cherry",
    },
    {
      name: "Lynchburg Lemonade",
      alcohol1: "1 1/2oz Jack Daniels",
      alcohol2: "1/2oz Triple Sec",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Blue Hawaiian",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Pinneapple Juice",
      filler2: "",
      filler3: "",
      top: "Top Soda",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneaple Wedge",
    },
    {
      name: "Sex on the Beach",
      alcohol1: "1 1/2oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "1oz Orange Juice",
      filler2: "1oz Cranberry Juice",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Bahama Mama",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "1/2oz Malibu Rum",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "1oz Orange Juice",
      filler3: "1oz Pinneapple Juice",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Rum Runner",
      alcohol1: "1oz Lt. Rum",
      alcohol2: "1/2oz Blackberry Brandy",
      alcohol3: "1/2oz Creme de Banana",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "1 1/2oz Orange Juice",
      filler3: "1 1/2oz Pinneapple Juice",
      top: "Top with Jamaica Rum",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple",
    },
    {
      name: "Mai Tai",
      alcohol1: "1/2oz Lt. Rum",
      alcohol2: "1/2oz Triple sec",
      alcohol3: "1/2oz Creme de Almond",
      alcohol4: "",
      alcohol5: "",
      filler1: "1/2oz Grenadine",
      filler2: "3oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Island Tea",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with Coke",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lemon Wedge",
    },
    {
      name: "Electric Lemonade",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "Top with 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "flag",
    },
    {
      name: "Miami Ice",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Blue Curacao",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Flag",
    },
    {
      name: "Long Beach Tea",
      alcohol1: "1/2oz Vodka",
      alcohol2: "1/2oz Gin",
      alcohol3: "1/2oz Rum",
      alcohol4: "1/2oz Tequila",
      alcohol5: "1/2oz Triple Sec",
      filler1: "1oz Sweet & Sour",
      filler2: "1oz Cranberry Juice",
      filler3: "",
      top: "Soda or 7up",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Lime Wedge",
    },
    {
      name: "Liquid Marijuana",
      alcohol1: "1/2oz Captain Morgan",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "1/2oz Malibu",
      alcohol4: "1/2oz Midori",
      alcohol5: "",
      filler1: "1 1/2oz Pinneapple Juice",
      filler2: "1 1/2oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Tall Glass",
      mixingMethod: "Build & Shake",
      garnish: "Pinneapple Wedge",
    },
    {
      name: "Mojito",
      alcohol1: "2oz Bacardi Rum",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "1oz Simple Syrup",
      filler2: "1oz Lime Juice",
      filler3: "",
      top: "Soda",
      glass: "Tall Glass",
      mixingMethod: "Swirl",
      garnish: "Mint Stem & Leaves, Lime Wedge or Wheel",
      description:
        "Add 4-5 mint leaves from bottom of stem, get them wet with the mix already on glass. Do not muddle.",
    },
    {
      name: "Frozen Strawberry Daiquiri",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "3oz Strawberry Daiqiri mix or Strawberry puree",
      filler2: "1/2oz Sweet & Sour",
      filler3: "",
      top: "",
      glass: "Specialty",
      mixingMethod: "Blend",
      garnish: "Sugar Rim & Whip Cream",
      description: "Blend with one full glass of ice",
    },
    {
      name: "Frozen Pina Colada",
      alcohol1: "1 1/2oz Lt. Rum",
      alcohol2: "3 1/2oz Pina Colada Mix",
      alcohol3: "",
      alcohol4: "",
      alcohol5: "",
      filler1: "2oz Sweet & Sour",
      filler2: "",
      filler3: "",
      top: "",
      glass: "Specialty",
      mixingMethod: "Blend",
      garnish: "Pinneapple Wedge & Whip Cream",
      description: "Blend with one full glass of ice",
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

export default TallDrinks;
