"use client";

import Link from 'next/link';
import '../styles/Navbar.scss';

const Navbar = () => {

    return (
        <header className="bg-[#0f172a] px-20 pt-5 text-2xl font-bold">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-[#03FFF7] transition-colors duration-300">
                    Hogan Pham
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/#" className="nav-link">About</Link>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
