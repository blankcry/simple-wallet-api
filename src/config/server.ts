import dotenv from 'dotenv';
dotenv.config();
const {
  NODE_ENV,
  SD_HOST,
  SD_PORT,
  PORT,

  PANBOX_URL,
  CLIENT_URL,
  MESSAGE_URL,
  MESSAGE_PORT,
  MESSAGE_USERNAME,
  MESSAGE_PASSWORD,
  EXCHANGE_NAME,
  PDF_GENERATOR_API_KEY,
  PDF_GENERATOR_SECRET_KEY,
  PDF_GENERATOR_URL,
  PDF_GENERATOR_WORKSPACE,
  PDF_RESELLER_TRANSACTION_RECEIPT_TEMPLATE_ID,
  PDF_OTHERS_TRANSACTION_RECIEPT_TEMPLATE_ID,
  PDF_FUND_TRANSACTION_RECEIPT_TEMPLATE_ID,
} = process.env;

const server = {
  NODE_ENV,
  PANBOX_URL,
  CLIENT_URL,
  PDF_GENERATOR_API_KEY,
  PDF_GENERATOR_SECRET_KEY,
  PDF_GENERATOR_URL,
  PDF_GENERATOR_WORKSPACE,
  PDF_RESELLER_TRANSACTION_RECEIPT_TEMPLATE_ID,
  PDF_OTHERS_TRANSACTION_RECIEPT_TEMPLATE_ID,
  PDF_FUND_TRANSACTION_RECEIPT_TEMPLATE_ID,
}
export default {
  enviroments: server,
  server: {
    id: "ServiceWallet",
    port: PORT,
    name: 'wallet',
  },
  api: {
    route: 'wallet'
  },
  serviceRegistry: {
    watchDog: {
      isEnabled: false,
      timer: 30000
    },
    connection: {
      host: SD_HOST,
      port: SD_PORT
    },
    message: {
      MESSAGE_URL,
      MESSAGE_PORT,
      MESSAGE_USERNAME,
      MESSAGE_PASSWORD,
      EXCHANGE_NAME,
      WALLET_QUEUE: 'WALLET_QUEUE'
    }
  }
};