import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    // const { orders: orderData } = req.body;
    const { email, product, quantity, totalPrice } = req.body;
    const result = await OrderService.creatOrderIntoDB({
      email,
      product,
      quantity,
      totalPrice,
    });

    res.status(201).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrderRevenue();

    res.status(201).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: {
        totalRevenue: result,
      },
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to calculate revenue',
      error: error.message,
    });
  }
};

export const OrderControler = {
  createOrder,
  getRevenue,
};
