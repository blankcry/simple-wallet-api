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

 async createTransaction(account: Account, wallet: Wallet, payload: unknown) {
  const { amount, treatment} = await this.treatmentSchema.validateAsync(payload) as {
    amount: number;
    treatment: TransactionTreatment;
  }
  const { balance } = wallet;
  if ( amount > balance ) {
    throw new ConflictError(`Low Balance, Top up ${Math.round(Number(amount) - Number(balance))}`)
  }
  const reference = generateUniqueRef();
  const attributes: TransactionCreationI = {
    accountId: account.id,
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
}

export default new TransactionService();