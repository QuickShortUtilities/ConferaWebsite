"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";
import Link from 'next/link';

export default function SoftwareHub() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground />
            <PlatformNav />

            {/* Header Section */}
            <div className="relative z-10 pt-48 pb-12 px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <span className="text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase mb-4 block">Unified Ecosystem</span>
                    <h1 className="confera-title text-4xl md:text-7xl font-thin tracking-[0.3em] uppercase mb-6">
                        Software Hub
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-2xl mx-auto leading-relaxed">
                        One Architecture. Every Device. Seamless Intelligence.
                    </p>
                </motion.div>
            </div>

            {/* Main Platform Display */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* iPadOS - Command Center */}
                    <Link href="/ipados">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative glass rounded-[2.5rem] p-8 border-white/5 h-full flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-6 h-6">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-light tracking-widest text-white mb-4 uppercase">iPadOS</h3>
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-8">Intelligence Command Center</p>
                                <div className="mt-auto w-full aspect-video relative rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src="/mockup2.png" alt="iPadOS Interface" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* iOS - Precision Node */}
                    <Link href="/ios">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer relative md:-translate-y-8"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/30 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative glass rounded-[2.5rem] p-8 border-white/10 h-full flex flex-col items-center text-center bg-white/[0.02]">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-6 h-6">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                        <line x1="12" y1="18" x2="12" y2="18"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold tracking-widest text-white mb-4 uppercase">iOS</h3>
                                <p className="text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8">Active Intelligence Node</p>
                                <div className="mt-auto w-full aspect-[9/16] relative rounded-xl overflow-hidden transition-all duration-700">
                                    <Image src="/mockup1.png" alt="iOS Interface" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-50"></div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* WatchOS - Network Pulse */}
                    <Link href="/watchos">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative glass rounded-[2.5rem] p-8 border-white/5 h-full flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-6 h-6">
                                        <rect x="6" y="4" width="12" height="16" rx="3"></rect>
                                        <path d="M6 8h12"></path>
                                        <path d="M6 16h12"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-light tracking-widest text-white mb-4 uppercase">WatchOS</h3>
                                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-8">Real-time Haptic Sync</p>
                                <div className="mt-auto w-40 aspect-square relative rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mx-auto border border-white/5">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                                    <div className="flex items-center justify-center h-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>

            {/* Feature Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {[
                        { title: "Cross-Platform", desc: "Native experiences optimized for every screen size." },
                        { title: "Real-time Sync", desc: "Instant data propagation across your personal ecosystem." },
                        { title: "Neural Logic", desc: "Shared AI engine powering intelligent networking." },
                        { title: "Secure Protocol", desc: "Enterprise-grade encryption on every node." }
                    ].map((feature, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                        >
                            <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white mb-4">{feature.title}</h4>
                            <p className="text-gray-600 text-[10px] leading-relaxed tracking-wider uppercase">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </main>
    );
}
