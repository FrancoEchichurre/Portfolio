import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay"></div>

            <motion.div
                className="hero__content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="hero__title">
                    <span className="hero__name-highlight">FRANCO</span>
                    <span className="hero__gradient-text">ECHICHURRE</span>
                </h1>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero__subtitle"
                >
                    FULL STACK DEVELOPER
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="hero__tagline"
                >
                    // Código limpio, diseño urbano, resultados reales
                </motion.p>

                <div className="hero__actions">
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary"
                    >
                        VER PROYECTOS
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-secondary"
                    >
                        DESCARGAR CV
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};
