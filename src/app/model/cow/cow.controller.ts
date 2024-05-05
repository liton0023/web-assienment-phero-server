import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import { ICow } from './cow.interface';
import { CowService } from './cow.service';

const createCow = catchAsync(async (req: Request, res: Response) => {
  const cowData = req.body;
  const result = await CowService.createCow(cowData);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow  created successfully!',
    data: result,
  });
});

export const CowController = {
  createCow,
};
