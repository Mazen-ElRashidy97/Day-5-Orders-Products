const express = require('express');
const router = express.Router();
const ProductController = require("../Controllers/ProductController");

//#region Orders
router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductByID);
router.post("/add", ProductController.AddNewProduct);
router.put("/:id", ProductController.UpdateProductByID);
router.delete("/:id", ProductController.DeleteProductByID);
//#endregion

module.exports = router;

//why can't i use the app instead of the router

