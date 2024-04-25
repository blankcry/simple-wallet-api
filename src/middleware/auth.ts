import { NextFunction, Request, Response } from "express";
import accountService from "../services/account.service";
import { isNumber, isString } from 'lodash'
import { BadRequestError, UnAuthorizedError } from "../error";
import walletService from "../services/wallet.service";
import { Wallet } from "../db/models";

/**
 * Middleware that validates api key for an account.
 * @param {express.Request} requests The Express request object.
 * @param {express.Response} res The Express response object.
 * @param {express.NextFunction} next The next middleware function in the stack.
 */
export const isValidAccount = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const apiKey = request.headers['x-api-key'];
    if (!apiKey || !isString(apiKey)) {
      return response.status(400).json({
        message: 'Please supply a valid api key',
      });
    }

    const account = await accountService.findOneViaRef(apiKey);
    request.account = account;
    return next();
  } catch (err) {
    return next(err);
  }
}

/**
 * Middleware that validates wallet Resource Key .
 * @param {express.Request} requests The Express request object.
 * @param {express.Response} res The Express response object.
 * @param {express.NextFunction} next The next middleware function in the stack.
 */
export const hasWalletAccess = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { walletId } = request.params
    if (!walletId || !isNumber(walletId)) {
      throw new BadRequestError('Please supply a valid wallet ID.');
    }
    const { id: accountId} = request.account;

    const wallet = await Wallet.findOne({
      where: {
        id: walletId,
        accountId
      },
    });
    if (!wallet) {
      throw new UnAuthorizedError('You do not have access to this resource.');
    }
    request.wallet = wallet
    return next();
  } catch (err) {
    return next(err);
  }
}
