import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import cvFile from '../assets/cv/cv.pdf'; // Assuming this path exists or user will provide it

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="cv-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="cv-modal"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="cv-modal__close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="cv-modal__content">
                            <div className="cv-modal__icon">
                                <FileText size={48} />
                            </div>
                            <h2 className="cv-modal__title">Mi Curriculum</h2>
                            <p className="cv-modal__text">
                                Puedes ver mi experiencia detallada o descargar el PDF para guardarlo.
                            </p>

                            <div className="cv-modal__actions">
                                <a
                                    href={cvFile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-modern btn-modern--secondary"
                                >
                                    VER ONLINE
                                </a>
                                <a
                                    href={cvFile}
                                    download="Franco_CV.pdf"
                                    className="btn-modern btn-modern--primary"
                                >
                                    <Download size={20} />
                                    DESCARGAR PDF
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
