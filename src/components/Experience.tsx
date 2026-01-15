import { motion } from 'framer-motion';

export const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="metal-texture"></div>

            <div className="section-header">
                <h2 className="section-title text-center text-white" style={{ position: 'relative', zIndex: 10 }}>
                    MI <span className="text-spray-green">HISTORIA</span>
                </h2>
            </div>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {/* Item 1: Freelancer */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="timeline-item timeline-item--left"
                >
                    <div className="timeline-pin"></div>
                    <div className="post-it post-it--yellow">
                        <div className="tape-top"></div>
                        <h3 className="post-it__title">FREELANCER</h3>
                        <span className="post-it__date">2023 - NOW</span>
                        <p className="post-it__text">
                            Creando soluciones digitales desde las trincheras.
                            Desarrollo web a medida con enfoque en impacto visual.
                        </p>
                    </div>
                </motion.div>

                {/* Item 2: Certificación */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="timeline-item timeline-item--right"
                >
                    <div className="timeline-pin"></div>
                    <div className="post-it post-it--blue">
                        <div className="tape-top"></div>
                        <h3 className="post-it__title">FULL STACK CERTIFIED</h3>
                        <span className="post-it__date">2023</span>
                        <p className="post-it__text">
                            Bootcamp intensivo.
                            MERN Stack dominado.
                            Arquitectura de software y metodologías ágiles.
                        </p>
                        <div className="certificate-stamp">APPROVED</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
