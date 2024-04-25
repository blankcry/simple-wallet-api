import { NextFunction, Request, Response } from "express";
import walletService from "../services/wallet.service";

export default {
  index: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id: accountId } = request.account;
      const wallets = await walletService.getAccountWallets(accountId);

      return response.status(201).json({
        message: 'Wallets Fetched successfully',
        data: wallets,
      });
    } catch (error) {
      next(error);
    }
  }
}