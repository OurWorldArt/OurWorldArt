import { type WaitForTransactionReceiptReturnType } from '@wagmi/core'

// gridComponent.tsx
export interface PixelPosition {
  rowIndex: number;
  colIndex: number;
}
export interface GridComponentProps {
  gridColors: string[][];
}


export interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface TransactionLoaderProps {
  transactionHash: string;
  onTransactionConfirmed: () => void;
}

// updateMatrixCellOnChain.tsx
export type HashCallback = (hash: string) => void;
export type TransactionCallback = (data: WaitForTransactionReceiptReturnType) => void;
export type ErrorCallback = (error: Error) => void;

// gridHeader.tsx
export interface GridHeaderProps {
  synchronizeGrid: () => Promise<void>; 
}