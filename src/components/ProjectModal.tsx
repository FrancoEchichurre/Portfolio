import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, Monitor } from 'lucide-react';
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
    githubUrl?: string;
    screenshot?: string;
    icon?: any;
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

    return createPortal(
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
                        className="project-modal"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{ borderColor: project.color, boxShadow: `0 0 30px ${project.color}20` }}
                    >
                        {/* Header */}
                        <div className="project-modal__header">
                            <div className="project-modal__title-group">
                                <h2 className="project-modal__title">{project.title}</h2>
                                <span className="project-modal__type" style={{ color: project.color }}>{project.type}</span>
                            </div>
                            <button className="project-modal__close" onClick={onClose}>
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Grid */}
                        <div className="project-modal__body">
                            {/* Main Preview (Iframe) */}
                            <div className="project-modal__preview">
                                {project.demoUrl ? (
                                    <div className="browser-frame">
                                        <div className="browser-header">
                                            <div className="dots">
                                                <span></span><span></span><span></span>
                                            </div>
                                            <div className="address-bar">{project.demoUrl}</div>
                                        </div>
                                        <iframe
                                            src={project.demoUrl}
                                            title={project.title}
                                            className="project-iframe"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="placeholder-preview">
                                        <Monitor size={48} />
                                        <span>Vista previa no disponible</span>
                                    </div>
                                )}
                            </div>

                            {/* Info & Tech */}
                            <div className="project-modal__info">
                                <p className="project-modal__description">{project.description}</p>

                                <div className="project-modal__stack">
                                    <h4 className="stack-title">TECNOLOGÍAS</h4>
                                    <div className="stack-tags">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="tech-tag"
                                                style={{
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    backgroundColor: 'rgba(255,255,255,0.05)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-modal__actions">
                                    <button
                                        className="btn-modern btn-modern--primary"
                                        onClick={handleGoLive}
                                        style={{ backgroundColor: project.color, color: 'black', boxShadow: `0 0 15px ${project.color}40` }}
                                    >
                                        <ExternalLink size={18} /> VER DEMO
                                    </button>
                                    <button
                                        className="btn-modern btn-modern--secondary"
                                        onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                                        disabled={!project.githubUrl}
                                        style={{ opacity: project.githubUrl ? 1 : 0.5, cursor: project.githubUrl ? 'pointer' : 'not-allowed' }}
                                    >
                                        <Github size={18} /> CÓDIGO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
