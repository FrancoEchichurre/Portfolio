import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "GYM ZONE",
        desc: "Sitio web completo para gimnasio con información de servicios, planes de precios y sistema de contacto",
        stack: ["React", "Node.js", "MongoDB", "Tailwind"],
        tag: "WEB INSTITUCIONAL",
        colorClass: "card__title--neon-cyan"
    },
    {
        title: "HOLISTICOURSE",
        desc: "Plataforma web para cursos holísticos con catálogo de cursos, inscripciones y contenido educativo",
        stack: ["React", "MongoDB", "Node.js", "Express"],
        tag: "EDUCACIÓN ONLINE",
        colorClass: "card__title--neon-magenta"
    },
    {
        title: "URBAN KICKS STORE",
        desc: "E-commerce completo de calzados con carrito de compras, gestión de productos y pasarela de pagos",
        stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        tag: "E-COMMERCE",
        colorClass: "card__title--neon-yellow"
    }
];

export const Projects = () => {
    return (
        <section className="section section--brick">
            <div className="hero__overlay"></div>

            <div className="section__container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="section__header-title"
                    style={{ marginBottom: '5rem', textShadow: '0 5px 5px rgba(0,0,0,0.8)' }}
                >
                    MIS <span style={{ color: '#00ff88' }}>OBRAS</span>
                </motion.h2>

                <div className="grid grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, rotateZ: 2 }}
                            className="card"
                            style={{ margin: '1rem' }}
                        >
                            {/* Tape Effect */}
                            <div className="card__tape"></div>

                            <div className="card__preview">
                                <div className="card__preview-text">
                                    PREVIEW
                                </div>
                            </div>

                            <div className="card__category">
                                {project.tag}
                            </div>

                            <h3 className={`card__title ${project.colorClass}`}>
                                {project.title}
                            </h3>

                            <p className="card__desc">
                                {project.desc}
                            </p>

                            <div className="card__tags">
                                {project.stack.map(tech => (
                                    <span key={tech} className="badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="card__actions">
                                <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                                    <ExternalLink size={16} style={{ marginRight: '0.5rem' }} /> DEMO
                                </button>
                                <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem', backgroundColor: 'transparent', border: '1px solid white' }}>
                                    <Github size={16} style={{ marginRight: '0.5rem' }} /> CODE
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
