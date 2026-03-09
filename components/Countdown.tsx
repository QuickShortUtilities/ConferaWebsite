import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const NeuralGlobe = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = 400;
        let height = canvas.height = 200;
        const particles: any[] = [];
        const PARTICLE_COUNT = 60;
        const GLOBE_RADIUS = 80;
        let rotationX = 0;
        let rotationY = 0;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
            const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
            particles.push({
                x3: Math.cos(theta) * Math.sin(phi) * GLOBE_RADIUS,
                y3: Math.sin(theta) * Math.sin(phi) * GLOBE_RADIUS,
                z3: Math.cos(phi) * GLOBE_RADIUS,
                size: Math.random() * 1 + 0.5
            });
        }

        const project = (x: number, y: number, z: number) => {
            const perspective = 500;
            const factor = perspective / (perspective + z);
            return {
                x: x * factor + width / 2,
                y: y * factor + height / 2,
                scale: factor
            };
        };

        const rotatePoint = (p: any, angleX: number, angleY: number) => {
            const x1 = p.x3 * Math.cos(angleY) - p.z3 * Math.sin(angleY);
            const z1 = p.x3 * Math.sin(angleY) + p.z3 * Math.cos(angleY);
            const y2 = p.y3 * Math.cos(angleX) - z1 * Math.sin(angleX);
            const z2 = p.y3 * Math.sin(angleX) + z1 * Math.cos(angleX);
            return { x: x1, y: y2, z: z2 };
        };

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            rotationY += 0.005;
            rotationX = Math.sin(Date.now() * 0.0005) * 0.1;

            const projectedDots = particles.map(p => {
                const rotated = rotatePoint(p, rotationX, rotationY);
                return { ...project(rotated.x, rotated.y, rotated.z), z: rotated.z };
            });

            ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < projectedDots.length; i++) {
                for (let j = i + 1; j < projectedDots.length; j++) {
                    const dist3d = Math.sqrt(
                        Math.pow(particles[i].x3 - particles[j].x3, 2) +
                        Math.pow(particles[i].y3 - particles[j].y3, 2) +
                        Math.pow(particles[i].z3 - particles[j].z3, 2)
                    );
                    if (dist3d < 40) {
                        const p1 = projectedDots[i];
                        const p2 = projectedDots[j];
                        ctx.globalAlpha = p1.scale * p2.scale * 0.3;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            projectedDots.forEach((p, i) => {
                ctx.globalAlpha = p.scale;
                ctx.fillStyle = p.z > 0 ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.2)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, particles[i].size * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        let animationFrameId = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />;
};

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    useEffect(() => {
        // Target Date: Friday, March 27, 2026, 12:30 GMT
        const targetDate = new Date('March 27, 2026 12:30:00 GMT').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference < 0) {
                clearInterval(timer);
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                days: d.toString().padStart(2, '0'),
                hours: h.toString().padStart(2, '0'),
                minutes: m.toString().padStart(2, '0'),
                seconds: s.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const Unit = ({ value, label, isGold = false }: { value: string, label: string, isGold?: boolean }) => (
        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px] z-10">
            <motion.span
                key={value}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`text-3xl md:text-5xl font-['Outfit'] font-extralight tracking-tighter ${isGold ? 'text-[#D4AF37]' : 'text-white'}`}
            >
                {value}
            </motion.span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-2">
                {label}
            </span>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mb-12 relative"
        >
            <div className="glass rounded-[2rem] px-8 py-6 md:px-12 md:py-8 border border-white/5 relative overflow-hidden flex items-center justify-center gap-8 md:gap-12">
                <NeuralGlobe />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>

                <Unit value={timeLeft.days} label="Days" />
                <div className="w-px h-8 bg-white/5 hidden md:block z-10"></div>
                <Unit value={timeLeft.hours} label="Hours" />
                <div className="w-px h-8 bg-white/5 hidden md:block z-10"></div>
                <Unit value={timeLeft.minutes} label="Minutes" />
                <div className="w-px h-8 bg-white/5 hidden md:block z-10"></div>
                <Unit value={timeLeft.seconds} label="Seconds" isGold />
            </div>

            <div className="mt-4 flex justify-center items-center gap-3">
                <div className="h-px w-8 bg-[#D4AF37]/20"></div>
                <span className="text-[9px] font-bold tracking-[0.4em] text-[#D4AF37]/50 uppercase">Protocol Launch Arrival: 27.03.2026 | 12:30 GMT</span>
                <div className="h-px w-8 bg-[#D4AF37]/20"></div>
            </div>
        </motion.div>
    );
}
