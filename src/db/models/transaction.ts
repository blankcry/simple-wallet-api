import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
  BelongsToGetAssociationMixin,
} from "sequelize";
import Wallet from "./wallet";
import Account from "./account";
import { TransactionAttributeI, TransactionTreatment } from "../../interface";


class Transaction 
  extends Model<InferAttributes<Transaction>, InferCreationAttributes<Transaction>> 
  implements TransactionAttributeI {
  declare balanceBefore: number;

  declare balanceAfter: number;

  declare id: CreationOptional<number>;

  declare reference: string;

  declare treatment: TransactionTreatment;

  declare amount: number;

  declare status:  CreationOptional<'pending' | 'success' | 'failed'>;

  declare walletId: number;

  // declare readonly createdAt: string;

  // declare readonly updatedAt: string;

  public getWallet: BelongsToGetAssociationMixin<Wallet>;
}

export function init(connection: Sequelize) {
  Transaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      walletId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      balanceAfter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      balanceBefore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'success', 'failed'),
        allowNull: false,
        defaultValue: 'pending',
      },
      treatment: {
        type: DataTypes.ENUM('debit', 'credit'),
        allowNull: false,
      },
    },
    {
      sequelize: connection,
      tableName: 'transactions',
      timestamps: true,
    },
  );
}

export default Transaction;
