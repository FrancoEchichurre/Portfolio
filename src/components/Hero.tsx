import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__wall-texture"></div>
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero__title-container"
                >
                    <h1 className="hero__title">
                        <span className="hero__name-line">FRANCO</span>
                        <span className="hero__name-line text-spray-blue">ECHICHURRE</span>
                    </h1>

                    <motion.div
                        // className="hero__drips"
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    ></motion.div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="hero__subtitle"
                >
                    FULL STACK DEVELOPER
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="hero__tagline"
                >
                    // CÓDIGO LIMPIO, ESTILO URBANO
                </motion.p>

                <div className="hero__actions">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-sticker btn-sticker--red"
                    >
                        VER OBRAS
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-sticker btn-sticker--blue"
                    >
                        CONTACTO
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
