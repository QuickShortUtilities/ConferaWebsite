"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const platforms = [
    { name: 'Software Hub', href: '/software' },
    { name: 'iOS', href: '/ios' },
    { name: 'iPadOS', href: '/ipados' },
    { name: 'WatchOS', href: '/watchos' },
];

export default function PlatformNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
            <div className="glass px-2 py-2 rounded-2xl flex items-center gap-1 border-white/5 shadow-2xl">
                {platforms.map((platform) => {
                    const isActive = pathname === platform.href;
                    return (
                        <Link key={platform.href} href={platform.href}>
                            <div className="relative px-4 py-2 cursor-pointer group">
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute inset-0 bg-white/10 rounded-xl outline outline-1 outline-white/10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                    {platform.name}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
