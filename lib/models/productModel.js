import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    salePrice: Number,
    category: String,
    details: String,
    shortDescription: String,
    images: [String],
    size: [String],
    userReviews: [
      {
        userId: String,
        comment: String,
        rating: Number,
      },
    ],
    stock: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
