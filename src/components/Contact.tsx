import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            {/* Decorative Paint Splatters - Varied distribution */}
            <img src="/src/assets/icons/pintura3.png" alt="" className="paint-splatter paint-splatter--contact-1" />
            <img src="/src/assets/icons/pintura7.png" alt="" className="paint-splatter paint-splatter--contact-2" />
            <img src="/src/assets/icons/pintura1.png" alt="" className="paint-splatter paint-splatter--contact-3" />
            <img src="/src/assets/icons/pintura5.png" alt="" className="paint-splatter paint-splatter--contact-4" />
            <img src="/src/assets/icons/pintura2.png" alt="" className="paint-splatter paint-splatter--contact-5" />
            <img src="/src/assets/icons/pintura6.png" alt="" className="paint-splatter paint-splatter--contact-6" />

            <div className="section_header">
                <h2 className="section-title text-center text-white">
                    HIT ME <span className="text-spray-blue">UP</span>
                </h2>
                <div className="graffiti-arrow"></div>
            </div>

            <div className="contact-container">
                <div className="wall-form">
                    <form className="form-group">
                        <div className="input-row">
                            <input
                                type="text"
                                placeholder="TU NOMBRE (TAG)"
                                className="input-sticker"
                            />
                            <input
                                type="email"
                                placeholder="TU EMAIL"
                                className="input-sticker"
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="TU MENSAJE..."
                            className="input-sticker textarea-sticker"
                        ></textarea>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-spray-can"
                        >
                            <span className="btn-text">ENVIAR MENSAJE</span>
                            <Send size={20} />
                        </motion.button>
                    </form>

                    <div className="social-cans">
                        {[
                            { icon: Github, color: 'black', label: 'GH' },
                            { icon: Linkedin, color: '#0077b5', label: 'IN' },
                            { icon: Mail, color: '#dc2626', label: '@' }
                        ].map((Item, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -10, rotate: idx % 2 === 0 ? 5 : -5 }}
                                className="social-can"
                                style={{ backgroundColor: Item.color }}
                            >
                                <div className="can-top"></div>
                                <div className="can-body">
                                    <Item.icon size={24} color="white" />
                                </div>
                                <span className="can-label">{Item.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
