import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ContactSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactSidebar = ({ isOpen, onClose }: ContactSidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            // Focus trap - very basic version
            const focusableElements = sidebarRef.current?.querySelectorAll('button, [href], input, textarea');
            if (focusableElements && focusableElements.length > 0) {
                (focusableElements[0] as HTMLElement).focus();
            }
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const handleWhatsApp = () => {
        // Reemplaza con tu número de WhatsApp (formato internacional sin +)
        const phoneNumber = '59895063978'; // Ejemplo: Uruguay
        const message = encodeURIComponent('¡Hola Franco! Vi tu portfolio y me gustaría consultarte por un proyecto.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="contact-sidebar-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Sidebar */}
                    <motion.div
                        ref={sidebarRef}
                        className="contact-sidebar"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="contact-sidebar__header">
                            <h2 className="contact-sidebar__title">HAGAMOS ALGO <span className="text-spray">JUNTOS</span></h2>
                        </div>


                        <div className="contact-sidebar__content">
                            <form className="contact-sidebar__form" onClick={(e) => e.stopPropagation()}>
                                <div className="form-sticker-group">
                                    <label>TU NOMBRE *</label>
                                    <input type="text" placeholder="GHOST_WRITER" />
                                </div>
                                <div className="form-sticker-group">
                                    <label>TU EMAIL *</label>
                                    <input type="email" placeholder="contact@zone.com" />
                                </div>
                                <div className="form-sticker-group">
                                    <label>MENSAJE *</label>
                                    <textarea rows={6} placeholder="¿Qué tienes en mente?"></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-spray-send"
                                >
                                    <span>ENVIAR</span>
                                    <Send size={20} />
                                </motion.button>
                            </form>

                            {/* Botón de WhatsApp */}
                            <motion.button
                                onClick={handleWhatsApp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-whatsapp"
                            >
                                <MessageCircle size={32} />
                                <span>WHATSAPP</span>
                            </motion.button>

                            <div className="contact-sidebar__socials">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Github size={20} /> <span>GITHUB</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Linkedin size={20} /> <span>LINKEDIN</span>
                                </a>
                                <a href="mailto:franco@example.com" className="social-link">
                                    <Mail size={20} /> <span>EMAIL</span>
                                </a>
                            </div>
                        </div>

                        {/* Urban Decor */}
                        <div className="contact-sidebar__tape contact-sidebar__tape--1"></div>
                        <div className="contact-sidebar__tape contact-sidebar__tape--2"></div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};