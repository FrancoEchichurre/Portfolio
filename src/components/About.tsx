import { motion } from 'framer-motion';

const skills = [
    { name: 'React', color: '#3366ff', rotate: -7 },
    { name: 'Node.js', color: '#33ff33', rotate: 3 },
    { name: 'MongoDB', color: '#00af50', rotate: -2 },
    { name: 'Express', color: '#ffffff', rotate: 5, text: 'black' },
    { name: 'Tailwind', color: '#38bdf8', rotate: -3 },
    { name: 'TypeScript', color: '#3178c6', rotate: 4 },
    { name: 'SCSS', color: '#cd6799', rotate: -4 },
    { name: 'Git', color: '#f05032', rotate: 2 }
];

export const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-section__texture"></div>

            {/* Decorative Paint Splatters - Varied distribution */}
            <img src="/src/assets/icons/pintura2.png" alt="" className="paint-splatter paint-splatter--about-1" />
            <img src="/src/assets/icons/pintura6.png" alt="" className="paint-splatter paint-splatter--about-2" />
            <img src="/src/assets/icons/pintura4.png" alt="" className="paint-splatter paint-splatter--about-3" />
            <img src="/src/assets/icons/pintura7.png" alt="" className="paint-splatter paint-splatter--about-4" />
            <img src="/src/assets/icons/pintura1.png" alt="" className="paint-splatter paint-splatter--about-5" />
            <img src="/src/assets/icons/pintura5.png" alt="" className="paint-splatter paint-splatter--about-6" />

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="section-title text-center"
                >
                    SOBRE   <span className="text-spray-red"> MÍ</span>
                </motion.h2>

                <div className="about-content">
                    {/* Left Column: Polaroid */}
                    <motion.div
                        className="about-profile"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Photo removed as per request */}
                        <div className="about-bio">
                            <span className="badge-freelancer">SOY FREELANCER</span>
                            <p>
                                Hola!! Soy Franco, desarrollador Front-End y Back-End.
                                Me dedico a construir aplicaciones web que resuelven problemas reales.
                                Trabajo principalmente con React, Node.js y MongoDB, siempre abierto a nuevas tecnologías.
                                Como freelancer, cada proyecto es una oportunidad para crear algo único y funcional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Sticker Wall */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="skills-wall"
                    >
                        <h3 className="skills-title">MY WEAPONS</h3>
                        <div className="sticker-grid">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ rotate: skill.rotate }}
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                    className="sticker"
                                    style={{
                                        backgroundColor: skill.color,
                                        color: skill.text || 'white'
                                    }}
                                >
                                    {skill.name}
                                </motion.div>
                            ))}

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="sticker sticker--wet-paint"
                            >
                                <span className="wet-paint-text">LARAVEL</span>
                                <span className="wet-paint-badge">EN PROGRESO</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};