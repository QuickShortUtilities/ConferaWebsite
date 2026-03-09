"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

export default function WatchOSPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground />
            <PlatformNav />

            {/* Hero Section */}
            <div className="relative z-10 pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase mb-4 block">watchOS Pulse</span>
                    <h1 className="confera-title text-5xl md:text-8xl font-thin tracking-[0.2em] uppercase mb-8">
                        The Network <br />Pulse
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-2xl mx-auto leading-relaxed">
                        Intelligence on your wrist. <br />Haptic connectivity for the modern enterprise elite.
                    </p>
                </motion.div>

                {/* Watch Mockup / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group h-[500px] flex items-center justify-center"
                >
                    {/* Neural Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[1, 1.5, 2].map((scale, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: scale, opacity: [0, 0.2, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 1,
                                    ease: "easeOut"
                                }}
                                className="absolute w-64 h-64 border border-blue-500/30 rounded-full"
                            />
                        ))}
                    </div>

                    <div className="relative glass w-64 h-80 rounded-[4rem] border-white/20 p-2 shadow-2xl bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                        <div className="w-full h-full rounded-[3.5rem] bg-gradient-to-b from-gray-900 to-black overflow-hidden relative flex flex-col items-center justify-center p-8 border border-white/5">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-1/2"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 animate-pulse"></div>
                            <div className="absolute bottom-12 text-[8px] font-black tracking-[0.4em] text-blue-400 uppercase">Synchronized</div>

                            {/* Simulated Watch Grid */}
                            <div className="absolute top-12 grid grid-cols-4 gap-2 opacity-20">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 rounded-full bg-white/40"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Feature Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { title: "Haptic Alerts", desc: "Subtle pulse notifications for priority networking events." },
                        { title: "Quick Exchange", desc: "Respond to contact requests with a single wrist gesture." },
                        { title: "Network Health", desc: "Real-time visualization of your active intelligence node." },
                        { title: "Complications", desc: "Instant access to your Confera score on any watch face." }
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
