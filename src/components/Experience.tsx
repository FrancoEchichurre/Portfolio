import { motion } from 'framer-motion';

export const Experience = () => {
    return (
        <section className="section section--concrete">
            <div className="hero__overlay" style={{ opacity: 0.9, backgroundColor: '#1a1a1a' }}></div>

            <div className="section__container" style={{ position: 'relative', zIndex: 10 }}>
                <h2 className="section__header-title" style={{ fontFamily: 'var(--font-display)', marginBottom: '5rem' }}>
                    MI <span style={{ color: '#00ff88' }}>TRAYECTORIA</span>
                </h2>

                <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', backgroundColor: '#ff006e', transform: 'translateX(-50%)' }}></div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ position: 'relative', marginBottom: '3rem', width: '50%', paddingRight: '3rem', marginLeft: 0, textAlign: 'right' }}
                    >
                        <div style={{ backgroundColor: 'white', padding: '1.5rem', transform: 'rotate(1deg)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderTop: '20px solid #d1d5db', borderRight: '20px solid white' }}></div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'black' }}>FREELANCER</h3>
                            <span style={{ fontFamily: 'monospace', color: '#ff006e', fontWeight: 'bold' }}>2023 - PRESENT</span>
                            <p style={{ fontFamily: 'var(--font-body)', color: '#4b5563', marginTop: '0.5rem' }}>
                                Desarrollo de soluciones web completas para diversos clientes, enfocándome en experiencias únicas y funcionales.
                            </p>
                        </div>
                        {/* Circle on line */}
                        <div style={{ position: 'absolute', top: '1.5rem', right: '-3.7rem', width: '1.5rem', height: '1.5rem', backgroundColor: '#ffd700', border: '4px solid black', borderRadius: '50%', zIndex: 20 }}></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ position: 'relative', width: '50%', marginLeft: 'auto', paddingLeft: '3rem' }}
                    >
                        <div style={{ backgroundColor: '#3d2f2f', padding: '1.5rem', transform: 'rotate(-1deg)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '2px solid white' }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white' }}>CERTIFICACIÓN FULL STACK</h3>
                            <span style={{ fontFamily: 'monospace', color: '#00ff88', fontWeight: 'bold' }}>2023</span>
                            <p style={{ fontFamily: 'var(--font-body)', color: '#d1d5db', marginTop: '0.5rem' }}>
                                Completado intensivo bootcamp cubriendo stack MERN, arquitecturas de software y metodologías ágiles.
                            </p>
                            <button className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                                VER CERTIFICADO
                            </button>
                        </div>
                        {/* Circle on line */}
                        <div style={{ position: 'absolute', top: '1.5rem', left: '-3.7rem', width: '1.5rem', height: '1.5rem', backgroundColor: '#00ff88', border: '4px solid black', borderRadius: '50%', zIndex: 20 }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
