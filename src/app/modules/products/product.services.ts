import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (studentData: TProduct) => {
  const result = await Product.create({ studentData }, { _id: 0 });

  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find({}, { _id: 0 });

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

const searchProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");

  const result = await Product.find({ tags: { $all: [regex] } });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  searchProductFromDB,
};
