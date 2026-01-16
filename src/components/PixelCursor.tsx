import { useState, useEffect } from 'react';

export const PixelCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isGlitching, setIsGlitching] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
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

    // Track mouse position
    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop]);

    // Random glitch effect
    useEffect(() => {
        if (!isDesktop) return;

        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 150);
        }, isHovering ? 1000 : 2500); // More frequent on hover

        return () => clearInterval(glitchInterval);
    }, [isDesktop, isHovering]);

    // Detect hover on interactive elements
    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Main Pixel Cursor */}
            <div
                className={`pixel-cursor ${isGlitching ? 'glitching' : ''} ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            >
                <div className="pixel-cursor-main"></div>
            </div>

            {/* Glitch Duplicates */}
            {isGlitching && (
                <>
                    <div
                        className="pixel-cursor-glitch pixel-cursor-glitch--red"
                        style={{
                            left: `${mousePosition.x - 5}px`,
                            top: `${mousePosition.y - 3}px`,
                        }}
                    >
                        <div className="pixel-cursor-main"></div>
                    </div>
                    <div
                        className="pixel-cursor-glitch pixel-cursor-glitch--blue"
                        style={{
                            left: `${mousePosition.x + 5}px`,
                            top: `${mousePosition.y + 3}px`,
                        }}
                    >
                        <div className="pixel-cursor-main"></div>
                    </div>
                    <div
                        className="pixel-cursor-glitch pixel-cursor-glitch--green"
                        style={{
                            left: `${mousePosition.x + 3}px`,
                            top: `${mousePosition.y - 5}px`,
                        }}
                    >
                        <div className="pixel-cursor-main"></div>
                    </div>
                </>
            )}
        </>
    );
};
