import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// Create Product
const createProduct = async (req: Request, res: Response) => {
  try {
    // const { product: productData } = req.body;
    const {name,brand ,price,category,description,quantity,inStock } = req.body;
   
   
    const result = await ProductServices.createProductIntoDB({
      name,brand,price,category,description,quantity,inStock
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message,
    });
  }
};

// Get All Products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductfromDB();
    res.status(201).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve products',
      error: error.message,
    });
  }
};

// Get a Single Product
const getASingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getASingleProductFromDB(productId);
    res.status(201).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve product',
      error: error.message,
    });
  }
};

// Update Product
const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const doc = req.body;
    const result = await ProductServices.updateAProductFromDB(productId, doc);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(201).json({
      status: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error.message,
    });
  }
};

// Delete Product
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductServices.deleteAProductFromDB(productId);

    res.status(201).json({
      status: true,
      message: 'Product deleted successfully',
      result: {},
    });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: error.message,
    });
  }
};

export const ProductControlers = {
  createProduct,
  getAllProduct,
  getASingleProduct,
  updateAProduct,
  deleteAProduct,
};
