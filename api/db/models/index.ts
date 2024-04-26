import { Sequelize } from 'sequelize/types';

import Wallet, { init as initWallet } from './wallet';
import WalletTransaction, { init as initWalletTransaction } from './transaction'; 
import Account, { init as initAccount } from './account';
import data from '../../config/data';
import { generateUniqueRef } from '../../util';

function associate() {
  Wallet.hasMany(WalletTransaction, {
    foreignKey: {
      name: 'walletId',
      field: 'walletId',
    },
    as: 'transactions'
  });
  WalletTransaction.belongsTo(Wallet, {
    foreignKey: {
      allowNull: false,
      name: 'walletId',
      field: 'walletId',
    },
    as: 'wallet'
  })
}

export {
  WalletTransaction,
  Wallet,
  Account,
};

export function init(connection: Sequelize) {
  initWallet(connection)
  initAccount(connection);
  initWalletTransaction(connection);
  associate();
}

export const seed = async (connection: Sequelize) => {

  connection.transaction(async (transaction) => {
    const accounts = data.accounts;
    const attributes = accounts.map((acc) => ({
      name: acc.name,
      code: acc.code,
      type: acc.type as "savings" | "current",
      secret: acc.secret
    }));
    console.log(attributes)
    const seededAccounts = await Account.bulkCreate(attributes, { transaction });
    const walletAttr = seededAccounts.map((attr) => ({
      currency: 'NGN' as 'NGN',
      accountId: attr.id,
      name: `${attr.name.toLocaleLowerCase()}-fincra-NGN`,
      exchangeRef: generateUniqueRef(),
    }));
    await Wallet.bulkCreate(walletAttr, { transaction });
  })
}