import Joi from "joi";
import { Account, WalletTransaction, Wallet } from "../db/models";
import { TransactionTreatment, TransactionCreationI } from "../interface";
import { generateUniqueRef} from "../util";
import Transaction from "../db/models/transaction";
import { ConflictError } from "../error";
import drcrService from "./drcr.service";

class TransactionService {

  /**
   * Schema for validating a request body for post.
   */
  private treatmentSchema = Joi.object({
    amount: Joi.number().required().label('Transaction Amount'),
    treatment: Joi.string().valid('credit', 'debit')
  });

  async createTransaction(wallet: Wallet, payload: unknown) {
    const { amount, treatment} = await this.treatmentSchema.validateAsync(payload) as {
    amount: number;
    treatment: TransactionTreatment;
    }
    const reference = generateUniqueRef();
    const attributes: TransactionCreationI = {
      treatment,
      amount,
      reference,
      walletId: wallet.id
    }
    const transaction = await WalletTransaction.create(attributes);
    return transaction;
  }

  async handleTransaction(transaction: Transaction) {
    const handler = drcrService.getTransactionTreatmentHandler(transaction.treatment)
    return handler(transaction);
  }

  async getTransactions(wallet: Wallet) {
    return WalletTransaction.findAll({
      where: {
        walletId: wallet.id,
      },
    })
  }
}

export default new TransactionService();