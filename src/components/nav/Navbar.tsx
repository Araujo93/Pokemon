import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./nav.css";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/slices/userSlice";
const Navbar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const remove = () => {
    dispatch(logOut());
    history.push("/login");
  };

  return (
    <nav className="container12">
      <h1>Poke World</h1>
      <ul className="nav">
        <li className="listItem">
          <Link to="/Home">Home</Link>
        </li>
        <li className="listItem">
          <Link to="/">Original</Link>
        </li>
        <li className="listItem">
          <Link to="/secondGen">Second Gen</Link>
        </li>
        <li className="listItem">
          <Link to="/thirdGen">Third Gen</Link>
        </li>
        <li className="listItem">
          <button onClick={remove}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
