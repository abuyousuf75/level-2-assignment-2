import { Schema } from "mongoose";
import { IOrder } from "./order.interface";


const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'StationeryProduct',
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true },
});
