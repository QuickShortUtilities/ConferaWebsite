"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";
import PlatformNav from "@/components/PlatformNav";

const features = [
    {
        title: "Glass Scanner",
        desc: "Point your camera at any badge, business card, or name tag. Confera's OCR engine extracts, enriches, and saves the contact in under a second.",
        icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
        title: "Digital Handshake",
        desc: "Tap phones to exchange full professional profiles via NFC. No apps to open. No QR codes to scan. Just a tap.",
        icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
    },
    {
        title: "Neural Discovery",
        desc: "Confera's AI continuously scans your environment — surfaces the most relevant professionals in the room before you've even introduced yourself.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }
];

const mockups = [
    '/showcase/mockup-1.png',
    '/showcase/mockup-2.png',
    '/showcase/mockup-3.png', // Center
    '/showcase/mockup-4.png',
    '/showcase/mockup-5.png',
];

function MockupItem({ src, i, mouseX, mouseY }: { src: string, i: number, mouseX: any, mouseY: any }) {
    const isCenter = i === 2;
    const offset = i - 2; // -2, -1, 0, 1, 2
    
    // Base static transforms for the fan effect
    const baseZ = -Math.abs(offset) * 80; // push back
    const baseX = offset * 90; // push left/right
    const baseRotateY = offset * -12; // fan out rotation
    
    // Interactive mouse parallax (subtle)
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 150, damping: 20 });
    const mouseRotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 150, damping: 20 });
    const xOffset = useSpring(useTransform(mouseX, [-300, 300], [offset * -10, offset * 10]), { stiffness: 150, damping: 20 });
    const yOffset = useSpring(useTransform(mouseY, [-300, 300], [-10, 10]), { stiffness: 150, damping: 20 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 150, rotateY: 0, x: 0, z: -500 }}
            animate={{ 
                opacity: 1, 
                y: Math.abs(offset) * 20, // push down slightly
                rotateY: baseRotateY, 
                x: baseX, 
                z: baseZ 
            }}
            transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15 
            }}
            className="absolute w-[65%] sm:w-[50%] md:w-[60%] lg:w-[65%]"
            style={{ 
                zIndex: 10 - Math.abs(offset),
                rotateX,
                rotateY: mouseRotateY,
                x: xOffset,
                y: yOffset,
                transformStyle: 'preserve-3d'
            }}
        >
            {isCenter && <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full -z-10" />}
            
            <motion.div 
                className={`relative rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#050505] ${isCenter ? 'shadow-[0_40px_80px_rgba(0,163,255,0.25)]' : 'shadow-2xl'}`}
                whileHover={{ y: -20, z: baseZ + 30, rotateY: baseRotateY * 0.5, transition: { duration: 0.4 } }}
            >
                {/* Dark overlay for back items */}
                {!isCenter && <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] md:rounded-[3rem] pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-10" />}
                
                <Image
                    src={src}
                    alt={`Confera iOS Mockup ${i + 1}`}
                    width={600}
                    height={1200}
                    className="w-full h-auto rounded-[2.5rem] md:rounded-[3rem]"
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-tr from-blue-500/10 via-transparent to-white/10 pointer-events-none z-20" />
            </motion.div>
        </motion.div>
    );
}

function ShowcaseDeck() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[4/5] flex items-center justify-center cursor-pointer perspective-[1500px]"
            style={{ perspective: 1500 }}
        >
            {mockups.map((src, i) => (
                <MockupItem key={i} src={src} i={i} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </div>
    );
}

export default function IOSPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] overflow-hidden">
            <NeuralBackground accentColor="rgba(0, 163, 255, 0.2)" />
            <PlatformNav />

            {/* Hero Section */}
            <div className="relative z-10 pt-52 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-xs text-blue-500 font-bold tracking-[0.4em] uppercase mb-4 block">iOS Architecture</span>
                    <h1 className="confera-title text-5xl md:text-7xl font-thin tracking-[0.15em] uppercase mb-6 text-left leading-tight">
                        Mobile<br />Intelligence
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
                        Scan. Connect. Done. Confera for iPhone turns every room into an opportunity — without you lifting a finger.
                    </p>

                    <div className="flex flex-col gap-8 mb-12">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                                className="flex gap-5 items-start group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="1.5" className="w-5 h-5">
                                        <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-wide text-white mb-1">{feature.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center gap-4"
                    >
                        <a
                            href="https://apps.apple.com"
                            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Download for iPhone
                        </a>
                        <a href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors font-medium">
                            Learn more →
                        </a>
                    </motion.div>
                </motion.div>

                <ShowcaseDeck />
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/5"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-light tracking-[0.2em] uppercase text-white mb-6">Precision Syncing</h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            The iOS app is your primary field node. Every contact scanned, every handshake initiated, and every insight discovered syncs instantly across your iPad and Mac.
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { value: '<0.2s', label: 'Global Sync Latency' },
                            { value: '99.9%', label: 'OCR Accuracy (beta)' },
                            { value: '47+', label: 'Data Enrichment Sources' },
                            { value: 'AES-256', label: 'Encryption Standard' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-6 rounded-3xl border-white/5 text-center"
                            >
                                <div className="text-2xl font-thin text-blue-400 mb-2">{stat.value}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </main>
    );
}
