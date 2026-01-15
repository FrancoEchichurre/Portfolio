import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__logo">
                <span className="tag-fe">FE</span>
            </div>

            <ul className="navbar__links">
                {['SOBRE MÍ', 'OBRAS', 'HISTORIA', 'CONTACTO'].map((item, i) => (
                    <motion.li
                        key={item}
                        whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                        className="navbar__item"
                    >
                        <a href={`#${item === 'SOBRE MÍ' ? 'about' : item === 'OBRAS' ? 'projects' : item === 'HISTORIA' ? 'experience' : 'contact'}`} className="navbar__link">
                            {item}
                        </a>
                    </motion.li>
                ))}
            </ul>

            <div className="navbar__mobile-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};
