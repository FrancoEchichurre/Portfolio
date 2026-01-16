import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Dumbbell,
    Sparkles,
    ShoppingBag
} from 'lucide-react';
import powerIcon from '../assets/icons/power.png';

import { ProjectModal } from './ProjectModal';

const projects = [
    {
        id: 1,
        title: "MOVE",
        description: "Tu cuerpo es tu templo. Sitio institucional de alto rendimiento.",
        tech: ["React", "Node", "Mongo"],
        color: "#ff3333",
        bg: "#1a1a1a",
        type: "Fitness App",
        icon: Dumbbell,
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
        icon: Sparkles,
        theme: "poster--zen",
        tag: "EDUCACIÓN",
        demoUrl: "https://www.rossanaaltez.com/",
        screenshot: "/images/projects/rossana-full.png"
    },
    {
        id: 3,
        title: "Victor Store",
        description: "Pisando fuerte. E-commerce de cultura sneaker.",
        tech: ["MERN Stack", "Tailwind"],
        color: "#ffcc00",
        bg: "#0a0a0a",
        type: "E-Commerce",
        icon: ShoppingBag,
        theme: "poster--sneaker",
        tag: "E-COMMERCE",
        demoUrl: "https://victor-store-two.vercel.app/",
        screenshot: "/images/projects/victor-full.png"
    }
];


export const Hero = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredApp, setHoveredApp] = useState<number | null>(null);
    const [isTabletOn, setIsTabletOn] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsTabletOn(false);
        }

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const openProject = (project: typeof projects[0]) => {
        console.log("CLIC EN PROYECTO:", project.title);
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section className="hero" id="home">
            <div className="hero__wall-texture"></div>
            <div className="hero__overlay"></div>

            {/* Decorative Paint Splatters - Distributed to avoid clustering */}
            <img src="/src/assets/icons/pintura1.png" alt="" className="paint-splatter paint-splatter--1" />
            <img src="/src/assets/icons/pintura3.png" alt="" className="paint-splatter paint-splatter--2" />
            <img src="/src/assets/icons/pintura5.png" alt="" className="paint-splatter paint-splatter--3" />
            <img src="/src/assets/icons/pintura2.png" alt="" className="paint-splatter paint-splatter--4" />
            <img src="/src/assets/icons/pintura1.png" alt="" className="paint-splatter paint-splatter--5" />
            <img src="/src/assets/icons/pintura4.png" alt="" className="paint-splatter paint-splatter--6" />
            <img src="/src/assets/icons/pintura6.png" alt="" className="paint-splatter paint-splatter--7" />
            <img src="/src/assets/icons/pintura1.png" alt="" className="paint-splatter paint-splatter--8" />
            <img src="/src/assets/icons/pintura4.png" alt="" className="paint-splatter paint-splatter--9" />
            <img src="/src/assets/icons/pintura3.png" alt="" className="paint-splatter paint-splatter--10" />
            <img src="/src/assets/icons/pintura7.png" alt="" className="paint-splatter paint-splatter--11" />
            <img src="/src/assets/icons/pintura2.png" alt="" className="paint-splatter paint-splatter--12" />

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

                {/* RIGHT COLUMN: Interactive Tablet */}
                <motion.div
                    className="hero__right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="tablet-mockup">
                        <div className="tablet-frame">
                            <div className="tablet-camera"></div>

                            {/* Tablet Home Screen */}
                            <div className={`tablet-screen home-screen ${!isTabletOn ? 'tablet-screen--off' : ''}`}>
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
                                <div className="status-bar">
                                    <span>{formatTime(currentTime)}</span>
                                    <div className="status-icons">
                                        <span>5G</span>
                                        <span>100%</span>
                                    </div>
                                </div>


                                <div className="tablet-home">
                                        <div className="app-grid">
                                            {projects.map((project, index) => (
                                                <motion.div
                                                    key={`${project.id}-${index}`}
                                                    className="app-icon-wrapper"
                                                    whileHover={{ scale: 1.1, y: -5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => {
                                                        console.log(`Pulsado proyecto ${index + 1}: ${project.title}`);
                                                        openProject(project);
                                                    }}
                                                    onMouseEnter={() => setHoveredApp(project.id)}
                                                    onMouseLeave={() => setHoveredApp(null)}
                                                    data-project={project.title}
                                                >
                                                    <div
                                                        className="app-icon"
                                                        style={{
                                                            backgroundColor: project.color,
                                                            boxShadow: hoveredApp === project.id ? `0 0 15px ${project.color}` : 'none'
                                                        }}
                                                    >
                                                        <project.icon size={32} color="white" />
                                                    </div>
                                                    <span className="app-name">{project.title}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                </div>

                                <div className="tablet-dock">
                                    <div className="dock-icon" style={{ background: '#333' }}></div>
                                    <div className="dock-icon" style={{ background: '#444' }}></div>
                                    <div className="dock-icon" style={{ background: '#555' }}></div>
                                    <div className="dock-icon" style={{ background: '#666' }}></div>
                                </div>

                                <div className="tablet-reflection"></div>
                            </div>

                            <div className="tablet-home-btn"></div>
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
