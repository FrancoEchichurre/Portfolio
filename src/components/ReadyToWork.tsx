import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare } from 'lucide-react';
import { CVModal } from './CVModal';

interface ReadyToWorkProps {
    onOpenContact: () => void;
}

export const ReadyToWork = ({ onOpenContact }: ReadyToWorkProps) => {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    return (
        <section className="ready-to-work">
            <div className="ready-to-work__glow"></div>

            <div className="ready-to-work__container">
                <motion.div
                    className="ready-to-work__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="ready-to-work__title">
                        ¿LISTO PARA <span className="text-spray-blue">TRABAJAR</span> JUNTOS?
                    </h2>
                    <p className="ready-to-work__intro">
                        Soy Franco, desarrollador Full Stack especializado en crear experiencias web funcionales y escalables.
                        Actualmente abierto a nuevas oportunidades donde pueda aportar mis habilidades y seguir creciendo profesionalmente.
                    </p>
                </motion.div>

                <div className="ready-to-work__details">
                    <motion.div
                        className="ready-to-work__col glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="ready-to-work__subtitle">LO QUE OFREZCO:</h3>
                        <ul className="ready-to-work__list">
                            <li><span className="bullet">→</span> Desarrollo Full Stack (React + Node.js + MongoDB)</li>
                            <li><span className="bullet">→</span> Código limpio y mantenible</li>
                            <li><span className="bullet">→</span> Enfoque en UX y performance</li>
                            <li><span className="bullet">→</span> Pasión por aprender tecnologías nuevas</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="ready-to-work__col glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="ready-to-work__subtitle">DISPONIBLE PARA:</h3>
                        <p className="ready-to-work__availability">
                            Freelance • Full-time • Remoto • Colaboraciones
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="ready-to-work__actions"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <button onClick={() => setIsCVModalOpen(true)} className="btn-modern btn-modern--primary">
                        <FileText size={20} />
                        <span>VER CV</span>
                    </button>

                    <button onClick={onOpenContact} className="btn-modern btn-modern--secondary">
                        <MessageSquare size={20} />
                        <span>HABLEMOS</span>
                    </button>
                </motion.div>
            </div>

            {/* CV Modal */}
            <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
        </section>
    );
};
