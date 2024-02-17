import { useState, useEffect } from 'react';
import ColorPicker from './colorPickerBar';
import { PixelPosition, GridComponentProps } from '../../types/index';
import UpdateMatrixCellOnChain from './updateMatrixCellOnChain';
import TransactionLoader from './transactionLoader';
import { useReadContract } from 'wagmi'
import { contractAddress, contractABI } from '../constants/constant';

const GridComponent = ({ gridColors: updatedGridColors }: GridComponentProps) => {
    const gridWidth = 50; // Specify number of pixels horizontally
    const gridHeight = 50; // Specify number of pixels vertically
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [hoveredPixel, setHoveredPixel] = useState<PixelPosition | null>(null);
    const [gridColors, setGridColors] = useState( // Create a matrix for the color grid
        Array.from({ length: gridHeight }, () => Array(gridWidth).fill('#FFFFFF')));
    const [currentPixel, setCurrentPixel] = useState<PixelPosition | null>(null);
    const [isTransactionLoading, setIsTransactionLoading] = useState(false); // To get the transaction status when someone updates a pixel
    const [transactionHash, setTransactionHash] = useState(''); // To get the transaction hash when someone updates a pixel

    // Fetch the matrix from the blockchain using the useReadContract hook
    const resultReadGetMatrix = useReadContract({
        abi: contractABI,
        address: contractAddress,
        functionName: 'getMatrix',
    })

    // Fetch and display the matrix from the blockchain
    useEffect(() => {
        const fetchMatrix = async () => {
            if (resultReadGetMatrix.isLoading || !resultReadGetMatrix.data) {
                console.log('Waiting for data...');
                return; // Exit if data is loading or not present
            }
            const data = resultReadGetMatrix.data as number[];
            const colors = data.map((colorDecimal: number) => `#${colorDecimal.toString(16).padStart(6, '0')}`);

            const newGridColors = [];
            for (let i = 0; i < gridHeight; i++) {
                newGridColors.push(colors.slice(i * gridWidth, (i + 1) * gridWidth));
            }
            setGridColors(newGridColors);
        };
        fetchMatrix().catch(console.error);
    }, [resultReadGetMatrix.isLoading, resultReadGetMatrix.data]);

    // This function updates the color on the blockchain
    const updateColorOnBlockchain = async (rowIndex: number, colIndex: number, colorHex: string) => {
        try {
            const colorDecimal = parseInt(colorHex.slice(1), 16); // Convert hex to decimal (Need to handle for rgb, ...)
            await UpdateMatrixCellOnChain(
                rowIndex,
                colIndex,
                colorDecimal,
                (hash) => {
                    setTransactionHash(hash); // Update with transaction hash
                    setIsTransactionLoading(true); // Set the loading indicator here, after receiving the hash
                },
                () => {
                    setIsTransactionLoading(false); // End of transaction
                    setTransactionHash(''); // Cleaning the hash
                    
                    // Upon successful blockchain update, update the local state to reflect the change
                    const newGridColors = gridColors.map(row => [...row]);
                    newGridColors[rowIndex][colIndex] = colorHex;
                    setGridColors(newGridColors);
                },
                (error) => {
                    setIsTransactionLoading(false);
                    console.error("Failed to update the matrix cell on the blockchain", error);
                }
            );
            setCurrentPixel(null); // Deselect current pixel after color update
        } catch (error) {
            console.error("Failed to update the matrix cell on the blockchain", error);
        }
    };

    useEffect(() => { // Update the grid data when they click synchronize in the gridHeader
        if (updatedGridColors.length > 0) {
            setGridColors(updatedGridColors);
        }
    }, [updatedGridColors]); 

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
            {isTransactionLoading ? (
                <TransactionLoader
                    transactionHash={transactionHash}
                    onTransactionConfirmed={() => {
                        setIsTransactionLoading(false);
                        setTransactionHash('');
                        setCurrentPixel(null);
                        // We could build a function that redirects the user to etherscan
                    }}
                />
            ) : (
                currentPixel !== null && (
                    <ColorPicker
                        selectedColor={selectedColor}
                        onColorChange={handleColorChange}
                        onConfirm={() => updateColorOnBlockchain(currentPixel.rowIndex, currentPixel.colIndex, selectedColor)}
                        onCancel={() => setCurrentPixel(null)}
                    />
                )
            )}
        </div >
    );
};

export default GridComponent;