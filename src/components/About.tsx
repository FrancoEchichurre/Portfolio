import { motion } from 'framer-motion';

const skills = [
    { name: 'React', color: '#3366ff', rotate: 0 },
    { name: 'Next.js', color: '#ffffff', rotate: 0, text: 'black' },
    { name: 'Node.js', color: '#33ff33', rotate: 0 },
    { name: 'MongoDB', color: '#00af50', rotate: 0 },
    { name: 'Express', color: '#cccccc', rotate: 0, text: 'black' },
    { name: 'Tailwind', color: '#38bdf8', rotate: 0 },
    { name: 'TypeScript', color: '#3178c6', rotate: 0 },
    { name: 'SCSS', color: '#cd6799', rotate: 0 },
    { name: 'Git', color: '#f05032', rotate: 0 }
];

export const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-section__glow"></div>

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="section-title text-center"
                >
                    SOBRE <span className="text-spray-red">MÍ</span>
                </motion.h2>

                <div className="about-content">
                    {/* Left Column: Profile */}
                    <motion.div
                        className="about-profile"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-bio glass-card">
                            <div className="badge-freelancer">SOY FREELANCER</div>
                            <p>
                                Hola!! Soy Franco, desarrollador Front-End y Back-End.
                                Me dedico a construir aplicaciones web que resuelven problemas reales.
                                Trabajo principalmente con React, Node.js y MongoDB, siempre abierto a nuevas tecnologías.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="skills-wall"
                    >
                        <h3 className="skills-title">MY STACK</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05, translateY: -5 }}
                                    className="skill-card"
                                    style={{
                                        borderColor: skill.color,
                                        boxShadow: `0 0 10px ${skill.color}20`
                                    }}
                                >
                                    <span style={{ color: skill.color }}>{skill.name}</span>
                                </motion.div>
                            ))}

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="skill-card skill-card--wip"
                            >
                                <span className="wip-text">LARAVEL</span>
                                <span className="wip-badge">Loading...</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};