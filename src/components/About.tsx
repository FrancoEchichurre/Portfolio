import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section className="section section--dark" style={{ position: 'relative' }}>
            {/* Decorative Elements - Inline styles for specific positioning kept or moved to specific page styles if strict */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-neon-cyan opacity-20 rotate-12" style={{ borderColor: '#00ff88' }}></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-4 border-neon-magenta opacity-20 -rotate-12" style={{ borderColor: '#ff006e' }}></div>

            <div className="section__container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section__header"
                >
                    <h2 className="section__header-title">
                        <span style={{ color: '#00ff88' }}>SOBRE MÍ</span>
                        <span className="section__header-subtitle">"ABOUT THE ARTIST"</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-12 items-center" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {/* Overridden by grid styles if needed, but flex column for mobile first is safer here in inline until fully moved */}

                    {/* Profile Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
                    >
                        <div className="card" style={{ transform: 'rotate(-3deg)', paddingBottom: '4rem', backgroundColor: 'white' }}>
                            <div style={{ width: '100%', height: '16rem', backgroundColor: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', color: '#6b7280', fontSize: '1.5rem' }}>
                                FOTO
                            </div>
                            <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%) rotate(2deg)', width: '8rem', height: '2rem', backgroundColor: 'rgba(253, 224, 71, 0.8)' }}></div>
                        </div>
                    </motion.div>

                    {/* Bio & Skills */}
                    <div style={{ width: '100%' }}>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.75' }}>
                            Desarrollador Full Stack apasionado por transformar ideas en experiencias web funcionales. Especializado en React, Node.js y MongoDB, con un enfoque creativo inspirado en la cultura urbana.
                        </p>

                        <div className="grid grid-cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                            {['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'HTML5', 'CSS3', 'Git'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                                    className="skill-badge"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="skill-badge skill-badge--dev"
                            >
                                Laravel (EN DESARROLLO)
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
