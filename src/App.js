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
import SplashScreen from "./SplashScreen";
import BottomBar from "./BottomBar";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [direction, setDirection] = useState(0);
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [searchTerm, setSearchTerm] = useState("")

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []); // Empty array means this ONLY runs on first load

  // --- 2. DIRECTION LOGIC ---
  useEffect(() => {
    const newIdx = pathOrder.indexOf(location.pathname);
    const oldIdx = pathOrder.indexOf(prevPath);

    if (newIdx !== oldIdx) {
      setDirection(newIdx > oldIdx ? 1 : -1);
      setPrevPath(location.pathname);
    }
  }, [location.pathname, prevPath]);

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
      x: direction < 0 ? "-100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        )}
      </AnimatePresence>
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
              <Route path="/two-oz-cocktails" element={<TwoOzCocktails searchTerm={searchTerm} />} />
              <Route path="/tall-drinks" element={<TallDrinks searchTerm={searchTerm} />} />
              <Route path="/highballs" element={<Highballs searchTerm={searchTerm} />} />
              <Route path="/cream-drinks" element={<CreamDrinks searchTerm={searchTerm} />} />
              <Route path="/martinis" element={<Martinis searchTerm={searchTerm} />} />
              <Route path="/sours" element={<Sours searchTerm={searchTerm} />} />
              <Route path="/shooters" element={<Shooters searchTerm={searchTerm} />} />
              <Route path="/wine-cocktails" element={<WineCocktails searchTerm={searchTerm} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <BottomBar />
      
    </div>
  );
}

export default App;
