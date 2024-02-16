import { contractAddress, contractABI } from '../constants/constant';
import { simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { config } from '../../wagmi'

const UpdateMatrixCellOnChain = async (rowIndex: number, colIndex: number, colorDecimal: number) => {
    try {
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
        const { hash } = await writeContract(config, request) // On récupère le hash de la transaction (Comme ethers const tx = await contract.updateMatrixCell(rowIndex, colIndex, colorUint24);)
        const data = await waitForTransactionReceipt(config, hash) // On attend que la transaction soit confirmée (Comme ethers: await tx.wait(); )
        console.log(`BLOCKCHAIN Updating color at row ${rowIndex} and column ${colIndex} to ${colorDecimal}`);
    } catch (error) { }
};

export default UpdateMatrixCellOnChain;
