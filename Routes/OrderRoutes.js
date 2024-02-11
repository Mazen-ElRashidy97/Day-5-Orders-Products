const express = require('express');
const router = express.Router();
const OrderController = require("../Controllers/OrderController");

//#region Orders
router.get("/", OrderController.GetAllOrders);
router.get("/:id", OrderController.GetOrderByID);
router.post("/add", OrderController.AddNewOrder);
router.put("/:id", OrderController.UpdateOrderByID);
router.delete("/:id", OrderController.DeleteOrderByID);
//#endregion

module.exports = router;

//why can't i use the app instead of the router

