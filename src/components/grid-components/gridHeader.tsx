'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConnectWallet from '../connectWallet';

const GridHeader = () => {
    return (
        <header className="flex justify-center items-center py-2 bg-white">
            <div className="flex justify-between items-center w-full pl-4" style={{ maxWidth: '1500px' }}>
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
                <div>
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
}

export default GridHeader;