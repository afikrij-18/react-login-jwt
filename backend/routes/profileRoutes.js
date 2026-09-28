import express from "express";
import { getProfile, upsertProfile } from "../controllers/profileController.js";
import { authMiddleware as verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Endpoint untuk mengambil data profil user yang sedang login (GET)
router.get("/",verifyToken, getProfile);

// Endpoint untuk membuat atau memperbarui profil user (POST / PUT)
router.post("/",verifyToken, upsertProfile);

export default router;
