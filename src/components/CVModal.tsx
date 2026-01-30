import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Download } from 'lucide-react';
import cvFile from '../assets/icons/CVIT.pdf';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="cv-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
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
                            <h2 className="cv-modal__title">MI CURRICULUM</h2>

                            <div className="cv-modal__pdf-container">
                                <object
                                    data={cvFile}
                                    type="application/pdf"
                                    className="cv-modal__iframe"
                                    aria-label="CV Preview"
                                >
                                    <div className="pdf-fallback">
                                        <p>Tu navegador no puede visualizar el PDF directamente.</p>
                                    </div>
                                </object>
                            </div>

                            <a
                                href={cvFile}
                                download="Franco_CV.pdf"
                                className="btn-modern btn-modern--primary cv-modal__download-btn"
                            >
                                <Download size={20} />
                                DESCARGAR PDF
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
