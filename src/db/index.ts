import { Sequelize, Options } from "sequelize";
import { init as initModels, seed } from "./models";

let _connection: Sequelize | undefined;

export async function init(
  uri = "sqlite::memory:",
  options?: Options
): Promise<Sequelize> {
  _connection = new Sequelize(uri, options);

  initModels(_connection);

  await _connection.sync({ alter: false });

  await seed(_connection);

  return _connection;
}

export function getConnection() {
  return _connection;
}