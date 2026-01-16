import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
}

const sprayColors = ['#ff3333', '#3366ff', '#33ff33', '#ffcc00', '#ff6600'];

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if desktop
    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Track mouse position with throttle
    useEffect(() => {
        if (!isDesktop) return;

        let lastTime = 0;
        const throttleDelay = 30; // ms

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastTime < throttleDelay) return;
            lastTime = now;

            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add new particle
            const newParticle: Particle = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY,
                color: sprayColors[Math.floor(Math.random() * sprayColors.length)],
                size: Math.random() * 5 + 3 // 3-8px
            };

            setParticles(prev => {
                const updated = [...prev, newParticle];
                // Keep only last 15 particles
                return updated.slice(-15);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop]);

    // Clean up old particles
    useEffect(() => {
        if (particles.length === 0) return;

        const timer = setTimeout(() => {
            setParticles(prev => prev.slice(1));
        }, 800);

        return () => clearTimeout(timer);
    }, [particles]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Custom Cursor */}
            <div
                className="custom-cursor"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            >
                <div className="cursor-crosshair"></div>
            </div>

            {/* Paint Trail Particles */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="paint-particle"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            backgroundColor: particle.color,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
};
