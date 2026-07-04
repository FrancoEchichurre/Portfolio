import { Link } from 'react-router-dom';
import Stack from '../components/Stack';

export default function Home() {
  return (
    <main className="w-full pt-16">
      {/* Hero Section */}
      <section className="w-full px-margin-mobile py-stack-lg md:py-24 max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-stack-lg relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-accent-glow rounded-full blur-[100px] -z-10"></div>
        <div className="flex-1 flex flex-col items-start gap-6 pt-8 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed text-primary font-label-caps text-label-caps border border-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            DISPONIBLE PARA NUEVOS PROYECTOS
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-background flex flex-col leading-tight">
            <span className="text-on-surface-variant uppercase tracking-tight font-black text-4xl md:text-6xl lg:text-7xl">FRANCO ECHICHURRE</span>
            <span className="text-[#00a2ff] font-semibold text-2xl md:text-4xl lg:text-5xl mt-2 tracking-tight">Desarrollador de Software Full Stack</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl text-lg md:text-xl leading-relaxed">
            Webs modernas, funcionales y bien pensadas para hacer crecer tu negocio. Transformo ideas complejas en experiencias digitales de alto rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
            <Link to="/projects" className="bg-[#00a2ff] text-white px-8 py-4 rounded-xl font-bold active:scale-96 transition-all duration-200 hover:shadow-lg hover:bg-[#0090e6] shadow-md flex items-center justify-center gap-2">
              VER PROYECTOS
            </Link>
            <a href="https://github.com/FrancoEchichurre" target="_blank" rel="noopener noreferrer" className="bg-surface border-2 border-outline-variant/30 text-on-surface-variant px-8 py-4 rounded-xl font-bold active:scale-96 transition-all duration-200 hover:bg-secondary-container/50 flex items-center justify-center gap-2">
              GITHUB
            </a>
          </div>
          {/* Stats Row */}
          <div className="flex items-center gap-8 md:gap-12 mt-8 pt-8 border-t border-border-subtle w-full max-w-md">
            <div>
              <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">4+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">AÑOS DE EXP.</div>
            </div>
            <div>
              <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">50+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">PROYECTOS</div>
            </div>
            <div>
              <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">100%</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">CALIDAD</div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full relative perspective-1000">
          {/* Hero Image with subtle rotation for depth */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto transform md:rotate-y-[-5deg] md:rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
            <img alt="Hero Display" className="w-full h-full object-contain drop-shadow-2xl z-10 relative" src="/images/hero.png"/>
            {/* Decorative blur behind image */}
            <div className="absolute inset-10 bg-primary/20 blur-3xl -z-10 rounded-full mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Mi Stack Tecnológico */}
      <Stack />

      {/* Proyectos Destacados (Bento Style) */}
      <section className="w-full py-stack-lg bg-surface" id="projects">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">PROYECTOS DESTACADOS</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Soluciones de ingeniería escalables con un enfoque en la experiencia de usuario y la arquitectura limpia.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-primary hover:text-[#00a2ff] transition-colors group">
              Ver todos <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Rossana */}
            <a href="https://www.rossanaaltez.com/" target="_blank" rel="noopener noreferrer" className="glass-card rounded-3xl overflow-hidden flex flex-col bento-hover bg-white group cursor-pointer block">
              <div className="p-8 flex flex-col gap-4 z-10 relative bg-gradient-to-b from-white via-white to-white/80">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-fixed/50 text-primary text-xs font-bold rounded-full">Coaching</span>
                  <span className="px-3 py-1 bg-primary-fixed/50 text-primary text-xs font-bold rounded-full">Web</span>
                </div>
                <h3 className="font-headline-lg-mobile text-[28px] font-bold text-on-background mt-2">Rossana Altez Coaching</h3>
                <p className="text-on-surface-variant text-sm md:text-base mb-2">Plataforma web para coaching y mentoría holística con un diseño inmersivo y catálogo de cursos.</p>
                <ul className="flex items-center gap-4 text-sm font-medium text-primary">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00a2ff]"></span>Next.js</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00a2ff]"></span>React</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00a2ff]"></span>Radix UI</li>
                </ul>
              </div>
              <div className="relative flex-1 mt-auto px-8 pb-0 pt-4 bg-gradient-to-t from-black/5 to-transparent flex justify-center items-end min-h-[250px] overflow-hidden">
                <img alt="Rossana Altez Coaching Dashboard layout." className="w-full max-w-[90%] rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] object-cover object-top relative top-4 group-hover:-translate-y-2 transition-transform duration-500" src="/images/rossana.png"/>
              </div>
            </a>
            {/* Right Column for Bento */}
            <div className="flex flex-col gap-6">
              {/* Project 2: Active Recovery */}
              <a href="https://active-recovery.vercel.app/" target="_blank" rel="noopener noreferrer" className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between p-8 bento-hover bg-white relative h-full min-h-[300px] group cursor-pointer block">
                {/* Status Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200 z-20">
                  EN DESARROLLO
                </div>
                {/* BG Image with overlay */}
                <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                  <img alt="Active Recovery" className="w-full h-full object-cover blur-[2px]" src="/images/active_recovery.png"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="z-10 relative flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant mb-6 shadow-sm border border-outline-variant/20">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                  <h3 className="font-headline-lg-mobile text-[24px] font-bold text-on-background mb-3">Active Recovery</h3>
                  <p className="text-on-surface-variant text-sm mb-6 max-w-sm">Plataforma de gestión de turnos y pacientes para centro de kinesiología.</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 bg-primary-fixed/30 text-primary text-xs font-bold rounded-md">Next.js</span>
                    <span className="px-2.5 py-1 bg-primary-fixed/30 text-primary text-xs font-bold rounded-md">Supabase</span>
                    <span className="px-2.5 py-1 bg-primary-fixed/30 text-primary text-xs font-bold rounded-md">Tailwind</span>
                  </div>
                </div>
              </a>
              {/* CTA Card */}
              <div className="rounded-3xl border-2 border-dashed border-outline-variant/30 p-8 flex flex-col items-center justify-center text-center bg-surface-bright/50 hover:bg-surface-bright transition-colors h-full min-h-[250px]">
                <div className="w-16 h-16 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-lg-mobile text-[22px] font-bold text-on-background mb-2">Tu Proyecto Aquí</h3>
                <p className="text-on-surface-variant text-sm mb-6 max-w-xs">Trabajemos juntos para construir tu próxima gran idea. Contáctame para empezar.</p>
                <a href="mailto:franco@example.com" className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#00a2ff] transition-colors active:scale-95 shadow-md inline-block cursor-pointer">
                  Hablemos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
