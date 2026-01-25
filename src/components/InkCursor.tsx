import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const InkCursor = () => {
    // Mouse position state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Spring physics for the trailing ring
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.8 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Mobile check
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouch) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleClickDown = () => setIsClicking(true);
        const handleClickUp = () => setIsClicking(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleClickDown);
        window.addEventListener('mouseup', handleClickUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleClickDown);
            window.removeEventListener('mouseup', handleClickUp);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot (Instant) */}
            <div
                className="tech-cursor-dot"
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`
                }}
            />

            {/* Trailing Ring (Spring) */}
            <motion.div
                className={`tech-cursor-ring ${isClicking ? 'clicking' : ''}`}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                    left: springX,
                    top: springY,
                }}
            />
        </>
    );
};
