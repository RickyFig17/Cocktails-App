import React from "react";

function Shooters() {
  return (
    <>
      <h1>Shooters</h1>
      <ShootersList />
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
      <p>{cocktail.filler3}</p>
      <p>{cocktail.glass}</p>
      <p>{cocktail.mixingMethod}</p>
      <p>{cocktail.garnish}</p>
    </div>
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
      name: "Melon Ball Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Melon Liqueur",
      alcohol3: "",
      filler1: "Splash of Pineapple Juice",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Sex On The Beach Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      filler1: "Splash of Orange Juice",
      filler2: "Splash of Cranberry Juice",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Woo Woo Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      filler1: "Splash of Cranberry",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Silk Panties",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Kamikaze Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Triple Sec",
      alcohol3: "",
      filler1: "Splash of Roses's Lime Juice",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Blue Kamikaze Shooter",
      alcohol1: "1oz Vodka",
      alcohol2: "1/2oz Blue Curacao",
      alcohol3: "",
      filler1: "Splash of Roses' Lime Juice",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Orgasm",
      alcohol1: "1oz Amaretto",
      alcohol2: "1/2oz Kahlua",
      alcohol3: "1/2oz Bailey's Irish Cream",
      filler1: "Splash of Cream",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Mind Eraser",
      alcohol1: "1oz Kahlua",
      alcohol2: "1oz Vodka",
      alcohol3: "",
      filler1: "Splash of Soda",
      filler2: "",
      filler3: "",
      glass: "Rocks",
      mixingMethod: "On Ice",
      description:
        "Kahlua needs to be poured first then the Vodka. Customer must drink through a straw",
      garnish: "none",
    },
    {
      name: "Alabama Slammer",
      alcohol1: "1oz Southern Comfort",
      alcohol2: "1/2oz Amaretto",
      alcohol3: "1/2oz Sloe Gin",
      filler1: "Splash of Orange Juice",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Washington Apple",
      alcohol1: "1oz Crown Royal",
      alcohol2: "1/2oz Sour Apple Schnapps",
      alcohol3: "",
      filler1: "Splash of Cranberry Juice",
      filler2: "",
      filler3: "",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Green Tea",
      alcohol1: "1oz Jameson",
      alcohol2: "1/2oz Peach Schnapps",
      alcohol3: "",
      filler1: "Splash of Pinneapple Juice",
      filler2: "Splash of Sweet & Sour Mix",
      filler3: "Splash of Sprite",
      glass: "Shooter",
      mixingMethod: "Swirl & Strain",
      garnish: "none",
    },
    {
      name: "Buttery Nipple",
      alcohol1: "1oz Butterschotch Schnapps",
      alcohol2: "1oz Bailey's Irish Cream",
      alcohol3: "",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "Pony",
      mixingMethod: "Spoon Float",
      garnish: "none",
    },
    {
      name: "B-52",
      alcohol1: "1/3 Kahlua",
      alcohol2: "1/3 Bailey's Irish Cream",
      alcohol3: "1/3 Grand Marnier",
      filler1: "",
      filler2: "",
      filler3: "",
      glass: "Pony",
      mixingMethod: "Spoon Float",
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

export default Shooters;
