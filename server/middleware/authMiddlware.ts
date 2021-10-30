import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import Blacklist from "../models/blacklist";

const verify = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(422).send({ message: "You must be logged in" });
  const token: string = authorization.replace("Bearer", "");
  try {
    const userToken: string | JwtPayload = jwt.verify(token, "secret");
    if (typeof userToken === "string")
      throw new Error("Failed to verify token");
    const user = await User.findById(userToken.userId);
    const userBlacklist = await Blacklist.find({ token, user: user._id });
    if (userBlacklist.length > 0) return res.status(402).send("Invalid token");
    req.body.user = user;
    req.body.token = token;

    return next();
  } catch (e) {
    return res.status(402).send("Must log in first");
  }
};

export default verify;
