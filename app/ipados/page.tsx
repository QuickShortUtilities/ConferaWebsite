"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

const features = [
    {
        title: "Enterprise Hub",
        desc: "Manage high-volume contact flows across your entire organisation. Assign, delegate, and track every connection from a single command surface.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "Deep Insights",
        desc: "See your professional network as a living graph. Confera's AI surfaces hidden relationships, warm introduction paths, and missed opportunities across your whole team.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
        title: "CRM Integration",
        desc: "Native bridge to Salesforce, HubSpot, and custom enterprise stacks. Every contact flows directly into your pipeline — with context already attached.",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    }
];

export default function IPadOSPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground accentColor="rgba(139, 92, 246, 0.2)" />
            <PlatformNav />

            {/* Hero Section */}
            <div className="relative z-10 pt-52 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs text-violet-400 font-bold tracking-[0.4em] uppercase mb-4 block">iPadOS Command</span>
                    <h1 className="confera-title text-5xl md:text-7xl font-thin tracking-[0.15em] uppercase mb-6 leading-tight"
                        style={{ background: 'linear-gradient(to bottom, #fff 40%, rgba(139, 92, 246, 0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                        The Intelligence<br />Command Center
                    </h1>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
                        See your entire professional world at once. The iPad is where strategy happens — Confera gives you the complete picture.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-5xl"
                >
                    <div className="absolute -inset-10 bg-violet-500/8 blur-[100px] rounded-full" />
                    <div className="relative glass p-4 md:p-8 rounded-[3rem] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                        <Image
                            src="/ipados_scanner.png"
                            alt="Confera iPadOS Interface"
                            width={1600}
                            height={900}
                            className="rounded-[2rem] w-full h-auto"
                        />
                        <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-tr from-violet-500/5 via-transparent to-white/5 pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Feature Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-light tracking-[0.3em] uppercase text-white mb-16 text-center"
                >
                    Built for scale
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            key={i}
                            className="glass p-8 rounded-3xl border-white/5 group hover:border-violet-500/20 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="w-6 h-6">
                                    <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold tracking-wide text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center py-24 border-t border-white/5 px-6"
            >
                <p className="text-xs text-gray-600 font-bold tracking-[0.4em] uppercase mb-4">Available on iPad</p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white mb-8">Your network, at full scale.</h2>
                <a
                    href="https://apps.apple.com"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download for iPad
                </a>
            </motion.div>

        </main>
    );
}
