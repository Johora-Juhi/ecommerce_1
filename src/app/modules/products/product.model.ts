import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    validate: {
      validator: (value: number) => value > 0,
      message: "Quantity must be positive",
    },
  },
  inStock: { type: Boolean, default: true },
});
const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Product name is required"] },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    validate: {
      validator: (value: number) => value > 0,
      message: "Price must be positive",
    },
  },
  category: { type: String, required: [true, "Product category is required"] },
  tags: { type: [String], required: [true, "Product tags is required"] },
  variants: { type: [variantSchema], required: [true, "Variants are requied"] },
  inventory: {
    type: inventorySchema,
    required: [true, "Inventory informations are required"],
  },
});

export const Product = model<TProduct>("Product", productSchema);
