"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

export default function IPadOSPage() {
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
                    className="text-center mb-20"
                >
                    <span className="text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase mb-4 block">iPadOS Command</span>
                    <h1 className="confera-title text-5xl md:text-8xl font-thin tracking-[0.2em] uppercase mb-8">
                        The Intelligence <br />Command Center
                    </h1>
                    <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-3xl mx-auto leading-relaxed">
                        Unleash the full analytical power of Confera. <br />Large-scale data visualization and enterprise-level orchestration.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-5xl"
                >
                    <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full"></div>
                    <div className="relative glass p-4 md:p-8 rounded-[3rem] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                        <Image
                            src="/mockup2.png"
                            alt="Confera iPadOS Interface"
                            width={1600}
                            height={900}
                            className="rounded-[2rem] w-full h-auto"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Feature Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        {
                            title: "Enterprise Hub",
                            desc: "Manage high-volume contact flows and organizational synchronization.",
                            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        },
                        {
                            title: "Deep Insights",
                            desc: "Contextual AI analysis of your entire professional network graph.",
                            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        },
                        {
                            title: "CRM Integration",
                            desc: "Native bridge to Salesforce, HubSpot, and custom enterprise stacks.",
                            icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-xl">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-8 h-8">
                                    <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-600 text-[10px] leading-relaxed tracking-wider uppercase max-w-xs mx-auto">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </main>
    );
}
