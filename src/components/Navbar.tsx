"use client";

import Link from 'next/link';
import '@/styles/Navbar.scss';

const Navbar = () => {

    return (
        <header className="bg-[#0b0b1d] px-20 pt-5 text-2xl font-bold">
            <nav className="container mx-auto px-12 py-4 flex justify-between items-center">
                <div className='flex items-center justify-between'>
                    <Link href="/" className="text-[#03FFF7] text-4xl transition-colors duration-300">
                        Hogan Pham
                    </Link>
                    <span className="text-xs ml-2 mr-2 px-3 py-1 rounded-full bg-orange-500 text-blue-800 font-bold">Open to work</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/home" className="nav-link">Home</Link>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
