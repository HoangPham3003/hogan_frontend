"use client";

import Link from 'next/link';
import '@/styles/Navbar.scss';

const Navbar = () => {

    return (
        <header className="bg-[#0f172a] px-20 pt-5 text-2xl font-bold">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className='flex items-center justify-between'>
                    <Link href="/" className="text-[#03FFF7] text-4xl transition-colors duration-300">
                        Hogan Pham
                    </Link>
                    <span className="bg-purple-100 text-purple-800 text-xs ml-2 mr-2 px-3 py-1 rounded-full dark:bg-orange-500 dark:text-blue-800 font-bold">Open to work</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/#" className="nav-link">About</Link>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
