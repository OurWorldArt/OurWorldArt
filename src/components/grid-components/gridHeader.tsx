'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConnectWallet from '../connectWallet';
import { GridHeaderProps } from '../../types/index';

const GridHeader = ({ synchronizeGrid }: GridHeaderProps) => {
    return (
        <header className="flex justify-center items-center py-2 bg-white">
            <div className="flex justify-between items-center w-full px-4" style={{ maxWidth: '1500px' }}>
                {/* Logo and Link */}
                <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <div className="mr-5 relative">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={18}
                                height={18}
                            />
                        </div>
                        <span className="text-lg font-bold text-gray-800 hidden sm:block">
                            <span className="font-normal">Our</span>
                            <span className="font-normal text-old_rose">World</span>
                            <span className="font-normal text-thulian_pink">Art</span>
                        </span>
                    </a>
                </Link>
                <div className="flex items-center gap-4">
                    <button onClick={synchronizeGrid} className="px-2 py-1 bg-old_rose hover:bg-alice_blue-300 text-white rounded-lg">
                        Refresh
                    </button>
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
}

export default GridHeader;
