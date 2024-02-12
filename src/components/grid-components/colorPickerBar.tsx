import { ColorPickerProps } from '../../types/index';

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange, onConfirm, onCancel }) => {
    return (
        <div className="relative z-10 flex justify-center items-center space-x-2 p-2 bg-white rounded shadow-lg">
            <input
                type="color"
                value={selectedColor}
                onChange={onColorChange}
                className="w-16 h-8 cursor-pointer bg-white"
            />
            <button 
                className="px-3 py-1 bg-old_rose text-white rounded shadow hover:bg-old_rose-400 focus:outline-none"
                onClick={onConfirm}
            >
                OK
            </button>
            <button 
                className="px-3 py-1 bg-thulian_pink text-white rounded shadow hover:bg-thulian_pink-400 focus:outline-none"
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};

export default ColorPicker;
