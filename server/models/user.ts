import mongoose from "mongoose";

interface IUser {
  userName: string;
  password: string;
}

const userScheme = new mongoose.Schema<IUser>({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", userScheme);
export default User;
