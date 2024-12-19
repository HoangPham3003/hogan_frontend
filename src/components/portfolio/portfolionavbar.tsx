'use client';

import { useState, useEffect } from "react";
import { FiHome, FiUser, FiBookOpen, FiBriefcase, FiActivity } from "react-icons/fi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

const PortfolioNavbar = () => {
    const [active, setActive] = useState<string>("portfolio");
    const [hovered, setHovered] = useState<string | null>(null);

    const navItems = [
        { name: "Home", icon: <FiHome size={15} />, key: "home", link: "/" },
        { name: "Portfolio", icon: <FiUser size={15} />, key: "portfolio", link: "/portfolio" },
        { name: "About", icon: <IoMdInformationCircleOutline size={15} />, key: "about", link: "#about" },
        { name: "Education", icon: <FiBookOpen size={15} />, key: "education", link: "#education" },
        { name: "Work", icon: <FiBriefcase size={15} />, key: "work", link: "#work" },
        { name: "Activity", icon: <FiActivity size={15} />, key: "activity", link: "#activity" },
        { name: "Hobby", icon: <IoExtensionPuzzleOutline size={15} />, key: "hobby", link: "#hobby" },
    ];

    // Auto-update active link based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 80) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 mx-auto max-w-fit flex items-center justify-center space-x-4 p-1 bg-gray-900 rounded-2xl text-white shadow-lg z-50">
            {navItems.map((item) => (
                <Link
                    key={item.key}
                    href={item.link}
                    onClick={() => setActive(item.key)}
                    onMouseEnter={() => setHovered(item.key)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center space-x-2 px-2 py-2 rounded-xl transition-all duration-300
                    ${hovered === item.key
                            ? "bg-[#03FFF7] text-black text-sm" // Highlight hovered item
                            : active === item.key && hovered === null
                                ? "bg-[#03FFF7] text-black text-sm" // Highlight active item if no hover
                                : "text-gray-600 hover:bg-gray-900 hover:text-white" // Default style
                        }`}
                >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                </Link>
            ))}
        </nav>
    );
};

export default PortfolioNavbar;
