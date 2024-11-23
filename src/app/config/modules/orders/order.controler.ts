import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async(req: Request, res: Response) => {
        try{
           const { orders: orderData } = req.body;
           const result =
             await OrderService.creatOrderIntoDB(orderData)

           res.status(201).json({
             success: true,
             message: 'Order created successfully',
             data: result,
           });
        }

        catch(err){
                console.log(err)
        }
}

export const OrderControler = {
    createOrder
}