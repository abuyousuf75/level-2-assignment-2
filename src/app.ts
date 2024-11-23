import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { ProductsRoutes } from './app/config/modules/products/products.router';
import { OrderRouter } from './app/config/modules/orders/order.route';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// products routes 

app.use('/', ProductsRoutes)


// order routes
app.use('/',OrderRouter);



app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

export default app;
