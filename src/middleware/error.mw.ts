import {
  NextFunction,
  Request,
  Response
} from "express";
import joi from "joi";
import sequelize from "sequelize";
import { SystemError } from "../error";
import axios from "axios";
import server from "../config/server";

export default (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof joi.ValidationError) {
    return response.status(400).json({
      status: 'validation-error',
      errors: error.details,
    });
  }
  if (axios.isAxiosError(error)) {
    const { response: axiosResponse } = error;
    const { status, message } = axiosResponse.data;
    return response.status(axiosResponse.status || 400).json({
      status: status || 'server-error',
      message: message || 'An unexpected error occured.',
    });
  }
  if (error instanceof sequelize.UniqueConstraintError) {
    return response.status(400).json({
      status: 'validation-error',
      message: 'Duplicate entry',
    });
  }

  if (error instanceof sequelize.DatabaseError) {
    console.error(error);
    return response.status(500).json({
      status: server.enviroments.NODE_ENV !== 'production' ? 'database-server-error' : 'server-error',
      message: server.enviroments.NODE_ENV !== 'production' ? 'Something went wrong, please report case.' : 'Check DB Configurations',
    });
  }
  if (error instanceof SystemError) {
    switch (error.name) {
      case 'UniqueConstraintError':
        return response.status(400).json({
          status: "validation-error",
          message: "Duplicate entry",
        });
      case 'UnprocessableError':
        return response.status(422).json({
          status: error.code,
          message: error.message,
        });
      case 'NotFoundError':
        return response.status(404).json({
          status: error.code,
          message: error.message,
        });
      case 'SystemError':
      case 'ServerError':
      default:
        console.error('Unknown Error', error);
        return response.status(500).json({
          status: "server-error",
          message: "An unexpected error occured.",
        });
    }
  }
  return response.status(500).json({
    status: 'server-error',
    message: 'An unexpected error occured.',
  });
}