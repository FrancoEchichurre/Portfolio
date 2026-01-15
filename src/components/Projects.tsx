import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "GYM ZONE",
        desc: "Tu cuerpo es tu templo. Sitio institucional de alto rendimiento.",
        stack: ["React", "Node", "Mongo"],
        tag: "WEB SITE",
        theme: "poster--gym",
        imageColor: "#ff3333"
    },
    {
        title: "HOLISTICOURSE",
        desc: "Expande tu mente. Plataforma educativa para el alma.",
        stack: ["React", "Express", "Mongo"],
        tag: "EDUCACIÓN",
        theme: "poster--zen",
        imageColor: "#9933ff"
    },
    {
        title: "URBAN KICKS",
        desc: "Pisando fuerte. E-commerce de cultura sneaker.",
        stack: ["MERN Stack", "Tailwind"],
        tag: "E-COMMERCE",
        theme: "poster--sneaker",
        imageColor: "#ffcc00"
    }
];

export const Projects = () => {
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
                    >
                        {/* Tape corners */}
                        <div className="tape tape--tl"></div>
                        <div className="tape tape--tr"></div>
                        <div className="tape tape--bl"></div>
                        <div className="tape tape--br"></div>

                        <div className="poster__header">
                            <span className="poster__tag">{project.tag}</span>
                        </div>

                        <div className="poster__image-area" style={{ backgroundColor: project.imageColor }}>
                            <div className="poster__image-placeholder">
                                SCREENSHOT
                            </div>
                        </div>

                        <div className="poster__content">
                            <h3 className="poster__title">{project.title}</h3>
                            <p className="poster__desc">{project.desc}</p>

                            <div className="poster__stack">
                                {project.stack.map(tech => (
                                    <span key={tech} className="spray-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="poster__actions">
                                <button className="btn-spray btn-spray--black">
                                    <ExternalLink size={14} /> DEMO
                                </button>
                                <button className="btn-spray btn-spray--outline">
                                    <Github size={14} /> CODE
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
