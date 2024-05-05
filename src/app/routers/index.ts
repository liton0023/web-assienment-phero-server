import express, { Router } from 'express';
import { CowRouter } from '../model/cow/cow.route';
import { UserRouter } from '../model/user/user.route';
const routers: Router = express.Router();

const modulRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/cow',
    route: CowRouter,
  },
];

modulRoutes.forEach(route => routers.use(route.path, route.route));

export default routers;
