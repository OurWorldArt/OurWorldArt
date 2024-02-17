import { contractAddress, contractABI } from '../constants/constant';
import { readContract } from '@wagmi/core'
import { config } from '../../wagmi'

const DisplayMatrixFromChain = async (gridHeight: number, gridWidth: number) => {
  const result = await readContract(config, {
    abi: contractABI,
    address: contractAddress,
    functionName: 'getMatrix',
  }) as number[];

  const colors = result.map((colorDecimal: number) => `#${colorDecimal.toString(16).padStart(6, '0')}`);
  const updatedGridColors = [];
  for (let i = 0; i < gridHeight; i++) {
    updatedGridColors.push(colors.slice(i * gridWidth, (i + 1) * gridWidth));
  }
  return updatedGridColors;
};

export default DisplayMatrixFromChain;