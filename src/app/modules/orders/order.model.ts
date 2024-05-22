import { Schema, model } from "mongoose";
import { IOrder, OrderModel } from "./order.interface";
import { Product } from "../products/product.model";

const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: [true, "User email is required"] },
  productId: {
    type: String,
    ref: "Product",
    required: [true, "Product id is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    validate: {
      validator: (value: number) => value > 0,
      message: "Price must be positive",
    },
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    validate: {
      validator: (value: number) => value > 0,
      message: "Quantity must be positive",
    },
  },
});

// for creatin custom static method
OrderSchema.statics.isProductsExists = async function (id: string) {
  const isProductsExists = await Product.findById(id);

  return isProductsExists;
};
export const Order = model<IOrder, OrderModel>("Order", OrderSchema);
