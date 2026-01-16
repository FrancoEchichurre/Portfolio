import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Eye } from 'lucide-react';
import { useEffect } from 'react';


interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    color: string;
    bg: string;
    type: string;
    theme: string;
    tag: string;
    demoUrl?: string;
    screenshot?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Close modal on ESC key
    useEffect(() => {

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            return () => window.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen, onClose]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const handleGoLive = () => {
        if (project.demoUrl) {
            window.open(project.demoUrl, '_blank');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="project-modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className={`poster poster-modal ${project.theme}`}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Close Button */}
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="tape tape--tl"></div>
                        <div className="tape tape--tr"></div>
                        <div className="tape tape--bl"></div>
                        <div className="tape tape--br"></div>

                        <div className="poster__header">
                            <span className="poster__tag">{project.tag}</span>
                        </div>

                        {/* Interactive Project Area (Iframe) */}
                        <div className="poster__image-area poster__image-area--interactive">
                            {project.demoUrl ? (
                                <iframe
                                    src={project.demoUrl}
                                    title={project.title}
                                    className="project-iframe"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="poster__image-placeholder">
                                    VISTA PREVIA NO DISPONIBLE
                                </div>
                            )}

                            {/* Floating sticker to open in new tab */}
                            {project.demoUrl && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="btn-go-live"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleGoLive();
                                    }}
                                >
                                    <div className="btn-go-live__sticker">
                                        <Eye size={18} />
                                        <span>FULL SCREEN</span>
                                        <div className="btn-go-live__tape"></div>
                                    </div>
                                </motion.button>
                            )}
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
                                <button className="btn-spray btn-spray--black" onClick={handleGoLive}>
                                    <ExternalLink size={14} /> DEMO
                                </button>
                                <button className="btn-spray btn-spray--outline">
                                    <Github size={14} /> CODE
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
