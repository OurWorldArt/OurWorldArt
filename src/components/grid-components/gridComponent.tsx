import { useState } from 'react';

const GridComponent = () => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    // Créez un état pour stocker la couleur de chaque case de la grille
    const [gridColors, setGridColors] = useState(Array(9).fill('#FFFFFF'));

    const updateColor = (index : number) => {
        const newGridColors = [...gridColors];
        newGridColors[index] = selectedColor;
        setGridColors(newGridColors);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-2">
                {gridColors.map((color, index) => (
                    <div
                        key={index}
                        className="w-24 h-24 cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => updateColor(index)}
                    ></div>
                ))}
            </div>
            <input
                type="color"
                className="mt-4"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
            />
        </div>
    );
};

export default GridComponent;
