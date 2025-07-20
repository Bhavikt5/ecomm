const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// All our Routes

router.post("/", createProduct); // This will create
router.get("/", getAllProducts); // This will be for Read All
router.get("/:id", getProductById); // This will be for Read One
router.put("/:id", updateProduct); // This will be for Update
router.delete("/:id", deleteProduct); // This will be for Delete

module.exports = router;
