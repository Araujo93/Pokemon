import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/interfaces";

const initialState: IUser = {
  userName: "",
  password: "",
  token: "",
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ userName, password }: IUser) => {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    return await response.json();
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userName = action.payload.user.username;
      state.password = action.payload.user.password;
      state.token = action.payload.token;
    });
  },
});

export default userSlice.reducer;
