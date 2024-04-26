import { Response, Request, NextFunction } from "express";
import accountService from "../services/account.service";

export default {
  index: async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const accounts = await accountService.findAll();
      return response.json({
        data: accounts
      });
    } catch (error) {
      return next(error);
    }
  }
}