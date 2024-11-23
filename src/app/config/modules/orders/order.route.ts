import express from 'express';
import { OrderControler } from './order.controler';

const router = express.Router();

router.post('/api/orders', OrderControler.createOrder);
router.get('/api/orders/revenue', OrderControler.getRevenue);

export const OrderRouter = router;