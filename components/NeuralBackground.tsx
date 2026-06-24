"use client";

import React, { useEffect, useRef } from 'react';

interface Props {
    accentColor?: string;
}

const NeuralBackground: React.FC<Props> = ({ accentColor = 'rgba(0, 163, 255, 0.2)' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];

            // Reduce particle count on mobile for performance
            const count = window.innerWidth < 768 ? 50 : 110;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    size: Math.random() * 1.5 + 0.5
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Use accent color for strokes and fills
            ctx.strokeStyle = accentColor;
            ctx.fillStyle = accentColor;
            ctx.lineWidth = 0.7;

            const connectionDist = window.innerWidth < 768 ? 130 : 170;

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < connectionDist) {
                        ctx.globalAlpha = (1 - dist / connectionDist) * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', init);
        init();
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [accentColor]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]"
            id="neural-canvas"
        />
    );
};

export default NeuralBackground;
