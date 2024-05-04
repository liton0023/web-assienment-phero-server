import express, { Router } from 'express';
import { UserRouter } from '../model/user/user.route';
const routers: Router = express.Router();

const modulRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
];

modulRoutes.forEach(route => routers.use(route.path, route.route));

export default routers;
