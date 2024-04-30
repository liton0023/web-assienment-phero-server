import express, { Router } from 'express';
import { ProjectControler } from './projects.controller';

const router: Router = express.Router();

router.post('/create-project', ProjectControler.createProject);

export const ProjectRouter = router;
