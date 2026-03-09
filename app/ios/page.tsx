"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

export default function IOSPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground />
            <PlatformNav />

            {/* Hero Section */}
            <div className="relative z-10 pt-48 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase mb-4 block">iOS Architecture</span>
                    <h1 className="confera-title text-5xl md:text-8xl font-thin tracking-[0.2em] uppercase mb-8 text-left">
                        Mobile <br />Intelligence
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold leading-relaxed mb-12">
                        The power of Confera, optimized for your pocket. <br />Precision networking at the speed of thought.
                    </p>

                    <div className="flex flex-col gap-6">
                        {[
                            { title: "Glass Scanner", desc: "Augmented reality business card extraction." },
                            { title: "Digital Handshake", desc: "NFC-powered instant profile exchange." },
                            { title: "Neural Discovery", desc: "AI-driven local networking node." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-px h-12 bg-blue-500/30"></div>
                                <div>
                                    <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white mb-1">{feature.title}</h4>
                                    <p className="text-gray-600 text-[10px] uppercase tracking-wider">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
                    <div className="relative glass p-4 rounded-[3.5rem] border-white/10 shadow-2xl rotate-2">
                        <Image
                            src="/mockup1.png"
                            alt="Confera iOS Interface"
                            width={600}
                            height={1200}
                            className="rounded-[3rem] w-full h-auto"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Detail Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div>
                        <h2 className="text-2xl font-thin tracking-[0.3em] uppercase text-white mb-12 italic">Precision Syncing</h2>
                        <p className="text-gray-500 text-xs leading-relaxed tracking-widest uppercase mb-8">
                            The iOS application acts as your primary field node. Every contact scanned, every handshake initiated, and every insight discovered is instantly synchronized with your Global Command Center on iPad and Desktop.
                        </p>
                        <div className="h-px w-32 bg-gradient-to-r from-blue-500 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="glass p-8 rounded-3xl border-white/5 text-center">
                            <div className="text-2xl font-thin text-blue-500 mb-2">0.2s</div>
                            <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Global Sync Latency</div>
                        </div>
                        <div className="glass p-8 rounded-3xl border-white/5 text-center">
                            <div className="text-2xl font-thin text-blue-500 mb-2">99.9%</div>
                            <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">OCR Accuracy</div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
