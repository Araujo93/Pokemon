import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router";
import { signInUser, guestLogin, reset } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";

const LoginUser = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const guest = () => {
    dispatch(guestLogin);
    history.push("/home");
  };

  const [userState, setUserState] = useState<IUser>({
    userName: "",
    password: "",
    errorMessage: "",
    isAuthenticated: false,
  });

  let { errorMessage } = useAppSelector((state: RootState) => state.user);

  const submitForm = async (state: IUser, e: any) => {
    e.preventDefault();
    const res = await dispatch(signInUser(state));
    if (res.type === "user/signInUser/fulfilled") {
      history.push("/home");
    }
  };
  return (
    <div className="form-container">
      <div className="title-container">
        <h1 className="title">Login</h1>
      </div>
      <form className="form">
        {errorMessage && <h4 className="error">{errorMessage}</h4>}
        <label htmlFor="username">
          <p>Username</p>
        </label>
        <input
          className="username input"
          placeholder="Username"
          name="username"
          type="text"
          value={userState.userName}
          onChange={(e) =>
            setUserState({ ...userState, userName: e.target.value })
          }
        />
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input
          className="password input"
          placeholder="Password"
          type="password"
          name="password"
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
            Login
          </button>
        </div>
        <button className="guest-button" onClick={() => guest()}>
          Continue as guest
        </button>

        <Link onClick={() => dispatch(reset())} to={"/register"}>
          {" "}
          GO TO REGISTER
        </Link>
      </form>
    </div>
  );
};

export default LoginUser;
