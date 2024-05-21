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
        <div className="flex first-gen ">
          <Link className="original" to="/first">
            <h2 className="gradient title">Original 151</h2>
            <img className="img" src={img} alt="" />
          </Link>
        </div>
        <div className="flex second-gen">
          <Link className="second" to="/secondGen">
            <h2 className="title gradient">Second Gen</h2>
            <img className="img" src={secondGen} alt="" />
          </Link>
        </div>
        <div className="flex third-gen">
          <Link className="third" to="/thirdGen">
            <h2 className="title gradient">Third Gen</h2>
            <img className="img" src={thirdGen} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
