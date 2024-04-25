import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import address from "running-at";

import router from "./src/router/routes";
import errorMiddleware from "./src/middleware/error.mw";
import { init as initDatabase } from "./src/db";
import config from "./src/config/server";

dotenv.config();

const {
  server: { id: serverId, port },
  api: { route: serverEndpointId },
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
    const connection = await initDatabase("sqlite::memory:");
    await connection.authenticate();
    console.log("Database initialized!");

    app.use(router);

    app.use(errorMiddleware);

    app.listen(port, () => {
      console.log(
        `Running '${serverId}' on port ${port} at ${address().network
        }/${serverEndpointId}`
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
