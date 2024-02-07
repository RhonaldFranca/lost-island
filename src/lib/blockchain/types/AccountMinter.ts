/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface AccountMinter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AccountMinter;
  clone(): AccountMinter;
  methods: {
    charityFee(): NonPayableTransactionObject<string>;

    createdAt(arg0: string): NonPayableTransactionObject<string>;

    deposit(): PayableTransactionObject<void>;

    destroy(): PayableTransactionObject<void>;

    farmCreatedAt(account: string): NonPayableTransactionObject<string>;

    maxSupply(): NonPayableTransactionObject<string>;

    mintAccount(
      signature: string | number[],
      charity: string,
      deadline: number | string | BN,
      mintFee: number | string | BN,
      bumpkinItemIds: (number | string | BN)[],
      bumpkinTokenUri: string,
      referrerId: number | string | BN
    ): PayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    referrerFee(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setCharityFee(
      _fee: number | string | BN
    ): NonPayableTransactionObject<void>;

    setMaxSupply(
      _supply: number | string | BN
    ): NonPayableTransactionObject<void>;

    setReferrerFee(
      _fee: number | string | BN
    ): NonPayableTransactionObject<void>;

    transferFeeWallet(_wallet: string): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    transferSigner(_signer: string): NonPayableTransactionObject<void>;

    verify(
      hash: string | number[],
      signature: string | number[]
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}