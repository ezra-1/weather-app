import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import User from "../models/user.models.js";

export const deleteMyAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Account deleted successfully" });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
