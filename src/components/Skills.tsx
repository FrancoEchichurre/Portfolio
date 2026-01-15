import { motion } from 'framer-motion';

const skills = [
    {
        category: "FRONTEND WEAPONS", items: [
            { name: "React.js", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "TypeScript", level: 85 }
        ]
    },
    {
        category: "BACKEND TOOLS", items: [
            { name: "Node.js", level: 80 },
            { name: "Express", level: 85 }
        ]
    },
    {
        category: "DATABASE POWER", items: [
            { name: "MongoDB", level: 80 },
            { name: "MySQL", level: 70 }
        ]
    }
];

export const Skills = () => {
    return (
        <section className="section section--dark">
            <div className="section__container">
                <h2 className="section__header-title" style={{ marginBottom: '5rem' }}>
                    MI <span style={{ color: '#ff006e' }}>ARSENAL</span>
                </h2>

                <div className="grid grid-cols-3">
                    {skills.map((group, idx) => (
                        <div key={idx} style={{ padding: '1.5rem', backgroundColor: '#3d2f2f', border: '2px solid black', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#ffd700', marginBottom: '1.5rem', borderBottom: '2px dashed gray', paddingBottom: '0.5rem' }}>
                                {group.category}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {group.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: '#d1d5db' }}>
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div style={{ height: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '9999px', overflow: 'hidden', padding: '2px' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                style={{ height: '100%', background: 'linear-gradient(to right, #00ff88, #ff006e)', borderRadius: '9999px' }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
