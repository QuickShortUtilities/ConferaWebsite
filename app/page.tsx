"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (!isMounted) return null;

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-[#050505]">
            <NeuralBackground />

            {/* Top Navigation / Branding */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 w-full z-20 px-8 py-6 flex justify-center"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center shadow-lg transform rotate-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold tracking-[0.4em] uppercase">Partner Ecosystem</span>
                </div>
            </motion.div>

            <div className="z-10 text-center max-w-5xl w-full flex flex-col items-center">
                {/* Hero Title Section */}
                <motion.header
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <h1 className="confera-title text-5xl md:text-8xl font-thin tracking-[0.4em] uppercase mb-6 drop-shadow-2xl">
                        Confera
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold opacity-80">
                        Synchronizing Global Commerce
                    </p>
                </motion.header>

                {/* Central Glass Portal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass shimmer p-8 md:p-16 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group border-white/5 w-full max-w-3xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="relative z-10"
                            >
                                <h2 className="text-lg md:text-xl font-extralight tracking-[0.3em] text-white/90 mb-8 uppercase">
                                    Neural Intelligence <span className="text-blue-500 mx-2">|</span> Human Connection
                                </h2>
                                <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mb-10"></div>

                                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <div className="relative w-full md:w-96 group">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter Synchronization Key (Email)"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-black/40 border border-white/5 rounded-2xl px-8 py-5 w-full text-xs tracking-widest focus:outline-none focus:border-blue-500/30 focus:bg-black/60 transition-all placeholder:text-gray-700"
                                        />
                                        <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/10 pointer-events-none transition-all duration-500"></div>
                                    </div>
                                    <button className="px-10 py-5 accent-gradient rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase transition-all shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                                        Initialize
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 py-6 text-center"
                            >
                                <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    <motion.div
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-blue-400 text-3xl"
                                    >✓</motion.div>
                                </div>
                                <h3 className="text-xl font-light tracking-[0.4em] text-white mb-3 uppercase">Access Synchronized</h3>
                                <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold">Node established. Awaiting further instruction.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Perspective Mockups Section */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative glass rounded-[3rem] overflow-hidden border-white/5 p-4 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-30"></div>
                            <Image
                                src="/mockup1.png"
                                alt="Confera App Interface"
                                width={1200}
                                height={1200}
                                className="w-full h-auto object-cover rounded-[2rem]"
                            />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/90">01. NEURAL DISCOVERY NODE</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative group cursor-pointer md:mt-24"
                    >
                        <div className="absolute -inset-4 bg-purple-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative glass rounded-[3rem] overflow-hidden border-white/5 p-4 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:-rotate-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-30"></div>
                            <Image
                                src="/mockup2.png"
                                alt="Confera Analytics Portal"
                                width={1200}
                                height={1200}
                                className="w-full h-auto object-cover rounded-[2rem]"
                            />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/90">02. PARTNER ECOSYSTEM INTEL</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-32 pb-12 text-[9px] text-gray-700 tracking-[0.5em] uppercase font-bold flex flex-col items-center gap-4">
                <div className="h-px w-16 bg-white/5 mb-4"></div>
                <span>© 2026 QuickShort LTD. GLOBAL OPERATIONS</span>
                <div className="flex gap-8 mt-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span className="cursor-pointer hover:text-white">Protocol</span>
                    <span className="cursor-pointer hover:text-white">Security</span>
                    <span className="cursor-pointer hover:text-white">Nodes</span>
                </div>
            </footer>
        </main>
    );
}
