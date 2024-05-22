import { Product } from "../products/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (orderdata: IOrder) => {
  //     if (await Order.isProductsExists(orderdata.productId)) {
  //     const result = await Order.create(orderdata);
  //     return result;
  //   } else {
  //     throw new Error("Product not found");
  //     }
  const { productId, quantity } = orderdata;

  // Check if the product exists
//   const ProductInfo = await Order.isProductsExists(orderdata.productId);
//   if (!ProductInfo) {
//     throw new Error("Product not found");
//   }

  // Get the product's inventory
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  // Check if the ordered quantity exceeds the available quantity
  if (quantity > product.inventory.quantity) {
    throw new Error("Insufficient stock");
  }

  // Update the inventory quantity and inStock status
  const updatedQuantity = product.inventory.quantity - quantity;
  const updatedInStock = updatedQuantity > 0;
  await Product.findByIdAndUpdate(productId, {
    inventory: {
      quantity: updatedQuantity,
      inStock: updatedInStock,
    },
  });

  const result = await Order.create(orderdata);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
