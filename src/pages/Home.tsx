import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Stack from '../components/Stack';

export default function Home() {
  const heroCardRef = useRef<HTMLDivElement>(null);

  // Desktop Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroCardRef.current) return;
      const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
      heroCardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Mobile Main Content */}
      <main className="md:hidden pt-20 px-margin-mobile pb-stack-lg max-w-container-max mx-auto space-y-stack-lg text-body-md flex-1">
        {/* Mobile Hero Section */}
        <section className="flex flex-col gap-stack-md pt-stack-sm">
          {/* Device Mockup */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden glass-panel shadow-lg flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-accent-glow"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-outline-variant/30 shadow-sm bg-surface-container-lowest">
              <img alt="Project Showcase Mockup" className="w-full h-full object-cover bg-white" src="/images/hero.png"/>
            </div>
          </div>
          {/* Value Prop */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 mx-auto shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              <span className="font-label-caps text-label-caps">Disponible para proyectos</span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
              Construyendo <span className="text-primary-container">Claridad Arquitectónica</span> en Software.
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-sm mx-auto leading-relaxed">
              Combinando precisión técnica con estética digital de alta gama para construir aplicaciones web confiables y de alto rendimiento.
            </p>
            <div className="pt-2 flex gap-3 justify-center">
              <Link to="/projects" className="bg-primary-container text-on-error font-code-sm text-code-sm px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer inline-block">
                Ver Proyectos
              </Link>
              <button className="bg-transparent text-primary font-code-sm text-code-sm px-6 py-3 rounded-full border-2 border-outline-variant/30 hover:bg-surface-container-low active:scale-95 transition-all cursor-pointer">
                GitHub
              </button>
            </div>
          </div>
        </section>

        {/* Stack Section (Mobile) */}
        <Stack id="stack-mobile" />

        {/* Mobile Featured Projects */}
        <section className="space-y-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary border-b border-border-subtle pb-2 inline-block">Proyectos Destacados</h2>
          <div className="flex flex-col gap-gutter">
            {/* Project Card 1 */}
            <article className="glass-panel rounded-xl overflow-hidden shadow-sm flex flex-col group relative isolate">
              <div className="h-48 relative overflow-hidden bg-surface-container">
                <img alt="Rossana Altez Coaching" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="/images/rossana.png"/>
              </div>
              <div className="p-6 flex flex-col gap-4 bg-surface-container-lowest flex-1">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Rossana Altez Coaching</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Plataforma web para coaching y mentoría holística con un diseño inmersivo y catálogo de cursos.</p>
                </div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">React</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">Radix UI</span>
                </div>
                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px] text-primary">speed</span>
                      <span className="font-code-sm text-code-sm text-primary">100</span>
                    </div>
                  </div>
                  <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-error transition-colors" href="https://www.rossanaaltez.com/" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Project Card 2 */}
            <article className="glass-panel rounded-xl overflow-hidden shadow-sm flex flex-col group relative isolate">
              <div className="h-48 relative overflow-hidden bg-surface-container">
                <img alt="Active Recovery Dashboard" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 blur-sm" src="/images/active_recovery.png"/>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100/90 text-amber-700 tracking-wider backdrop-blur-sm">EN DESARROLLO</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 bg-surface-container-lowest flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Active Recovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Plataforma de gestión de turnos y pacientes para centro de kinesiología.</p>
                </div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">Next.js</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">Supabase</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-code-sm text-code-sm shadow-sm">Tailwind</span>
                </div>
                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px] text-primary">speed</span>
                      <span className="font-code-sm text-code-sm text-primary">100</span>
                    </div>
                  </div>
                  <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-error transition-colors" href="https://active-recovery.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Project Card 3 */}
            <article className="glass-panel rounded-xl overflow-hidden shadow-sm flex flex-col group relative isolate border-dashed border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="h-48 relative overflow-hidden bg-surface-container-low flex flex-col items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-[60px] text-primary/40 group-hover:text-primary/60 transition-colors">rocket_launch</span>
                 <span className="font-label-caps text-label-caps text-primary/60">INICIA HOY</span>
              </div>
              <div className="p-6 flex flex-col gap-4 bg-surface-container-lowest flex-1">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Tu Proyecto Aquí</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Trabajemos juntos para construir tu próxima gran idea. Estoy disponible para nuevos desafíos.</p>
                </div>
                {/* Contact CTA */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-subtle">
                  <button className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-code-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                    Hablemos de tu idea
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <div className="hidden md:block hero-gradient flex-1">
        <main className="pt-20">
          {/* Desktop Hero Section */}
          <section className="relative overflow-hidden pt-stack-lg pb-stack-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
              {/* Content */}
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full font-label-caps text-label-caps mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  DISPONIBLE PARA NUEVOS PROYECTOS
                </div>
                <h1 className="font-headline-xl text-headline-xl mb-4 tracking-tight">FRANCO ECHICHURRE</h1>
                <h2 className="font-headline-lg text-headline-lg mb-6 text-primary-container font-semibold">Desarrollador de Software Full Stack</h2>
                <p className="text-secondary text-body-md mb-stack-md max-w-xl">
                  Webs modernas, funcionales y bien pensadas para hacer crecer tu negocio. Transformo ideas complejas en experiencias digitales de alto rendimiento.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-stack-lg">
                  <Link to="/projects" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold hover:shadow-[0_8px_24px_rgba(0,162,255,0.2)] transition-all duration-300 active:scale-95 cursor-pointer inline-block">
                    VER PROYECTOS
                  </Link>
                  <button className="border-2 border-outline-variant/30 text-secondary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all duration-300 active:scale-95 cursor-pointer">
                    MI STACK
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-outline-variant/20 pt-stack-md">
                  <div>
                    <div className="font-headline-lg text-primary font-bold">4+</div>
                    <div className="text-secondary font-label-caps text-label-caps uppercase tracking-wider">Años de Exp.</div>
                  </div>
                  <div>
                    <div className="font-headline-lg text-primary font-bold">50+</div>
                    <div className="text-secondary font-label-caps text-label-caps uppercase tracking-wider">Proyectos</div>
                  </div>
                  <div>
                    <div className="font-headline-lg text-primary font-bold">100%</div>
                    <div className="text-secondary font-label-caps text-label-caps uppercase tracking-wider">Calidad</div>
                  </div>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative flex justify-center items-center h-[500px]" style={{ perspective: '1000px' }}>
                {/* Abstract Glass Layers */}
                <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                
                <div ref={heroCardRef} className="relative w-full max-w-md aspect-[4/3] glass-card rounded-2xl shadow-xl overflow-hidden group" style={{ transition: 'transform 0.1s ease-out' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                  <img 
                    className="w-full h-full object-cover bg-white transition-transform duration-700 group-hover:scale-105" 
                    alt="Dashboard display on a glass screen" 
                    src="/images/hero.png"
                  />
                  
                  {/* Floating Glass Chips */}
                  <div className="absolute bottom-6 right-6 p-4 glass-card rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">speed</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm">99 Lighthouse</div>
                        <div className="text-xs text-secondary">Performance score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stack Section (Desktop) */}
          <Stack id="stack-desktop" />

          {/* Desktop Featured Projects Section */}
          <section className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-gutter">
            <div className="max-w-container-max mx-auto">
              <div className="flex justify-between items-end mb-stack-md">
                <div>
                  <h2 className="font-headline-lg text-headline-lg font-bold mb-2">PROYECTOS DESTACADOS</h2>
                  <p className="text-secondary max-w-md">Soluciones de ingeniería escalables con un enfoque en la experiencia de usuario y la arquitectura limpia.</p>
                </div>
                <Link to="/projects" className="flex items-center gap-2 text-primary font-bold group cursor-pointer">
                  Ver todos <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
              
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Featured Card */}
                <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="p-stack-md">
                      <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/5 text-primary text-label-caps font-label-caps rounded-full">Coaching</span>
                        <span className="px-3 py-1 bg-primary/5 text-primary text-label-caps font-label-caps rounded-full">Web</span>
                      </div>
                      <h3 className="font-headline-lg text-headline-lg font-bold mb-4">Rossana Altez Coaching</h3>
                      <p className="text-secondary text-body-md mb-6 max-w-md">Plataforma web para coaching y mentoría holística con un diseño inmersivo y catálogo de cursos.</p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-secondary font-code-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Next.js
                        </div>
                        <div className="flex items-center gap-2 text-secondary font-code-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> React
                        </div>
                        <div className="flex items-center gap-2 text-secondary font-code-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Radix UI
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto px-stack-md pt-0 relative h-64 md:h-80 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover object-top rounded-t-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700" 
                        alt="Rossana Altez Coaching Dashboard layout." 
                        src="/images/rossana.png"
                      />
                    </div>
                  </div>
                  <a className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-primary/5 backdrop-blur-[2px] transition-opacity flex items-center justify-center" href="https://www.rossanaaltez.com/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white px-6 py-3 rounded-full font-bold shadow-lg text-primary flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                      Visitar Proyecto <span className="material-symbols-outlined">launch</span>
                    </div>
                  </a>
                </div>
                
                {/* Tech Card 1 */}
                <a href="https://active-recovery.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group bg-white p-stack-md rounded-3xl border border-primary/5 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 z-0">
                    <img alt="Active Recovery" className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity blur-[2px]" src="/images/active_recovery.png"/>
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors backdrop-blur-sm">
                        <span className="material-symbols-outlined text-3xl">medical_services</span>
                      </div>
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-amber-100/90 text-amber-700 tracking-wider backdrop-blur-sm shadow-sm">EN DESARROLLO</span>
                    </div>
                    <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Active Recovery</h3>
                  <p className="text-secondary text-sm mb-6">Plataforma de gestión de turnos y pacientes para centro de kinesiología.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs font-bold rounded">Next.js</span>
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs font-bold rounded">Supabase</span>
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs font-bold rounded">Tailwind</span>
                  </div>
                  </div>
                </a>
                
                {/* Tech Card 2 */}
                <div className="group bg-surface-container-lowest p-stack-md rounded-3xl border-2 border-dashed border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white">rocket_launch</span>
                  </div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Tu Proyecto Aquí</h3>
                  <p className="text-secondary text-sm mb-4">Trabajemos juntos para construir tu próxima gran idea. Contáctame para empezar.</p>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                    Hablemos
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
