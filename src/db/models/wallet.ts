import {
  BelongsToGetAssociationMixin,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import WalletTransaction from "./transaction";
import Account from "./account";

export interface WalletAttributesI {
  id: number;
  name: string
  exchangeRef: string;
  balance: number;
  currency: 'USD' | 'NGN';
}

class Wallet 
  extends Model<InferAttributes<Wallet>, InferCreationAttributes<Wallet>> 
  implements WalletAttributesI {
  declare id: CreationOptional<number>;

  declare name: string;

  declare exchangeRef: string;

  declare balance: number;

  declare currency: 'USD' | 'NGN';

  declare accountId: number;

  public getAccount: BelongsToGetAssociationMixin<Account>;

  public getTransactions: HasManyGetAssociationsMixin<WalletTransaction>;
}

export function init(connection: Sequelize) {
  Wallet.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      exchangeRef: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: '0.00',
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NGN',
      }
    },
    {
      sequelize: connection,
      modelName: 'Wallet',
      tableName: 'wallets',
      defaultScope: {
        attributes: {
          exclude: ['id'],
        },
      }
    },
  );
}

export default Wallet;