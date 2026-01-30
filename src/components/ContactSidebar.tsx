import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, X, Copy, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ContactSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactSidebar = ({ isOpen, onClose }: ContactSidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [copied, setCopied] = useState(false);

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

    const handleSubmitWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();

        // Reemplaza con tu número de WhatsApp (formato internacional sin +)
        const phoneNumber = '59895063978';

        // Construir el mensaje con los datos del formulario
        const message = encodeURIComponent(
            `🔥 *NUEVO PROYECTO EN MENTE* \n\n` +
            `Hola Franco, vi tu web y quiero que hagamos algo juntos. \n\n` +
            `👤 *Nombre:* ${formData.name}\n` +
            `✉️ *Correo:* ${formData.email}\n\n` +
            `📝 *Mensaje:* \n${formData.message}\n\n` +
            `---`
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

        // Limpiar formulario después de enviar
        setFormData({ name: '', email: '', message: '' });
    };

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText('francoechichurrez@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
                        onClick={() => setShowEmailPopup(false)} // Close popup on background click
                    >
                        <div className="contact-sidebar__header">
                            <h2 className="contact-sidebar__title">HAGAMOS ALGO <span className="text-highlight">JUNTOS</span></h2>
                            <button className="contact-sidebar__close" onClick={onClose}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="contact-sidebar__content">
                            <form className="contact-sidebar__form" onSubmit={handleSubmitWhatsApp} onClick={(e) => e.stopPropagation()}>
                                <div className="contact-input-group">
                                    <label>TU NOMBRE</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="contact-input-group">
                                    <label>TU EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="mail@correo.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="contact-input-group">
                                    <label>MENSAJE</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Cuéntame que tenes en mente..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-whatsapp-modern"
                                >
                                    <MessageCircle size={20} />
                                    <span>ENVIAR A WHATSAPP</span>
                                </motion.button>
                            </form>

                            <div className="contact-sidebar__socials">
                                <a href="https://github.com/FrancoEchichurre" target="_blank" rel="noopener noreferrer" className="social-pill">
                                    <Github size={18} /> <span>GITHUB</span>
                                </a>

                                {/* Email Container */}
                                <div className="email-container" onClick={(e) => e.stopPropagation()}>
                                    <AnimatePresence>
                                        {showEmailPopup && (
                                            <motion.div
                                                className="email-popup"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                            >
                                                <span className="email-text">francoechichurrez@gmail.com</span>
                                                <button className="btn-copy" onClick={handleCopyEmail}>
                                                    {copied ? <Check size={16} color="#00ff88" /> : <Copy size={16} />}
                                                </button>
                                                {copied && <span className="copy-feedback">¡Copiado!</span>}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        className={`social-pill ${showEmailPopup ? 'active' : ''}`}
                                        onClick={() => setShowEmailPopup(!showEmailPopup)}
                                    >
                                        <Mail size={18} /> <span>EMAIL</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};