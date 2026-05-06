import express from "express";
import productController from "../controllers/ProductController.js";

const router = express.Router();

// Use BaseController methods directly
router.get("/", productController.getAll);
router.get("/:id", productController.find);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

// Custom route
router.get("/category/:category", productController.getProductsByCategory);

export default router;