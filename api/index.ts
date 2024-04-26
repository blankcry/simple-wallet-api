import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./router/routes";
import errorMiddleware from "./middleware/error.mw";
import { init as initDatabase } from "./db";
import config from "./config/server";

dotenv.config();

const {
  server,
} = config;

function setupServer(app: Express) {
  const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(", ")
      : [],
    credentials: true,
  };

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
      limit: "5mb",
    })
  );
  app.use(cors(corsOptions));
}
const startServer = async () => {
  const app = express();
  setupServer(app);

  try {
    console.log("Initializing database...");
    const connection = await initDatabase(process.env.POSTGRES_URL, {
      dialect: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      username: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST
    });
    await connection.authenticate();
    console.log("Database initialized!");

    app.use(router);

    app.use(errorMiddleware);

    app.listen(server.port, () => {
      console.log(
        `Running '${server.name}' on port ${server.port}`
      );
    })
      .on("close", () => {
        process.exit();
      });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

startServer();
