"use client";
import React, { useState } from "react";
import Navlinks from "../Navlinks";
import "../nav.css";
import Hamburger from "./Hamburger";

const MobileNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<Boolean>(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="mobile_nav">
      <h1 className="logo">Poke World</h1>
      {hamburgerOpen && <Navlinks hamburger={hamburgerOpen} />}
      <div className="hamburger" onClick={() => toggleHamburger()}>
        <Hamburger />
      </div>
    </nav>
  );
};

export default MobileNavigation;
