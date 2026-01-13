import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Home from "./Home";
import TwoOzCocktails from "./TwoOzCocktails";
import Header from "./Header";
import TallDrinks from "./TallDrinks";
import Highballs from "./Highballs";
import CreamDrinks from "./CreamDrinks";
import Martinis from "./Martinis";
import Sours from "./Sours";
import Shooters from "./Shooters";
import WineCocktails from "./WineCocktails";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState(0);
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Define the order of your tabs to calculate "left" or "right"
  const pathOrder = [
    "/",
    "/two-oz-cocktails",
    "/tall-drinks",
    "/highballs",
    "/cream-drinks",
    "/martinis",
    "/sours",
    "/shooters",
    "/wine-cocktails",
  ];

  useEffect(() => {
    const newIdx = pathOrder.indexOf(location.pathname);
    const oldIdx = pathOrder.indexOf(prevPath);

    // If going to a higher index, slide left. If lower, slide right.
    setDirection(newIdx > oldIdx ? 1 : -1);
    setPrevPath(location.pathname);
  }, [location.pathname]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="App">
      <Header />
      <div
        className="content-wrapper"
        style={{ overflowX: "hidden", position: "relative" }}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/two-oz-cocktails" element={<TwoOzCocktails />} />
              <Route path="/tall-drinks" element={<TallDrinks />} />
              <Route path="/highballs" element={<Highballs />} />
              <Route path="/cream-drinks" element={<CreamDrinks />} />
              <Route path="/martinis" element={<Martinis />} />
              <Route path="/sours" element={<Sours />} />
              <Route path="/shooters" element={<Shooters />} />
              <Route path="/wine-cocktails" element={<WineCocktails />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
