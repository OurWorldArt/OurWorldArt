import { contractAddress, contractABI } from '../constants/constant';
import { simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { config } from '../../wagmi'

import { ErrorCallback, HashCallback, TransactionCallback } from '../../types/index'

const UpdateMatrixCellOnChain = async (rowIndex: number, colIndex: number, colorDecimal: number, onTransactionHash: HashCallback, onTransactionComplete: TransactionCallback, onError: ErrorCallback) => {
    try {
        const { request } = await simulateContract(config, { // Used to simulate a contract, then if no error is detected, transactions can be made.
            abi: contractABI,
            address: contractAddress,
            functionName: 'updateMatrixCell',
            args: [
                rowIndex,
                colIndex,
                colorDecimal,
            ],
        })
        const hash = await writeContract(config, request) // Retrieve the transaction hash (Like ethers const tx = await contract.updateMatrixCell(rowIndex, colIndex, colorUint24);)
        onTransactionHash(hash); // Callback when the transaction hash is received
        const data = await waitForTransactionReceipt(config, {
            hash: hash,
        }) // We wait for the transaction to be confirmed (Like ethers: await tx.wait(); )
        onTransactionComplete(data); // Callback when the transaction is confirmed
        console.log(`BLOCKCHAIN Updating color at row ${rowIndex} and column ${colIndex} to ${colorDecimal}`);
    } catch (error) {
        if (error instanceof Error) {
            onError(error);
        } else {
            onError(new Error('An unknown error occurred')); // Handle the case where `error` is not an instance of `Error`.
        }
    }
};

export default UpdateMatrixCellOnChain;
