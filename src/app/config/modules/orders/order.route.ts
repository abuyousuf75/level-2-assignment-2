import express from 'express';
import { OrderControler } from './order.controler';

const router = express.Router();

router.post('/api/orders', OrderControler.createOrder);

export const OrderRouter = router;