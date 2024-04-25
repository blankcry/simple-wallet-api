import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface AccountAttributesI {
  id: number;
  name: string;
  code: string;
  type: "savings" | "current";
  secret: string;
}

class Account 
  extends Model<InferAttributes<Account>, InferCreationAttributes<Account>>
  implements AccountAttributesI {

  declare id: CreationOptional<number>;
  declare type: "savings" | "current";
  declare name: string;
  declare code: string;
  declare secret: string;
}

export function init(connection: Sequelize) {
  Account.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      secret: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      type: {
        type: DataTypes.ENUM('savings', 'current'),
        allowNull: false,
        defaultValue: 'savings',
      },
    },
    {
      tableName: "accounts",
      timestamps: true,
      sequelize: connection,
      paranoid: true,
    }
  );
}

export default Account;