import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res
        .status(422)
        .send({ message: "Must provide username and password" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res
        .status(422)
        .send({ message: "username already exists, try again!" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const existingUser = await User.create({
      userName,
      password: hash,
    });
    console.log("new user", existingUser);
    const token = jwt.sign({ userId: existingUser._id }, "secret");
    res.status(200).send({ user: existingUser, token });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
};
