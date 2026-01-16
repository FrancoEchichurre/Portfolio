import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Dumbbell, Sparkles, ShoppingBag } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const projects = [
    {
        id: 1,
        title: "MOVE",
        description: "Tu cuerpo es tu templo. Sitio institucional de alto rendimiento.",
        tech: ["React", "Node", "Mongo"],
        tag: "WEB SITE",
        theme: "poster--gym",
        color: "#ff3333",
        demoUrl: "https://msc-gym.vercel.app/",
        bg: "#1a1a1a",
        type: "Fitness App",
        icon: Dumbbell,
        screenshot: "/images/projects/move-full.png"
    },
    {
        id: 2,
        title: "ROSSANA ALTEZ",
        description: "Expande tu mente. Plataforma educativa para el alma.",
        tech: ["React", "Express", "Mongo"],
        tag: "EDUCACIÓN",
        theme: "poster--zen",
        color: "#9933ff",
        demoUrl: "https://www.rossanaaltez.com/",
        bg: "#fdfbf7",
        type: "Wellness Platform",
        icon: Sparkles,
        screenshot: "/images/projects/rossana-full.png"
    },
    {
        id: 3,
        title: "VICTOR STORE",
        description: "Pisando fuerte. E-commerce de cultura sneaker.",
        tech: ["MERN Stack", "Tailwind"],
        tag: "E-COMMERCE",
        theme: "poster--sneaker",
        color: "#ffcc00",
        demoUrl: "https://victor-store-two.vercel.app/",
        bg: "#0a0a0a",
        type: "E-Commerce",
        icon: ShoppingBag,
        screenshot: "/images/projects/victor-full.png"
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGoLive = (e: React.MouseEvent, url?: string) => {
        e.stopPropagation();
        if (url) window.open(url, '_blank');
    };

    const openProject = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <h2 className="section-title text-center">
                    MIS <span className="text-spray-yellow">OBRAS</span>
                </h2>
                <div className="wall-graffiti">STREET GALLERY</div>
            </div>

            <div className="posters-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10, scale: 1.02, rotateZ: index % 2 === 0 ? 1 : -1 }}
                        className={`poster ${project.theme}`}
                        onClick={() => openProject(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* Tape corners */}
                        <div className="tape tape--tl"></div>
                        <div className="tape tape--tr"></div>
                        <div className="tape tape--bl"></div>
                        <div className="tape tape--br"></div>

                        <div className="poster__header">
                            <span className="poster__tag">{project.tag}</span>
                        </div>

                        <div className="poster__image-area" style={{ backgroundColor: project.color }}>
                            <div className="poster__image-placeholder">
                                SCREENSHOT
                            </div>
                        </div>

                        <div className="poster__content">
                            <h3 className="poster__title">{project.title}</h3>
                            <p className="poster__desc">{project.description}</p>

                            <div className="poster__stack">
                                {project.tech.map(tech => (
                                    <span key={tech} className="spray-tag">{tech}</span>
                                ))}
                            </div>


                            <div className="poster__actions">
                                <button
                                    className="btn-spray btn-spray--black"
                                    onClick={(e) => handleGoLive(e, project.demoUrl)}
                                >
                                    <ExternalLink size={14} /> DEMO
                                </button>
                                <button
                                    className="btn-spray btn-spray--outline"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={14} /> CODE
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />
        </section>
    );
};
