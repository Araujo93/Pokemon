import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router";
import { signInUser, guestLogin, reset } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";
import Input from "../Input/Input";
import "./auth.css";

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
    <div className="cont">
      <div className="form-container">
        <div className="title-container">
          <h1 className="auth-title">Login</h1>
        </div>
        <form className="form">
          {errorMessage && <h4 className="error">{errorMessage}</h4>}

          <Input
            type={"text"}
            name={"name"}
            id={""}
            placeHolder={"Username"}
            label={"Username"}
            onChange={(e: any) =>
              setUserState({ ...userState, userName: e.target.value })
            }
          />

          <Input
            type={"text"}
            name={"password"}
            id={""}
            label={"Password"}
            placeHolder={"Password"}
            onChange={(e: any) =>
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
    </div>
  );
};

export default LoginUser;
