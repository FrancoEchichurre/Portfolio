import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'CV_Franco_Echichurre.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                        className="cv-modal"
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

                        {/* Download Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="btn-download-cv"
                            onClick={handleDownload}
                        >
                            <div className="btn-download-cv__sticker">
                                <Download size={18} />
                                <span>DESCARGAR</span>
                                <div className="btn-download-cv__tape"></div>
                            </div>
                        </motion.button>

                        {/* PDF Viewer */}
                        <div className="cv-viewer">
                            <iframe
                                src="/cv.pdf"
                                title="CV Franco Echichurre"
                                className="cv-iframe"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
