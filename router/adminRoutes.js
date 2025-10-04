import express from "express";
import { authorizedRoles, isAuthenticated } from "../middlewares/authMiddleware.js";
import { getAllUsers } from "../controller/adminController.js";

const router = express.Router();
router.get(
  "/getallusers",
  isAuthenticated,
  authorizedRoles("Admin"),
  getAllUsers
); // DASHBOARD

export default router;
