import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    // console.log(user);
    const result = await UserService.createUser(user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  },
);

export const UserController = {
  createUser,
};
