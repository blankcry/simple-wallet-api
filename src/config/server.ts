import dotenv from 'dotenv';
dotenv.config();
const {
  NODE_ENV,
  PORT,
} = process.env;

const server = {
  NODE_ENV,
}
export default {
  enviroments: server,
  server: {
    id: "wallet",
    port: PORT,
    name: 'Wallet API',
  },
  api: {
    route: 'wallet'
  },
};