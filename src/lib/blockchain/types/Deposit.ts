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

export interface Deposit extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Deposit;
  clone(): Deposit;
  methods: {
    addGameRole(_game: string): NonPayableTransactionObject<void>;

    depositBumpkin(
      signature: string | number[],
      deadline: number | string | BN,
      farmId: number | string | BN,
      bumpkinId: number | string | BN,
      wearableIds: (number | string | BN)[],
      wearableAmounts: (number | string | BN)[],
      tokenUri: string
    ): NonPayableTransactionObject<void>;

    depositToFarm(
      farmId: number | string | BN,
      sfl: number | string | BN,
      itemIds: (number | string | BN)[],
      itemAmounts: (number | string | BN)[],
      wearableIds: (number | string | BN)[],
      wearableAmounts: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    destroy(): NonPayableTransactionObject<void>;

    executed(arg0: string | number[]): NonPayableTransactionObject<boolean>;

    gameAddGameRole(_game: string): NonPayableTransactionObject<void>;

    gameRemoveGameRole(_game: string): NonPayableTransactionObject<void>;

    gameRoles(arg0: string): NonPayableTransactionObject<boolean>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: string | number[]
    ): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    removeGameRole(_game: string): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    transferSigner(_signer: string): NonPayableTransactionObject<void>;
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