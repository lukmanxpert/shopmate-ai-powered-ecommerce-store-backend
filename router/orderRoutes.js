import express from "express";
import {
  fetchSingleOrder,
  placeNewOrder,
  fetchMyOrders,
} from "../controller/orderController.js";
import {
  isAuthenticated,
  authorizedRoles,
} from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/new", isAuthenticated, placeNewOrder);
router.get("/:orderId", isAuthenticated, fetchSingleOrder);
router.get("/orders/me", isAuthenticated, fetchMyOrders);

export default router;
