import React from "react";
import Navlinks from "./Navlinks";
import "./nav.css";

const Navigation = () => {
  return (
    <nav className="nav_big">
      <h1 className="logo">Poke World</h1>
      <Navlinks />
    </nav>
  );
};

export default Navigation;
