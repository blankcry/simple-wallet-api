import { Sequelize } from 'sequelize/types';

import Wallet, { init as initWallet } from './wallet';
import WalletTransaction, { init as initWalletTransaction } from './transaction'; 
import Account, { init as initAccount } from './account';

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