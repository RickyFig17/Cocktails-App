import "./App.css";
import TextContent from "./Cocktails.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TwoOzCocktails from "./TwoOzCocktails";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/two-oz-cocktails" element={<TwoOzCocktails />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
