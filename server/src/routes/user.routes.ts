import { Router } from "express";
import { deleteMyAccount } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.delete("/me", authMiddleware, deleteMyAccount);

export default router;
