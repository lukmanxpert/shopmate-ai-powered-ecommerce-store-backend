import express from "express";
import {
  getUser,
  login,
  logOut,
  register,
} from "../controller/authController.js";
import { isAuthenticated } from "../middlewares/authMidleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logOut);

export default router;
