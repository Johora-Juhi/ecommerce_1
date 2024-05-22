import { Model } from "mongoose";

export interface IOrder {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

// for creatin custom stattic method
export interface OrderModel extends Model<IOrder> {
  isProductsExists(id: string): Promise<IOrder | null>;
}
