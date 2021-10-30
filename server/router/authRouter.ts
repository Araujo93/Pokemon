import express from "express";
import authMiddleware from "../middleware/authMiddlware";
import { registerUser } from "../controllers/authController";
const router = express.Router();

router.post("/register", registerUser);

export default router;
