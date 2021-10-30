import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";
require("dotenv").config();

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
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.TOKEN_SECRET
    );
    res.status(200).send({ user: existingUser, token });
  } catch (e) {
    res.status(500).send({ message: "server error" });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res
        .send(422)
        .send({ message: "Must provide username and password" });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(422).send({ message: "No user found" });
    }

    bcrypt.compare(password, user.password, (err: Error, isValid: boolean) => {
      if (!isValid || err)
        return res
          .status(422)
          .send({ message: "Invalid username or password" });
      if (isValid) {
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
          expiresIn: "7d",
        });
        return res.status(200).send({ token, user });
      }
    });
  } catch (e) {
    return res.status(500).send("Internal server error");
  }
};
