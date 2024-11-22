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
export const ProductServices = {
  createProductIntoDB,
  getAllProductfromDB,
};