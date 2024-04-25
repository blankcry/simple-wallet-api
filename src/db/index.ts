import { Sequelize, Options } from "sequelize";
import { init as initModels } from "./models";

let _connection: Sequelize | undefined;

export async function init(
  uri = "sqlite::memory:",
  options?: Options
): Promise<Sequelize> {
  _connection = new Sequelize(uri, options);

  initModels(_connection);

  if (process.env.NODE_ENV === "development") {
    await _connection.sync({ alter: false });
  }

  return _connection;
}

export function getConnection() {
  return _connection;
}
