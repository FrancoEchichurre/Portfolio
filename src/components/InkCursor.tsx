import { useState, useEffect } from 'react';

interface Ripple {
    id: number;
    x: number;
    y: number;
    color: string;
}

const inkColors = ['#ff3333', '#3366ff', '#33ff33', '#ffcc00', '#ff6600', '#9933ff'];

export const InkCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState<Ripple[]>([]);

    // Track mouse position
    useEffect(() => {
        // Only enable on devices that have a hover-capable pointer (mouse)
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Handle click to create ripple
    useEffect(() => {
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;

        const handleClick = (e: MouseEvent) => {
            const newRipple: Ripple = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY,
                color: inkColors[Math.floor(Math.random() * inkColors.length)]
            };

            setRipples(prev => {
                const updated = [...prev, newRipple];
                // Keep only last 6 ripples
                return updated.slice(-6);
            });

            // Remove ripple after animation completes
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 1000);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            {/* Simple cursor dot */}
            <div
                className="ink-cursor"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            />

            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="ink-ripple"
                    style={{
                        left: `${ripple.x}px`,
                        top: `${ripple.y}px`,
                        borderColor: ripple.color,
                        backgroundColor: ripple.color,
                    }}
                />
            ))}
        </>
    );
};
