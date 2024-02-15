import { contractAddress, contractABI } from '../constants/constant';
import { simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { config } from '../../wagmi'
import { type WriteContractReturnType } from '@wagmi/core'

const UpdateMatrixCellOnChain = async (rowIndex: number, colIndex: number, colorDecimal: number) => {
    try {
        console.log(`BLOCKCHAIN Updating color at row ${rowIndex} and column ${colIndex} to ${colorDecimal}`);
        const { request } = await simulateContract(config, { // Permet de simuler un contrat (Je sais pas si encore utile mais bon) puis après on peut faire des transactions
            abi: contractABI,
            address: contractAddress,
            functionName: 'updateMatrixCell',
            args: [
                rowIndex,
                colIndex,
                colorDecimal,
            ],
        })
        console.log('request', request)
        const { hash } = await writeContract(config, request) // On récupère le hash de la transaction (Comme ethers const tx = await contract.updateMatrixCell(rowIndex, colIndex, colorUint24);)
        console.log('hash', hash) // WHY undefined ?
        const data = await waitForTransactionReceipt(config, hash) // On attend que la transaction soit confirmée (Comme ethers: await tx.wait(); )
        console.log('data', data)
    } catch (error) { }
};

export default UpdateMatrixCellOnChain;
