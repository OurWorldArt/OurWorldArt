'use client'
import { useState } from 'react';
import GridComponent from '../../components/grid-components/gridComponent'
import GridHeader from '../../components/grid-components/gridHeader'
import DisplayMatrixFromChain from '../../components/grid-components/displayMatrixFromChain';

function Page() {
    const gridWidth = 50;
    const gridHeight = 50;
    const [updatedGridColors, setUpdatedGridColors] = useState<string[][]>(
        Array.from({ length: gridHeight }, () => Array(gridWidth).fill('#FFFFFF')));

    const synchronizeGrid = async () => {
        const result = await DisplayMatrixFromChain(gridHeight, gridWidth);
        setUpdatedGridColors(result);
    };

    return (
        <div className='bg-customLight2'>
            <GridHeader synchronizeGrid={synchronizeGrid} />
            <div className='flex flex-col min-h-screen mx-auto ' style={{ maxWidth: '1500px' }}>
                <main className="flex-grow flex flex-col items-center justify-center">
                    <section className='relative text-center py-40'>
                        <div>
                            <GridComponent gridColors={updatedGridColors} />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Page
