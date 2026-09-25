import { getMe, login } from "../controllers/authController.js";
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/login", login);
router.get("/me", authMiddleware, getMe)
export default router;
