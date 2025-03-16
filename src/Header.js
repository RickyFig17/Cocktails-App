import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="header">Cocktails App</h1>
      <div className="nav-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
