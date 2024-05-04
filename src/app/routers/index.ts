import express, { Router } from 'express';
const routers: Router = express.Router();

const modulRoutes = [
  {
    path: '/projects',
    route: '',
  },
];

modulRoutes.forEach(route => routers.use(route.path));

export default routers;
