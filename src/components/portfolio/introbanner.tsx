"use client";

import React from "react";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { Mail } from 'lucide-react'
import { SITE_METADATA } from '@/data/site_metadata'


const IntroBanner: React.FC = () => {

    return (
        <section id="portfolio" className="min-h-screen flex flex-col justify-center items-start px-8 md:px-40 text-white">
            <div>
                <h1 className="flex justify-between items-center text-4xl md:text-6xl font-bold leading-tight mb-2">
                    Hi, I&apos;m Hoang Pham
                    <span className="text-xs ml-4 mr-2 px-3 py-1 rounded-full bg-orange-500 text-blue-800 font-bold">Open to work</span>
                </h1>
                <h2 className="text-xl md:text-2xl leading-tight mb-6 text-gray-400">AI Engineer</h2>

                <div className="flex mb-6">
                    <Link target='_blank' href={SITE_METADATA.github} className="bg-transparent hover:bg-black rounded-xl flex items-center text-white font-bold border border-[#03FFF7] p-2">
                        <img className="mr-2" height="15" width="15" src="https://cdn.simpleicons.org/github/ffffff" />
                        <p className="text-sm">GitHub</p>
                    </Link>
                    <Link href={`mailto:${SITE_METADATA.email}`} className="bg-transparent hover:bg-black rounded-xl font-bold flex items-center text-white border border-[#03FFF7] p-2 mx-6">
                        <Mail className="mr-2" color='white' strokeWidth={2} size={15} />
                        <p className="text-sm">Email</p>
                    </Link>
                </div>

                <p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am passionate about deepening my expertise in',
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                        className="text-gray-400"
                    />
                    <TypeAnimation
                        sequence={[
                            'Artificial Intelligence',
                        ]}
                        wrapper="span"
                        speed={50}
                        className="bg-[#03FFF7] mx-1 px-2 py-1 rounded-md text-black text-sm font-bold"
                        cursor={false}
                    />
                </p>

                <div className="flex">
                    <Link target="_blank" href="/curriculum-vitae" className="border border-[#03FFF7] mt-8 flex items-center bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-blue-500 pl-4 pr-2 py-1 rounded-full text-sm font-semibold transition-all">
                        SEE MY CV
                        <span className="w-6 h-6 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                color="#03FFF7"
                                className="w-3.5 h-3.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 3h7m0 0v7m0-7L10 14M5 5h5m-5 0v10a2 2 0 002 2h10"
                                />
                            </svg>
                        </span>
                    </Link>
                    <Link href="#about" className="mx-6 border border-[#03FFF7] mt-8 flex items-center bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-pink-500 pl-4 pr-3 py-1 rounded-full text-sm font-semibold transition-all">
                        ABOUT ME
                        <span className="ml-2 w-6 h-6 flex items-center justify-center border-2 border-[#03FFF7] rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                color="#03FFF7"
                                className="w-3.5 h-3.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                    color="#03FFF7"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IntroBanner;
