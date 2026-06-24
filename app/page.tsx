"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (!res.ok) throw new Error('Failed');
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!isMounted) return null;

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-[#050505]">
            <NeuralBackground />

            {/* Top Branding */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 w-full z-20 px-8 py-6 flex justify-between items-center"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center shadow-lg transform rotate-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-500 font-bold tracking-[0.3em] uppercase">Confera</span>
                </div>
                <a href="/ios" className="text-xs text-gray-600 hover:text-gray-300 font-bold tracking-[0.2em] uppercase transition-colors">
                    Explore Platform →
                </a>
            </motion.div>

            <div className="z-10 text-center max-w-4xl w-full flex flex-col items-center gap-8">

                {/* Live badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400">Now Live</span>
                </motion.div>

                {/* Hero Title */}
                <motion.header
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="confera-title text-6xl md:text-9xl font-thin tracking-[0.3em] uppercase mb-4 drop-shadow-2xl">
                        Confera
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg tracking-wide font-light max-w-2xl mx-auto leading-relaxed">
                        The professional network that knows who to put in front of you.<br />
                        <span className="text-gray-600">Scan. Connect. Confera handles the rest.</span>
                    </p>
                </motion.header>

                {/* Email Capture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass shimmer p-8 md:p-12 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group border-white/5 w-full max-w-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="relative z-10"
                            >
                                <h2 className="text-lg md:text-2xl font-light tracking-wide text-white/90 mb-3">
                                    Get early access
                                </h2>
                                <p className="text-sm text-gray-500 mb-8">
                                    Join professionals already using Confera to turn every room into an opportunity.
                                </p>
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mb-8" />

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                    <div className="relative w-full sm:w-80 group">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-black/40 border border-white/5 rounded-2xl px-6 py-4 w-full text-sm focus:outline-none focus:border-blue-500/30 focus:bg-black/60 transition-all placeholder:text-gray-600 text-white"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-4 accent-gradient rounded-2xl text-sm font-bold tracking-wide transition-all shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-95 whitespace-nowrap disabled:opacity-60"
                                    >
                                        {loading ? 'Joining…' : 'Get Early Access'}
                                    </button>
                                </form>
                                {error && <p className="text-red-400 text-xs mt-4 text-center">{error}</p>}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 py-6 text-center"
                            >
                                <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    <span className="text-blue-400 text-3xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-light tracking-wide text-white mb-3">You're on the list.</h3>
                                <p className="text-gray-500 text-sm">We'll be in touch soon. Welcome to Confera.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Platform Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-wrap justify-center gap-4 mt-4"
                >
                    {[
                        { label: 'iOS', href: '/ios' },
                        { label: 'iPadOS', href: '/ipados' },
                        { label: 'watchOS', href: '/watchos' },
                    ].map((p) => (
                        <a
                            key={p.href}
                            href={p.href}
                            className="text-xs text-gray-600 hover:text-gray-300 font-bold tracking-[0.3em] uppercase transition-colors border border-white/5 px-4 py-2 rounded-full hover:border-white/10"
                        >
                            {p.label} →
                        </a>
                    ))}
                </motion.div>

                {/* Perspective Mockups Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                        <div className="relative glass rounded-[3rem] overflow-hidden border-white/5 p-4 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-30" />
                            <Image
                                src="/mockup1.png"
                                alt="Confera App Interface"
                                width={1200}
                                height={1200}
                                className="w-full h-auto object-cover rounded-[2rem]"
                            />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">Neural Discovery</p>
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
                        <div className="absolute -inset-4 bg-purple-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                        <div className="relative glass rounded-[3rem] overflow-hidden border-white/5 p-4 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:-rotate-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-30" />
                            <Image
                                src="/mockup2.png"
                                alt="Confera CRM Sync"
                                width={1200}
                                height={1200}
                                className="w-full h-auto object-cover rounded-[2rem]"
                            />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">CRM Pipeline</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </main>
    );
}
