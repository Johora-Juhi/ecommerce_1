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

const getAllorders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await OrderServices.getAllOrdersFromDB(email as string);

    if (email && result.length === 0) {
      res.status(200).json({
        success: false,
        message: `No order found with '${email}' email`,
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        message: email
          ? `Orders matching search email '${email}' fetched successfully!`
          : "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllorders,
};
