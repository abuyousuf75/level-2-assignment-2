import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { ProductsRoutes } from './app/config/modules/products/products.router';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application routes 

app.use('/', ProductsRoutes)
app.get('/', ProductsRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
