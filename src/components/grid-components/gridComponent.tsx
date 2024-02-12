import { useState } from 'react';
import ColorPicker from './colorPickerBar';
import { PixelPosition } from '../../types/index';

const GridComponent = () => {
    const gridWidth = 50; // Specify number of pixels horizontally
    const gridHeight = 50; // Specify number of pixels vertically
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [hoveredPixel, setHoveredPixel] = useState<PixelPosition | null>(null);

    // Create a matrix for the color grid
    const [gridColors, setGridColors] = useState(
        Array.from({ length: gridHeight }, () => Array(gridWidth).fill('#FFFFFF'))
    );

    const [currentPixel, setCurrentPixel] = useState<PixelPosition | null>(null);

    const updateColor = (rowIndex: number, colIndex: number) => {
        const newGridColors = gridColors.map(row => [...row]);
        newGridColors[rowIndex][colIndex] = selectedColor;
        setGridColors(newGridColors);
        setCurrentPixel(null); // Deselect current pixel after color update
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    const handlePixelClick = (rowIndex: number, colIndex: number) => {
        setCurrentPixel({ rowIndex, colIndex });
        setHoveredPixel(null); // Add this to remove the hover effect after a click
    };

    const handlePixelHover = (rowIndex: number, colIndex: number) => {
        // Only set hovered pixel if there is no currentPixel selected
        if (!currentPixel) {
            setHoveredPixel({ rowIndex, colIndex });
        }
    };

    return (
        <div className="relative">
            <div className="inline-block">
                {gridColors.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {row.map((color, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-2 h-2 cursor-pointer ${hoveredPixel && hoveredPixel.rowIndex === rowIndex && hoveredPixel.colIndex === colIndex ? 'border-2 border-alice_blue' : ''} ${currentPixel && currentPixel.rowIndex === rowIndex && currentPixel.colIndex === colIndex ? 'border-2 border-old_rose' : ''}`}
                            style={{ backgroundColor: color }}
                            onMouseEnter={() => handlePixelHover(rowIndex, colIndex)}
                            onMouseLeave={() => !currentPixel && setHoveredPixel(null)} // Only remove hover effect if no pixel is currently selected
                            onClick={() => handlePixelClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
                ))}
            </div>
            {currentPixel !== null && (
                <ColorPicker
                    selectedColor={selectedColor}
                    onColorChange={handleColorChange}
                    onConfirm={() => updateColor(currentPixel.rowIndex, currentPixel.colIndex)}
                    onCancel={() => setCurrentPixel(null)}
                />
            )}
        </div>
    );
};

export default GridComponent;