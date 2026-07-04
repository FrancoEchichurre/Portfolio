import React from 'react';

interface StackProps {
    id?: string;
}

const Stack: React.FC<StackProps> = ({ id = "stack" }) => {
    return (
        <section id={id} className="w-full bg-slate-50 py-16 md:py-24 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">MI STACK TECNOLÓGICO</h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        Herramientas y tecnologías con las que construyo soluciones escalables, desde la interfaz hasta el despliegue en la nube.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Tarjeta Frontend */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600">
                                <span className="material-symbols-outlined">desktop_windows</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">React</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Next.js</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Tailwind CSS</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">TypeScript</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">SCSS</span>
                        </div>
                    </div>

                    {/* Tarjeta Backend & DB */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600">
                                <span className="material-symbols-outlined">dns</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Backend & Datos</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Node.js</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Express</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">MongoDB</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Laravel</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Supabase</span>
                        </div>
                    </div>

                    {/* Tarjeta Herramientas & Cloud */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600">
                                <span className="material-symbols-outlined">cloud_sync</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Herramientas & Cloud</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Git & GitHub</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Vercel</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Render</span>
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Gemini/Claude APIs</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stack;
