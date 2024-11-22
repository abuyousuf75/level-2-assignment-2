import express from 'express';
import { ProductControlers } from './products.controler';

const router = express.Router();

router.post('/api/products', ProductControlers.createProduct);
router.get('/api/products', ProductControlers.getAllProduct);

export const ProductsRoutes = router;