import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (studentData: TProduct) => {
  const result = await Product.create(studentData);

  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find({});

  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);

  return result;
};

const updateProductIntoDB = async (
  productId: string,
  updatedProductData: Partial<TProduct>
) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    updatedProductData,
    { new: true }
  );
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
