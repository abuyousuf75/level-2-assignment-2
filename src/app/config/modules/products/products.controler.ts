
import { Request, Response } from "express";
import { ProductServices } from "./product.service";




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
const getASingleProduct = async (req: Request, res: Response) => {
     try{
        const { productId } = req.params;
        const result = await ProductServices.getASingleProductFromDB(productId);
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

const updateAProduct = async(req:Request, res: Response) => {
  try{
    const productId = req.params.productId;
   
    const doc = req.body;
     console.log(productId, doc);
    const result = await ProductServices.updateAProductFromDB(productId,doc);
   res.status(201).json({
     success: true,
     message: 'Product updated successfully',
     data: result,
   });
  }

  catch(err){
    console.log(err)
  }
}


const deleteAProduct = async(req: Request, res: Response) => {
   try {
     const productId = req.params.productId;
      await ProductServices.deleteAProductFromDB(productId)

     res.status(201).json({
       success: true,
       message: 'Product deleted successfully',
       result:{},
     });
   } catch (err) {
     console.log(err);
   }
};


export const ProductControlers = {
  createProduct,
  getAllProduct,
  getASingleProduct,
  updateAProduct,
  deleteAProduct
};