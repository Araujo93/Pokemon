import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import img from "../../assets/pokemon_151.png";
import secondGen from "../../assets/new.png";
import thirdGen from "../../assets/third.png";

const Home = () => {
  return (
    <>
      <div className="layout">
        <Link className="original" to="/">
          <h2 className="title">Original 151</h2>
          <img className="img" src={img} alt="" />
        </Link>
        <Link className="second" to="/secondGen">
          <h2 className="title">Second Gen</h2>
          <img className="img" src={secondGen} alt="" />
        </Link>
      </div>
      <Link className="third" to="/thirdGen">
        <h2 className="title">Third Gen</h2>
        <img className="img" src={thirdGen} alt="" />
      </Link>
    </>
  );
};

export default Home;
