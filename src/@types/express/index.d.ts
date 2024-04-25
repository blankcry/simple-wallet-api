import { Wallet, Account } from "../../db/models";

declare module 'express' {
  export interface Request {
    account: Account;
    wallet: Wallet;
  }
}