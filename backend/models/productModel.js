const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    category: { type: String, required: true },
    details: { type: String },
    shortDescription: { type: String },
    images: [{ type: String }], // Here I am assuming it will be array of image urls
    size: [{ type: String }],
    userReviews: [
      {
        user: String,
        comment: String,
        rating: Number,
      },
    ],
    stock: { type: Number, default: 0 },
  },
  {
    timestamps: true, // Here mongo will create two fields which is createdAt and updatedAt this is basically js Date().
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
