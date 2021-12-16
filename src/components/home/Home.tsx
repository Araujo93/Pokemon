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
        <Link className="original" to="/first">
          <h2 className="title">
            <h4 className="gradient">Original 151</h4>
            {/* <span className="span1">O</span>
            <span className="span2">r</span>
            <span className="span3">i</span>
            <span className="span1">g</span>
            <span className="span2">i</span>
            <span className="span3">n</span>
            <span className="span1">a</span>
            <span className="span2">l</span>
            <span className="span3">1</span>
            <span className="span1">5</span>
            <span className="span2">1</span> */}
          </h2>
          <img className="img" src={img} alt="" />
        </Link>
        <Link className="second" to="/secondGen">
          <h2 className="title">
            <span className="span1">S</span>
            <span className="span2">e</span>
            <span className="span3">c</span>
            <span className="span1">o</span>
            <span className="span2">n</span>
            <span className="span3">d</span> <span className="span1">G</span>
            <span className="span2">e</span>
            <span className="span3">n</span>
          </h2>
          <img className="img" src={secondGen} alt="" />
        </Link>
      </div>
      <Link className="third" to="/thirdGen">
        <h2 className="title">
          {" "}
          <span className="span1">T</span>
          <span className="span2">h</span>
          <span className="span3">i</span>
          <span className="span1">r</span>
          <span className="span2">d</span> <span className="span3">G</span>
          <span className="span1">e</span>
          <span className="span2">n</span>
        </h2>
        <img className="img" src={thirdGen} alt="" />
      </Link>
    </>
  );
};

export default Home;
