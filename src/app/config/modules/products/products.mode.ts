
import { model, Schema } from 'mongoose';
import { IProducts } from './products.interface';


const productsSchema = new Schema<IProducts>({
 
  name: {
    type: String,
    required: [true, 'Please provide products name'],
    minlength: 2,
    maxlength: 30,
  },
  brand: {
    type: String,
    required: [true, 'Please provide brand name'],
    minlength: 2,
    maxlength: 30,
  },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true }, 
}, {
  timestamps:true
});




export const ProductsModel = model<IProducts>('Products', productsSchema)

