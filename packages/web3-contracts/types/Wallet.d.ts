/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export type EntryPointChanged = ContractEventLog<{
    oldEntryPoint: string
    newEntryPoint: string
    0: string
    1: string
}>

export interface Wallet extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): Wallet
    clone(): Wallet
    methods: {
        addDeposit(): PayableTransactionObject<void>

        entryPoint(): NonPayableTransactionObject<string>

        exec(dest: string, value: number | string | BN, func: string | number[]): NonPayableTransactionObject<void>

        execBatch(dest: string[], func: (string | number[])[]): NonPayableTransactionObject<void>

        execFromEntryPoint(
            dest: string,
            value: number | string | BN,
            func: string | number[],
        ): NonPayableTransactionObject<void>

        getDeposit(): NonPayableTransactionObject<string>

        nonce(): NonPayableTransactionObject<string>

        owner(): NonPayableTransactionObject<string>

        transfer(dest: string, amount: number | string | BN): NonPayableTransactionObject<void>

        updateEntryPoint(newEntryPoint: string): NonPayableTransactionObject<void>

        validateUserOp(
            userOp: [
                string,
                number | string | BN,
                string | number[],
                string | number[],
                number | string | BN,
                number | string | BN,
                number | string | BN,
                number | string | BN,
                number | string | BN,
                string,
                string | number[],
                string | number[],
            ],
            requestId: string | number[],
            missingWalletFunds: number | string | BN,
        ): NonPayableTransactionObject<void>

        withdrawDepositTo(withdrawAddress: string, amount: number | string | BN): NonPayableTransactionObject<void>
    }
    events: {
        EntryPointChanged(cb?: Callback<EntryPointChanged>): EventEmitter
        EntryPointChanged(options?: EventOptions, cb?: Callback<EntryPointChanged>): EventEmitter

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
    }

    once(event: 'EntryPointChanged', cb: Callback<EntryPointChanged>): void
    once(event: 'EntryPointChanged', options: EventOptions, cb: Callback<EntryPointChanged>): void
}
