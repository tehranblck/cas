'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavLink = {
    label: string;
    href: string;
};

type HeaderProps = {
    navLinks: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-black text-white py-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 md:px-16 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Image alt="logo" src="/logo.png" width={60} height={60} className="w-12 h-12" />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <span className="cursor-pointer hover:text-gray-400 hover:underline underline-offset-4 transition-all">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* "Let's Talk" Button */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className="px-4 py-2 border border-white rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-transform">
                            Let&apos;s Talk
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="flex md:hidden flex-col space-y-1 cursor-pointer" onClick={toggleMenu}>
                    <span className={`block h-1 w-6 bg-white transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-1 w-6 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-1 w-6 bg-white transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`transition-all duration-500 md:hidden overflow-hidden bg-black ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <span
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-white hover:text-gray-400 transition-colors"
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                    <Link href="/contact">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
                        >
                            Let&apos;s Talk
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
