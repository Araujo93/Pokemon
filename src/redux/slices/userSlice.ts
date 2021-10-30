import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: IUser = {
  userName: "",
  password: "",
  errorMessage: "",
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ userName, password }: IUser, thunkAPI) => {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    const data = await response.json();
    if (response.status === 200) return data;
    return thunkAPI.rejectWithValue(data);
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({ userName, password }: IUser, thunkAPI) => {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    const data = await response.json();
    if (response.status === 200) return data;
    return thunkAPI.rejectWithValue(data);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userName = action.payload.user.userName;
        state.password = action.payload.user.password;
        localStorage.setItem("accessToken", action.payload.token);
        state.isAuthenticated = true;
      })
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<any, string>) => {
          state.errorMessage = action.payload.message;
        }
      );
    builder
      .addCase(
        signInUser.fulfilled,
        (state, action: PayloadAction<any, string>) => {
          state.userName = action.payload.user.userName;
          state.password = action.payload.user.password;
          localStorage.setItem("accessToken", action.payload.token);
          state.isAuthenticated = true;
        }
      )
      .addCase(
        signInUser.rejected,
        (state, action: PayloadAction<any, string>) => {
          state.errorMessage = action.payload.message;
        }
      );
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
