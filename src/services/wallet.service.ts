// Error Imports
import { ConflictError, NotFoundError } from '../error';
import { Wallet, WalletTransaction } from '../db/models';
import { BasicDataRetriever, Currency } from '../interface';
import { generateUniqueRef } from '../util';

class WalletService implements BasicDataRetriever<Wallet> {
  async findOneViaRef(exchangeRef: string) {
    const wallet = await Wallet.findOne({
      where: {
        exchangeRef
      },
    });
    if (!wallet) {
      throw new NotFoundError('Wallet not found');
    }
    return wallet;
  }
  public async findOne(id: number) {
    const wallet = await Wallet.findOne({
      where: {
        id,
      },
    });
    if (!wallet) {
      throw new NotFoundError('Wallet not found');
    }
    return wallet;
  }
  async findAll() {
    return Wallet.findAll()
  }

  public async createNewWallet(
    accountId: number,
    currency: 'USD' | 'NGN',
  ) {
    const exchangeRef = generateUniqueRef();
    const attributes = {
      exchangeRef,
      accountId,
      currency,
      name: `${currency} Wallet`,
    };
    const [wallet, isNewRecord] = await Wallet.findOrCreate({
      where: {
        currency,
        accountId,
      },
      defaults: attributes,
    });

    if (!isNewRecord) {
      throw new ConflictError('Wallet already exists');
    }
    return wallet;
  }
  public async getAccountWallets(accountId: number) {
    return Wallet.findAll({
      where: {
        accountId,
      },
    });
  }
}

export default new WalletService();
