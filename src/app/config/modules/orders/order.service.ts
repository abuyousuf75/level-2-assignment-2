import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const creatOrderIntoDB =async (order : IOrder) => {
    const result = await OrderModel.create(order);
    return result
}

// calculate the revinew from palced all odrers

const getAllOrderRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // Group all documents together
        totalRevenue: { $sum: '$totalPrice' }, // Sum the totalPrice field
      },
    },
  ]);

  // Return the revenue or 0 if there are no orders
  return result.length > 0 ? result[0].totalRevenue : 0;
};



export const OrderService = {
  creatOrderIntoDB,
  getAllOrderRevenue
};