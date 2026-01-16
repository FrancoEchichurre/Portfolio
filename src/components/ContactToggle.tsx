import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactToggleProps {
    isOpen: boolean;
    toggle: () => void;
}

export const ContactToggle = ({ isOpen, toggle }: ContactToggleProps) => {
    return (
        <motion.button
            className={`contact-toggle ${isOpen ? 'contact-toggle--open' : ''}`}
            onClick={toggle}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={isOpen ? "Cerrar contacto" : "Abrir contacto"}
        >
            <div className="contact-toggle__tape"></div>
            <div className="contact-toggle__content">
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <span className="contact-toggle__text">CONTÁCTAME</span>
                )}
            </div>
        </motion.button>
    );
};