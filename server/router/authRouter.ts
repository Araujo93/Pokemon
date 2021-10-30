import express from "express";
import authMiddleware from "../middleware/authMiddlware";
import { registerUser, signInUser } from "../controllers/authController";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", signInUser);
export default router;
