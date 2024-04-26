import { FindOptions, Optional } from "sequelize";

export interface TransactionAttributeI {
  id: number;
  amount: number;
  treatment: TransactionTreatment;
  reference: string;
  balanceBefore: number;
  balanceAfter: number;
  walletId: number;
  status: 'pending' | 'success' | 'failed';
}
export interface WalletAttributeI {
  id: number;
  name: string
  exchangeRef: string;
  balance: number;
  currency: string;
  slug: string;
}
export interface AccountAttributesI {
  id: number;
  userId: number;
  verified: boolean;
  name: string;
  code: string;
  type: 'individual' | 'cooporate' | 'reseller';
}

export type TransactionTreatment = 'credit' | 'debit';
export type TransactionCreationI = Optional<TransactionAttributeI, 'id' | 'status' | 'balanceAfter' | 'balanceBefore'>;
export type Currency = 'USD' | 'NGN';

export interface BasicDataRetriever<T> {
  findOne(id: number): Promise<T>;
  findOneViaRef: (ref: string) => Promise<T>;
  findAll(): Promise<T[]>;
}