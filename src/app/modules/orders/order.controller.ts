/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderdata = req.body;
    const validOrderData = orderValidationSchema.parse(orderdata);
    const result = await OrderServices.createOrderIntoDB(validOrderData);

    res.status(200).json({
      status: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message || "Something went worng",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
};
