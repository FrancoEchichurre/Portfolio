import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import powerIcon from '../assets/icons/power.png';
import tcmLogo from '../assets/projects/TCM.png';
import rossanaLogo from '../assets/projects/logo-new.png';
import strideHubLogo from '../assets/projects/stridehub-logo.png';
import phoneFrame from '../assets/profile/marco-telefono.png';

import { ProjectModal } from './ProjectModal';

const projects = [
    {
        id: 1,
        title: "Training Club Movement",
        description: "Tu cuerpo es tu templo. Sitio institucional de alto rendimiento.",
        tech: ["React", "Node", "Mongo"],
        color: "#ff3333",
        bg: "#1a1a1a",
        type: "Fitness App",
        logo: tcmLogo,
        theme: "poster--gym",
        tag: "WEB SITE",
        demoUrl: "https://msc-gym.vercel.app/",
        screenshot: "/images/projects/move-full.png"
    },
    {
        id: 2,
        title: "Rossana Altez: Coach & Cursos Holisticos",
        description: "Expande tu mente. Plataforma educativa para el alma.",
        tech: ["React", "Express", "Mongo"],
        color: "#9933ff",
        bg: "#fdfbf7",
        type: "Wellness Platform",
        logo: rossanaLogo,
        theme: "poster--zen",
        tag: "EDUCACIÓN",
        demoUrl: "https://www.rossanaaltez.com/",
        screenshot: "/images/projects/rossana-full.png"
    },
    {
        id: 3,
        title: "Stride Hub",
        description: "Pisando fuerte. E-commerce de cultura sneaker.",
        tech: ["MERN Stack", "Tailwind"],
        color: "#ffcc00",
        bg: "#0a0a0a",
        type: "E-Commerce",
        logo: strideHubLogo,
        theme: "poster--sneaker",
        tag: "E-COMMERCE",
        demoUrl: "https://stridehub-two.vercel.app/",
        screenshot: "/images/projects/victor-full.png"
    }
];


export const Hero = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTabletOn, setIsTabletOn] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsTabletOn(false);
        }

        // Update time every minute
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    // Format time to HH:MM
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };



    return (
        <section className="hero" id="home">
            <div className="hero__glow hero__glow--1"></div>
            <div className="hero__glow hero__glow--2"></div>
            <div className="hero__grid-bg"></div>

            <div className="hero__container">
                {/* LEFT COLUMN: Info & CTAs */}
                <div className="hero__left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero__title-wrapper"
                    >
                        <h1 className="hero__title">
                            <span className="hero__name-line">FRANCO</span>
                            <span className="hero__name-line text-spray-blue">ECHICHURRE</span>
                        </h1>
                        <div className="hero__subtitle-badge">
                            FULL STACK DEVELOPER
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="hero__tagline"
                    >
                        Transformando ideas en código funcional.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="hero__stack"
                    >
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Interactive Phone */}
                <motion.div
                    className="hero__right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="phone-mockup">
                        {/* Phone Frame Image */}
                        <img
                            src={phoneFrame}
                            alt="Phone Frame"
                            className="phone-frame-image"
                        />

                        {/* Phone Screen Content */}
                        <div className={`phone-screen ${!isTabletOn ? 'phone-screen--off' : ''}`}>
                            {!isTabletOn && (
                                <div className="power-overlay">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsTabletOn(true)}
                                        className="btn-power"
                                    >
                                        <img src={powerIcon} alt="Power On" className="btn-power__icon" />
                                    </motion.button>
                                </div>
                            )}

                            {/* Status Bar */}
                            <div className="iphone-status-bar">
                                <div className="status-bar__left">
                                    <span className="status-time">{formatTime(currentTime)}</span>
                                </div>
                                <div className="status-bar__right">
                                    <div className="status-icons">
                                        {/* Battery Icon */}
                                        <svg className="status-icon battery" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                            <rect x="0.5" y="1.5" width="20" height="9" rx="2" stroke="currentColor" strokeWidth="1" />
                                            <rect x="2" y="3" width="17" height="6" rx="1" fill="currentColor" />
                                            <rect x="21.5" y="4" width="2.5" height="4" rx="1" fill="currentColor" />
                                        </svg>

                                        <span className="battery-percent">100%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Home Screen */}
                            <div className="iphone-home">
                                <div className="iphone-app-grid">
                                    {projects.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            className="iphone-app-wrapper"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div
                                                className="iphone-app-icon"
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setIsModalOpen(true);
                                                }}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {project.logo && (
                                                    <img
                                                        src={project.logo}
                                                        alt={project.title}
                                                        className="iphone-app-logo"
                                                    />
                                                )}
                                            </div>
                                            <span className="iphone-app-name">{project.title}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Dock */}
                            <div className="iphone-dock">
                                <div className="iphone-dock-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
                                <div className="iphone-dock-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
                                <div className="iphone-dock-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}></div>
                                <div className="iphone-dock-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />
        </section>
    );
};