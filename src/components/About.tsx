import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import tcmLogo from '../assets/projects/TCM.png';
import rossanaLogo from '../assets/projects/logo-new.png';
import strideHubLogo from '../assets/projects/stridehub-logo.png';

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
        demoUrl: "https://stridehub.vercel.app/",
        screenshot: "/images/projects/stride-full.png"
    }
];

export const About = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                        <div className="about-bio glass-card">
                            <div className="badge-freelancer">SOY FREELANCER</div>
                            <p>
                                Hola!! Soy Franco, desarrollador Front-End y Back-End.
                                Me dedico a construir aplicaciones web que resuelven problemas reales.
                                Trabajo principalmente con React, Node.js y MongoDB, siempre abierto a nuevas tecnologías.
                            </p>
                        </div>
                    </motion.div>

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