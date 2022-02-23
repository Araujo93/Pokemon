import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { registerUser } from "../../redux/slices/userSlice";
import { signInUser, guestLogin, reset } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";
import "./auth.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const RegisterUser = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [userState, setUserState] = useState<IUser>({
    userName: "",
    password: "",
    errorMessage: "",
    isAuthenticated: false,
  });

  const guest = () => {
    dispatch(guestLogin);
    history.push("/home");
  };

  const { errorMessage } = useAppSelector((state: RootState) => state.user);
  const submitForm = async (state: IUser, e: any) => {
    e.preventDefault();
    const res = await dispatch(registerUser(state));
    if (res.type === "user/registerUser/fulfilled") {
      history.push("/home");
    }
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h1 className="title">Register</h1>
      </div>
      <form className="form">
        {errorMessage ? <h4>{errorMessage}</h4> : null}
        <label htmlFor="Username">
          <p>Username</p>
        </label>
        <input
          placeholder="Username"
          className="input username"
          name="Username"
          type="text"
          value={userState.userName}
          onChange={(e) =>
            setUserState({ ...userState, userName: e.target.value })
          }
        />
        <label htmlFor="Password">
          <p>Password</p>
        </label>
        <input
          placeholder="Password"
          className="input password"
          type="password"
          name="Password"
          value={userState.password}
          onChange={(e) =>
            setUserState({ ...userState, password: e.target.value })
          }
        />
        <div>
          <button
            className="submit-button"
            onClick={(e) => submitForm(userState, e)}
            type="submit"
          >
            Register
          </button>
        </div>
        <button className="guest-button" onClick={() => guest()}>
          Continue as guest
        </button>
        <Link onClick={() => dispatch(reset())} to={"/"}>
          {" "}
          GO TO LOGIN
        </Link>
      </form>
    </div>
  );
};

export default RegisterUser;
