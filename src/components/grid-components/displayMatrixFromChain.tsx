import { contractAddress, contractABI } from '../constants/constant';
import { readContract } from '@wagmi/core'
import { config } from '../../wagmi'
import { type ReadContractReturnType } from '@wagmi/core'

const DisplayMatrixFromChain = async () => {
    let data = await readContract(config, {
        abi: contractABI,
        address: contractAddress, 
        functionName: 'getMatrix',
      })
    return data
};

export default DisplayMatrixFromChain;
