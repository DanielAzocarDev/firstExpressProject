import express, {Request, Response} from 'express';
import productsRouter from './products/products.routes';
import { setupSwagger } from './swagger';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello mother fuckers!');
});
setupSwagger(app);


app.use('/api/products', productsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server runnig on http://localhost:${port}`);
  console.log(`Press Ctrl+C to stop the server`);
});