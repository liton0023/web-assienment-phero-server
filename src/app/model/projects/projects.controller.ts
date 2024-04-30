import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import { IProjects } from './projects.interface';
import { ProjectService } from './projects.server';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const { ...projectsData } = req.body;

  const result = await ProjectService.createProject(projectsData);
  sendResponse<IProjects>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects created successfully',
    data: result,
  });
});



export const ProjectControler = {
  createProject,
};
