'use client'

import { NavLinks } from '@/lib/constants';
import Image from 'next/image';
import { useState } from 'react';
import CollapsedNav from './(nav)/collapsedNavBar';
import NavBar from './(nav)/navBar';

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sticky top-0 shadow-md">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <Image src="https://s3.amazonaws.com/cdn.looka.com/curated-symbols/Asset+64LETTERS2.png" alt="logo" width="40" height="40" priority/>
                    </a>
                    <div className="sm:hidden">
                        {
                            !navVisible && 
                            <button onClick={() => setNavVisible(true)} type="button" className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                                <Image src="hamburgericon.svg" alt="nav-icon" width="20" height="20"/>
                            </button>
                        }
                        {
                            navVisible && 
                            <button onClick={() => setNavVisible(false)} type="button" className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                                <Image src="closeicon.svg"  alt="close" width="20" height="20"/>
                            </button>
                        }
                        <CollapsedNav visible={navVisible} links={NavLinks} setNavVisible={setNavVisible}/>
                    </div>
                </div>
                <NavBar links={NavLinks} />
            </nav>
        </header>
    )
}
