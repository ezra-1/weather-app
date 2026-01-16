import express from "express";
import type { Application } from "express";
import authRoute from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);

export default app;
