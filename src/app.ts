import cors from 'cors';
import express, { Application, Request, Response, Router } from 'express';
import routers from './app/routers';
const app: Application = express();
const router: Router = express.Router();

app.use(cors());
app.use(express.json());

app.use('/api/v1/', routers);

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully!');
});
export default app;
