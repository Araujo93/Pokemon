import React from "react";
import Navlinks from "./Navlinks";
import "./nav.css";

const Navigation = () => {
  return (
    <nav className="navbar-desktop">
      <div className="navbar-1">
        <h1 className="logo">Poke World</h1>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navigation;
