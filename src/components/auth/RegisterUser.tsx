import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/slices/userSlice";
import { IUser } from "../../interfaces/interfaces";
import "./auth.css";

const RegisterUser = () => {
  const dispatch = useAppDispatch();
  const [userState, setUserState] = useState<IUser>({
    userName: "",
    password: "",
    token: "",
  });

  const submitForm = async (state: IUser, e: any) => {
    e.preventDefault();
    await dispatch(registerUser(state));
  };

  return (
    <div className="form">
      <h1>Please register</h1>
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
    </div>
  );
};

export default RegisterUser;
