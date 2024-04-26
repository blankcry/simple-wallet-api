import { LOCK } from 'sequelize';
import { getConnection } from '../db';
import { Wallet, WalletTransaction } from '../db/models';
import { ConflictError, ServerError, UnprocessableError } from '../error';
import { denominateCurrency } from '../util';
import { TransactionTreatment } from '../interface';
type TreatmentHandler = {
  [key in TransactionTreatment]: (t: WalletTransaction) => Promise<WalletTransaction>;
}
class DRCR {

  /**
 * Treatment Process Handlers
 */
  private treatmentHandlers: TreatmentHandler = {
    debit: this.debitWallet.bind(this),
    credit: this.creditWallet.bind(this)
  }

  async debitWallet(transaction: WalletTransaction) {
    if (transaction.status !== 'pending') throw new UnprocessableError('Sorry, can\'t fulfil this transaction');
    const rowLock = await getConnection().transaction({
      logging: true,
    });
    try {
      const wallet = await transaction.getWallet({
        transaction: rowLock,
        lock: true
      });
      const { amount } = transaction;
      const { balance } = wallet;
      const balanceBefore = balance;
      transaction.set('balanceBefore', balanceBefore);
      const koboAmount = denominateCurrency(amount);
      if (koboAmount > balance) {
        throw new ConflictError('Insufficient Funds.')
      }
      const balanceAfter = Number(balance) - koboAmount;
      await wallet.set('balance', balanceAfter).save();
      await rowLock.commit();
      await transaction.set({
        status: 'success',
        balanceAfter
      }).save();
      return transaction;
    } catch (err) {
      await rowLock.rollback();
      await transaction.set('status', 'failed').save();
      throw err;
    }
  }

  async creditWallet(transaction: WalletTransaction) {
    if (transaction.status !== 'pending') throw new UnprocessableError('Sorry, can\'t fulfil this transaction');
    const rowLock = await getConnection().transaction({
      logging: true,
    });
    try {
      const wallet = await transaction.getWallet({
        transaction: rowLock,
        lock: true
      });
      const { amount } = transaction;
      const { balance } = wallet;
      const koboAmount = denominateCurrency(amount);
      transaction.set('balanceBefore', balance);
      const balanceAfter = Number(balance) + koboAmount;
      await wallet.set('balance', balanceAfter).save();
      await rowLock.commit();
      await transaction.set({
        status: 'success',
        balanceAfter
      }).save();
      return transaction;
    } catch (err) {
      await rowLock.rollback();
      await transaction.set('status', 'failed').save();
      throw err;
    }
  }

  /**
 * Get Treatment Process Handlers
 */
  getTransactionTreatmentHandler(treatment: TransactionTreatment) {
    const handler = this.treatmentHandlers[treatment];
    if (!handler) {
      throw new ServerError('Unknwon Transaction Treatment');
    }
    return handler;
  }
}

export default new DRCR();
