import React from "react";
import "./input.css";

const Input = ({ type, name, id, label, onChange, placeHolder }: any) => {
  return (
    <div className="container">
      <label htmlFor={name}>
        <p>{label}</p>
      </label>
      <input
        placeholder={placeHolder}
        className="input username"
        name={name}
        type={type}
        // value={userState.userName}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
