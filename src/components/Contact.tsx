import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="section section--brick">
            <div className="section__container">
                <div style={{ maxWidth: '56rem', margin: '0 auto', backgroundColor: '#1a1a1a', padding: '3rem', border: '4px solid black', position: 'relative', boxShadow: '10px 10px 0px 0px rgba(255,255,255,0.1)' }}>
                    {/* Nails */}
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '1rem', height: '1rem', backgroundColor: '#6b7280', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '1rem', height: '1rem', backgroundColor: '#6b7280', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '1rem', height: '1rem', backgroundColor: '#6b7280', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '1rem', height: '1rem', backgroundColor: '#6b7280', borderRadius: '50%' }}></div>

                    <h2 className="section__header-title" style={{ marginBottom: '3rem' }}>
                        HIT ME <span style={{ color: '#00ff88' }}>UP</span>
                    </h2>

                    <form className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="TU NOMBRE"
                                className="input-field"
                            />
                            <input
                                type="email"
                                placeholder="TU EMAIL"
                                className="input-field"
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="TU MENSAJE..."
                            className="textarea-field"
                        ></textarea>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary"
                            style={{ width: '100%', gap: '0.5rem' }}
                        >
                            ENVIAR <Send size={20} />
                        </motion.button>
                    </form>

                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        {[
                            { icon: Github, color: 'black', hover: '#00ff88' },
                            { icon: Linkedin, color: '#0077b5', hover: 'white' },
                            { icon: Mail, color: '#dc2626', hover: '#ffd700' }
                        ].map((Item, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -5, rotate: 10 }}
                                className="btn-icon"
                                style={{ backgroundColor: Item.color }}
                            >
                                <Item.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
