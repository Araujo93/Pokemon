import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router";
import Hamburger from "./mobileNav/Hamburger";
import "./nav.css";

const Navlinks = ({ hamburger }: any) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);

  const remove = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <>
      <ul className="nav">
        <li className="listItem">
          <Link to="/home">Home</Link>
        </li>
        <li className="listItem">
          <Link to="/first">Original</Link>
        </li>
        <li className="listItem">
          <Link to="/secondGen">Second Gen</Link>
        </li>
        <li className="listItem">
          <Link to="/thirdGen">Third Gen</Link>
        </li>
        {isAuthenticated && (
          <button className="auth_btn listItem" onClick={remove}>
            Logout
          </button>
        )}
        {!isAuthenticated && (
          <button
            className="auth_btn listItem"
            onClick={() => history.push("/")}
          >
            LogIn
          </button>
        )}
      </ul>
    </>
  );
};

export default Navlinks;
