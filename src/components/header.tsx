'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-center items-center py-5">
            <div className="flex justify-between items-center w-full pl-4">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <div className="mr-5 relative">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={28}
                                height={28}
                            />
                        </div>
                        <span className="text-2xl font-bold text-gray-800 hidden sm:block">
                            <span className="font-normal">Our</span>
                            <span className="font-normal text-old_rose">World</span>
                            <span className="font-normal text-thulian_pink">Art</span>
                        </span>
                    </a>
                </Link>
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Image
                        src="/assets/icon/menu.svg"
                        alt="Menu"
                        width={25}
                        height={25}
                    />
                </button>
                <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
                    <Link href="/" className="text-gray-800 hover:text-gray-900 px-4 py-2 text-xl transition duration-300">
                        WhitePaper
                    </Link>
                    <Link href="/" className="text-gray-800 hover:text-gray-900 ml-4 px-6 py-2 text-xl transition duration-300">
                        Community
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;