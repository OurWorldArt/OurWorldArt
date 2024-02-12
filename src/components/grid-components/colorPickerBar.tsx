import { ColorPickerProps } from '../../types/index';

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange, onConfirm, onCancel }) => {
    return (
        <div className="absolute z-10 flex items-center space-x-2 p-2 bg-white border rounded shadow-lg">
            <input
                type="color"
                value={selectedColor}
                onChange={onColorChange}
                className="w-16 h-16 p-0 border-0 cursor-pointer"
            />
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
                onClick={onConfirm}
            >
                OK
            </button>
            <button 
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};

export default ColorPicker;
