import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./src/router/routes";
import errorMiddleware from "./src/middleware/error.mw";
import { init as initDatabase } from "./src/db";
import config from "./src/config/server";

dotenv.config();

const {
  server,
} = config;

function setupServer(app: Express) {
  const corsOptions = {
    origin: "*",
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
    const connection = await initDatabase("sqlite::memory:", {
      dialect: 'sqlite',
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
