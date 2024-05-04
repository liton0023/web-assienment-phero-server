import mongoose from 'mongoose';
import { IGenericErrorMessage } from './../interface/error';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    messsage: 'Cast Error',
    errorMessage: errors,
  };
};

export default handleCastError;
