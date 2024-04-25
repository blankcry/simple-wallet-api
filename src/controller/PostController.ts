import { NextFunction, Request, Response } from "express";
import walletService from "../services/wallet.service";
import { ConflictError } from "../error";
import transactionService from "../services/transaction.service";

export default {
  create: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { account, body } = request;
      const walletId = Number(request.params.id);

      const wallet = await walletService.findOne(walletId);

      if (!wallet) throw new ConflictError('Wallet Wasn\'t found.');

      const transaction = await transactionService.createTransaction(account, wallet, body)

      const data = await transactionService.handleTransaction(transaction)
      return response.status(200).json({
        message: 'Transaction Treated Successfully.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}