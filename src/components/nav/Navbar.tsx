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
    <div className="container">
      <h1>Poke World</h1>
      <ul className="nav">
        <li className="listItem">
          <Link to="/Home">Home</Link>
        </li>
        <li className="listItem">
          <Link to="#">Shiny</Link>
        </li>
        <li className="listItem">
          <Link to="">Something</Link>
        </li>
        <li className="listItem">
          <Link to="">About</Link>
        </li>
        <li className="listItem">
          <button onClick={remove}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
