import { z } from "zod";

// Zod Vadidationschema for IOrder
const orderValidationSchema = z.object({
  email: z.string().nonempty({ message: "User email is required" }),
  productId: z.string().nonempty({ message: "Product Id is required" }),
  price: z.number().positive({ message: "Price must be positive" }),
  quantity: z.number().positive({ message: "Quantity must be positive" }),
});

export default orderValidationSchema;
