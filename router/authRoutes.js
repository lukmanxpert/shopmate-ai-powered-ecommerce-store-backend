import express from "express";
import {
  getUser,
  login,
  logOut,
  register,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logOut);
router.get("/getUser", getUser);

export default router;
