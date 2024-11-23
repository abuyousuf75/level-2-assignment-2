import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const creatOrderIntoDB =async (order : IOrder) => {
    const result = await OrderModel.create(order);
    return result
}

export const OrderService = {
  creatOrderIntoDB,
};