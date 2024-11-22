
import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductsModel } from "./products.mode";



const createProduct = async(req : Request, res : Response) => {
   try {
     const { product: productData } = req.body;
     const result = await ProductServices.createProductIntoDB(productData);

     res.status(201).json({
       success: true,
       message: 'Product created successfully',
       data: result,
     });
   } catch (err) {
    const error = err as Error
     throw new Error(error.message || 'Database error'); //
   }


}

const getAllProduct = async (req: Request, res: Response) => {
     try{
        const result = await ProductServices.getAllProductfromDB();
          res.status(201).json({
            success: true,
            message: 'Products retrieved successfully',
            data: result,
          });
     }
     catch(err){
        console.log(err)
     }
};


export const ProductControlers = {
    createProduct,
    getAllProduct
}