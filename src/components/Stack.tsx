export default function Stack() {
  return (
    <section className="w-full bg-surface-container-lowest py-stack-lg border-y border-border-subtle/50 relative" id="stack">
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <div className="max-w-2xl mb-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">MI STACK TECNOLÓGICO</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Herramientas y tecnologías con las que construyo soluciones escalables, desde la interfaz hasta el despliegue en la nube.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">desktop_windows</span>
              </div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-background">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">React</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Next.js</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Tailwind CSS</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">TypeScript</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">SCSS</span>
            </div>
          </div>
          {/* Backend */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-background">Backend &amp; Datos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Node.js</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Express</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">MongoDB</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Laravel</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Supabase</span>
            </div>
          </div>
          {/* Cloud */}
          <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-background">Herramientas &amp; Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Git &amp; GitHub</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Vercel</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Render</span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface text-sm font-medium rounded-full border border-outline-variant/20">Gemini/Claude APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
