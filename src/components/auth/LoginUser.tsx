import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router";
import { signInUser } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";

const LoginUser = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [userState, setUserState] = useState<IUser>({
    userName: "",
    password: "",
    errorMessage: "",
    isAuthenticated: false,
  });
  const { errorMessage } = useAppSelector((state: RootState) => state.user);
  const submitForm = async (state: IUser, e: any) => {
    e.preventDefault();
    const res = await dispatch(signInUser(state));
    if (res.type === "user/signInUser/fulfilled") {
      history.push("/home");
    }
  };
  return (
    <div className="form">
      <h1>Login</h1>
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
      <Link to={"/register"}> GO TO REGISTER</Link>
    </div>
  );
};

export default LoginUser;
