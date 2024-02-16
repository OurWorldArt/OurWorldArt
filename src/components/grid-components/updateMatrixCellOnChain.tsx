import { contractAddress, contractABI } from '../constants/constant';
import { simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { config } from '../../wagmi'

const UpdateMatrixCellOnChain = async (rowIndex: number, colIndex: number, colorDecimal: number) => {
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
        console.log('hash', hash)
        const data = await waitForTransactionReceipt(config, {
            hash: hash,
        } ) // We wait for the transaction to be confirmed (Like ethers: await tx.wait(); )
        console.log('data', data)
        console.log(`BLOCKCHAIN Updating color at row ${rowIndex} and column ${colIndex} to ${colorDecimal}`);
    } catch (error) { }
};

export default UpdateMatrixCellOnChain;
