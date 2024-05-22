import { z } from "zod";

// Zod schema for TVariant
const variantValidationSchema = z.object({
  type: z.string().nonempty({ message: "Type is required" }),
  value: z.string().nonempty({ message: "Value is required" }),
});

// Zod Vadidationschema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z.number().nonnegative({ message: "Quantity must be at least 1" }),
  inStock: z.boolean().default(true),
});

// Zod Vadidationschema for TProduct
const productValidationSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Product name is required" }),
  description: z.string().nonempty({ message: "Product description is required" }),
  price: z.number().positive({ message: "Price must be positive" }),
  category: z.string().nonempty({ message: "Product category is required" }),
  tags: z.array(z.string().nonempty()).nonempty({ message: "Product tags are required" }),
  variants: z.array(variantValidationSchema).nonempty({ message: "Variants are required" }),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
