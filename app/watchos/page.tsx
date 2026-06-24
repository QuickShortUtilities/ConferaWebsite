"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

const features = [
    {
        title: "Haptic Alerts",
        desc: "A subtle pulse on your wrist when someone nearby is a high-value match. No phone needed."
    },
    {
        title: "Quick Exchange",
        desc: "Respond to connection requests with a single wrist gesture. Accept, defer, or note — without breaking conversation."
    },
    {
        title: "Network Health",
        desc: "A glanceable score showing the strength of your active network at any moment — synced from your iPhone in real time."
    },
    {
        title: "Complications",
        desc: "Add your Confera score, today's match count, or pending connections to any Apple Watch face."
    }
];

function WatchFace() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative group h-[500px] flex items-center justify-center"
        >
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[1, 1.5, 2.1].map((scale, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: scale, opacity: [0, 0.15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
                        className="absolute w-56 h-56 border border-emerald-500/30 rounded-full"
                    />
                ))}
            </div>

            {/* Watch body */}
            <div className="relative w-56 h-72 rounded-[3.5rem] bg-black border-[5px] border-gray-800 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Digital crown */}
                <div className="absolute right-[-8px] top-16 w-3 h-12 bg-gray-700 rounded-l-md border border-gray-600" />
                <div className="absolute right-[-8px] top-32 w-3 h-6 bg-gray-700 rounded-l-md border border-gray-600" />

                {/* Screen gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />

                {/* Confera complication — top */}
                <div className="absolute top-5 flex items-center gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="text-[8px] font-black tracking-[0.2em] text-emerald-400 uppercase">Confera</span>
                </div>

                {/* Live time */}
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-4xl font-thin text-white tracking-tight tabular-nums">{time || '00:00'}</span>
                    <span className="text-[9px] text-gray-500 font-bold tracking-[0.3em] uppercase mt-1">
                        {new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </span>
                </div>

                {/* Match score complication */}
                <div className="absolute bottom-6 flex flex-col items-center z-10">
                    <div className="w-px h-4 bg-white/10 mb-2" />
                    <span className="text-[9px] font-black tracking-[0.25em] text-blue-400 uppercase">3 Matches</span>
                    <span className="text-[7px] text-gray-600 tracking-widest uppercase mt-0.5">In range</span>
                </div>

                {/* Activity rings decoration */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 z-10">
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                        <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="2" />
                        <circle cx="16" cy="16" r="14" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="62 88" strokeLinecap="round" transform="rotate(-90 16 16)" />
                        <circle cx="16" cy="16" r="10" fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="2" />
                        <circle cx="16" cy="16" r="10" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="44 63" strokeLinecap="round" transform="rotate(-90 16 16)" />
                        <circle cx="16" cy="16" r="6" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="2" />
                        <circle cx="16" cy="16" r="6" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="28 38" strokeLinecap="round" transform="rotate(-90 16 16)" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}

export default function WatchOSPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground accentColor="rgba(52, 211, 153, 0.15)" />
            <PlatformNav />

            {/* Hero Section */}
            <div className="relative z-10 pt-52 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-xs text-emerald-400 font-bold tracking-[0.4em] uppercase mb-4 block">watchOS Pulse</span>
                    <h1 className="text-5xl md:text-7xl font-thin tracking-[0.15em] uppercase mb-6 leading-tight"
                        style={{ background: 'linear-gradient(to bottom, #fff 40%, rgba(52, 211, 153, 0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                        React at the<br />Right Moment
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-md">
                        Intelligence on your wrist. Feel a haptic pulse when someone worth meeting is in the room — without reaching for your phone.
                    </p>

                    <div className="grid grid-cols-1 gap-5">
                        {features.slice(0, 2).map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.15 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        href="https://apps.apple.com"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="inline-flex items-center gap-3 mt-10 bg-white text-black px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Coming to Apple Watch
                    </motion.a>
                </motion.div>

                <WatchFace />
            </div>

            {/* Feature grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="glass p-6 rounded-3xl border-white/5 group hover:border-emerald-500/20 transition-colors duration-500"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-400/50 mb-4 group-hover:bg-emerald-400 transition-colors shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                            <h4 className="text-sm font-bold tracking-wide text-white mb-3">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </main>
    );
}
