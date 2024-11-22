import { ObjectId } from 'mongoose';
import { IProducts } from "./products.interface";
import { ProductsModel } from "./products.mode";


const createProductIntoDB =async (product : IProducts)  => {

    const result = await ProductsModel.create(product);
    return result
}

const getAllProductfromDB =async () => {
const result = await ProductsModel.find();
    return result
}

const getASingleProductFromDB = async (productId: string) => {
  const result = await ProductsModel.findOne({ _id: productId });
  return result;
};



export const ProductServices = {
  createProductIntoDB,
  getAllProductfromDB,
  getASingleProductFromDB,
};