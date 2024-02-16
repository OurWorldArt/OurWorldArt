export interface PixelPosition {
  rowIndex: number;
  colIndex: number;
}

export interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  onCancel: () => void;
}