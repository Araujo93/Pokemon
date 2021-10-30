import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { registerUser } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";
import "./auth.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const RegisterUser = () => {
  const dispatch = useAppDispatch();
  const [userState, setUserState] = useState<IUser>({
    userName: "",
    password: "",
    errorMessage: "",
    isAuthenticated: false,
  });

  const { errorMessage } = useAppSelector((state: RootState) => state.user);
  const history = useHistory();
  const submitForm = async (state: IUser, e: any) => {
    e.preventDefault();
    const res = await dispatch(registerUser(state));
    if (res.type === "user/registerUser/fulfilled") {
      history.push("/home");
    }
  };

  return (
    <div className="form">
      <h1>Please register</h1>
      {errorMessage ? <h3>{errorMessage}</h3> : null}
      <form>
        <label htmlFor="Username">
          <p>UserName</p>
          <input
            type="text"
            value={userState.userName}
            onChange={(e) =>
              setUserState({ ...userState, userName: e.target.value })
            }
          />
        </label>
        <label htmlFor="Username">
          <p>Password</p>
          <input
            type="password"
            value={userState.password}
            onChange={(e) =>
              setUserState({ ...userState, password: e.target.value })
            }
          />
        </label>
        <div>
          <button onClick={(e) => submitForm(userState, e)} type="submit">
            Submit
          </button>
        </div>
      </form>
      <Link to={"/login"}> GO TO LOGIN</Link>
    </div>
  );
};

export default RegisterUser;