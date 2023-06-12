import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please complete the field"],
    },
    stock: {
      type: Number,
      required: [true, "Please complete the field"],
    },
    price: {
      type: Number,
      required: [true, "Please complete the field"],
    },
  },
  { timestamps: true, versionKey: false }
);

export const productModel = new mongoose.model('product', productSchema)

