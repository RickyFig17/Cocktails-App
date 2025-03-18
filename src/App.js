import "./App.css";
import TextContent from "./Cocktails.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TwoOzCocktails from "./TwoOzCocktails";
import Header from "./Header";
import TallDrinks from "./TallDrinks";
import Highballs from "./Highballs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/two-oz-cocktails" element={<TwoOzCocktails />} />
            <Route path="/tall-drinks" element={<TallDrinks />} />
            <Route path="/highballs" element={<Highballs />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
