import { NextFunction, Request, Response } from "express";
import transactionService from "../services/transaction.service";

export default {
  create: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { body, wallet } = request;

      const transaction = await transactionService.createTransaction(wallet, body)
      const data = await transactionService.handleTransaction(transaction)
      return response.status(200).json({
        message: 'Transaction Treated Successfully.',
        data,
      });
    } catch (error) {
      return next(error);
    }
  },
  index: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { wallet } = request;

      const transactions = await transactionService.getTransactions(wallet);
      return response.status(200).json({
        message: 'Transaction Treated Successfully.',
        data: transactions,
      });
    } catch (error) {
      return next(error);
    }
  }
}