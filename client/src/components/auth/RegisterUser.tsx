import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { registerUser } from "../../redux/slices/userSlice";
import { signInUser, guestLogin, reset } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";
import "./auth.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Input from "../Input/Input";

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
    <div className="cont">
      <div className="form-container">
        <div className="title-container">
          <h1 className="auth-title">Register</h1>
        </div>
        <form className="form">
          {errorMessage ? <h4>{errorMessage}</h4> : null}
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
    </div>
  );
};

export default RegisterUser;
