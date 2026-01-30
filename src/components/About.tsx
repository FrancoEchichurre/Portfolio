import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import tcmLogo from '../assets/projects/TCM.png';
import rossanaLogo from '../assets/projects/logo-new.png';
import strideHubLogo from '../assets/projects/stridehub-logo.png';
import certificateImg from '../assets/profile/Certificado-Full-Stack-Engineer-EducaciónIT.png';

const skills = [
    { name: 'React', color: '#3366ff', rotate: 0 },
    { name: 'Next.js', color: '#ffffff', rotate: 0, text: 'black' },
    { name: 'Node.js', color: '#33ff33', rotate: 0 },
    { name: 'MongoDB', color: '#00af50', rotate: 0 },
    { name: 'Express', color: '#cccccc', rotate: 0, text: 'black' },
    { name: 'Tailwind', color: '#38bdf8', rotate: 0 },
    { name: 'TypeScript', color: '#3178c6', rotate: 0 },
    { name: 'SCSS', color: '#cd6799', rotate: 0 },
    { name: 'Git', color: '#f05032', rotate: 0 }
];

const projects = [
    {
        id: 1,
        title: "Training Club Movement",
        description: "Plataforma web oficial para Training Club Movement. Un sitio institucional de alto impacto visual diseñado para reflejar la energía y profesionalismo del gimnasio. Cuenta con secciones interactivas de disciplinas, galería de instalaciones y contacto directo. Optimizada para ofrecer una experiencia de usuario fluida y motivadora, conectando a la comunidad fitness con sus objetivos.",
        tech: ["React", "Node", "Mongo"],
        color: "#ff3333",
        bg: "#1a1a1a",
        type: "Fitness App",
        logo: tcmLogo,
        theme: "poster--gym",
        tag: "WEB SITE",
        demoUrl: "https://tcm-gym.vercel.app/",
        githubUrl: "https://github.com/FrancoEchichurre/TCM-GYM",
        screenshot: "/images/projects/move-full.png"
    },
    {
        id: 2,
        title: "Rossana Altez: Coach & Cursos Holisticos",
        description: "Portal educativo enfocado en el desarrollo personal y terapias holísticas. Diseñado para ofrecer una experiencia de aprendizaje inmersiva y serena, donde los estudiantes pueden acceder a cursos on-demand, reservar sesiones de coaching y explorar recursos exclusivos. La plataforma destaca por su estética minimalista y su facilidad de navegación, creando el ambiente perfecto para el crecimiento interior.",
        tech: ["React", "Express", "Mongo"],
        color: "#9933ff",
        bg: "#fdfbf7",
        type: "Wellness Platform",
        logo: rossanaLogo,
        theme: "poster--zen",
        tag: "EDUCACIÓN",
        demoUrl: "https://www.rossanaaltez.com/",
        githubUrl: "https://github.com/FrancoEchichurre/Rossana-Altez",
        screenshot: "/images/projects/rossana-full.png"
    },
    {
        id: 3,
        title: "Stride Hub",
        description: "E-commerce de vanguardia dedicado a la cultura sneaker. Desarrollado con el stack MERN, ofrece una experiencia de compra fluida y segura. Cuenta con un catálogo dinámico con filtrado avanzado, gestión de carrito en tiempo real, autenticación segura y un diseño UI/UX moderno que resalta la exclusividad de cada producto. La fusión perfecta entre estilo urbano y tecnología robusta.",
        tech: ["MERN Stack", "Tailwind"],
        color: "#ffcc00",
        bg: "#0a0a0a",
        type: "E-Commerce",
        logo: strideHubLogo,
        theme: "poster--sneaker",
        tag: "E-COMMERCE",
        demoUrl: "https://stridehub-two.vercel.app/",
        githubUrl: "https://github.com/FrancoEchichurre/stridehub",
        screenshot: "/images/projects/stride-full.png"
    }
];

export const About = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        if (showCertificate) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            console.log("SCROLL UNLOCKED");
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showCertificate]);

    // Changing strategy: I'll update the imports first, then the logic.
    // Wait, I can do it in one go if I'm careful, but better safe.
    // Let's check imports.


    return (
        <section className="about-section" id="about">
            <div className="about-section__glow"></div>

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="section-title text-center"
                >
                    SOBRE <span className="text-spray-red">MÍ</span>
                </motion.h2>

                <div className="about-content">
                    {/* Left Column: Profile */}
                    <motion.div
                        className="about-profile"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Interactive Certificate Badge (Outside Card) */}
                        <motion.div
                            className="certificate-badge-container"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowCertificate(true)}
                        >
                            <img src={certificateImg} alt="Certificate" />
                        </motion.div>

                        <div className="about-bio glass-card">
                            <div className="badge-freelancer">Soy FREELANCER</div>
                            <p>
                                Hola!! Soy Franco, desarrollador Software Full Stack.
                                Me dedico a construir aplicaciones web que resuelvan problemas reales.
                                Trabajo principalmente con React, Node.js y MongoDB pero siempre abierto a nuevos Frameworks y tecnologías.
                            </p>
                        </div>
                    </motion.div>

                    {/* Certificate Modal Overlay */}
                    {/* Certificate Modal Overlay - Portalled to Body */}
                    {createPortal(
                        <AnimatePresence>
                            {showCertificate && (
                                <motion.div
                                    className="certificate-modal-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setShowCertificate(false)}
                                >
                                    <motion.div
                                        className="certificate-modal-content"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="close-button"
                                            onClick={() => setShowCertificate(false)}
                                        >
                                            ×
                                        </button>
                                        <img src={certificateImg} alt="Full Certificate" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                    )}

                    {/* Right Column: Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="skills-wall"
                    >
                        <h3 className="skills-title">MY STACK</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05, translateY: -5 }}
                                    className="skill-card"
                                    style={{
                                        borderColor: skill.color,
                                        boxShadow: `0 0 10px ${skill.color}20`
                                    }}
                                >
                                    <span style={{ color: skill.color }}>{skill.name}</span>
                                </motion.div>
                            ))}

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="skill-card skill-card--wip"
                            >
                                <span className="wip-text">LARAVEL</span>
                                <span className="wip-badge">Loading...</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="projects-section"
                >
                    <h3 className="projects-title">MIS PROYECTOS</h3>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card glass-card"
                                whileHover={{ scale: 1.05, translateY: -5 }}
                                onClick={() => setSelectedProject(project)}
                                style={{
                                    borderColor: project.color,
                                    boxShadow: `0 0 15px ${project.color}30`
                                }}
                            >
                                <div className="project-card__logo">
                                    <img src={project.logo} alt={project.title} />
                                </div>
                                <div className="project-card__content">
                                    <h4 className="project-card__title">{project.title}</h4>
                                    <p className="project-card__type">{project.type}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};