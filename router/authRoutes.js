import express from "express";
import {
  forgotPassword,
  getUser,
  login,
  logOut,
  register,
} from "../controller/authController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logOut);
router.post("/password/forgot", forgotPassword);

export default router;
