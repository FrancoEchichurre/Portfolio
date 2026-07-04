export default function Projects() {
  return (
    <main className="pt-20 md:pt-32 pb-stack-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-screen flex flex-col">
      <div className="mb-stack-lg text-center md:text-left flex-1">
        <h1 className="font-headline-xl text-headline-xl font-black text-on-surface tracking-tight mb-4">
          Mis <span className="text-primary-container">Proyectos</span>
        </h1>
        <p className="text-secondary font-body-md text-body-md max-w-2xl">
          Explora los proyectos en los que he estado trabajando recientemente. Cada uno representa un desafío distinto y una solución técnica a medida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md flex-1">
        {/* Project 1: Rossana Altez */}
        <article className="group bg-surface-container-lowest rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-surface-container-low p-4 pb-0">
            <img 
              alt="Rossana Altez Coaching" 
              className="w-full h-full object-cover object-top rounded-t-2xl shadow-xl transform transition-transform duration-700 group-hover:scale-105" 
              src="/images/rossana.png"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-white/90 text-primary text-label-caps font-label-caps rounded-full shadow-sm backdrop-blur-sm">Coaching</span>
            </div>
          </div>
          <div className="p-stack-md flex flex-col flex-1">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Rossana Altez Coaching</h3>
            <p className="text-secondary text-sm mb-6 flex-1">Plataforma web para coaching y mentoría holística. Combina un diseño inmersivo con una navegación fluida para presentar su catálogo de cursos y servicios. Enfoque en accesibilidad y estética serena.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Next.js</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">React</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Tailwind CSS</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Radix UI</span>
            </div>
            <a href="https://www.rossanaaltez.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">
              Visitar Proyecto <span className="material-symbols-outlined text-[18px]">launch</span>
            </a>
          </div>
        </article>

        {/* Project 2: Active Recovery */}
        <article className="group bg-surface-container-lowest rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-surface-container-low p-4 pb-0">
            <img 
              alt="Active Recovery Dashboard" 
              className="w-full h-full object-cover object-top rounded-t-2xl shadow-xl transform transition-transform duration-700 group-hover:scale-105 blur-sm" 
              src="/images/active_recovery.png"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-label-caps font-label-caps rounded-full shadow-sm font-bold tracking-wider backdrop-blur-md">EN DESARROLLO</span>
            </div>
          </div>
          <div className="p-stack-md flex flex-col flex-1">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Active Recovery</h3>
            <p className="text-secondary text-sm mb-6 flex-1">Sistema integral de gestión para un centro de kinesiología. Permite el manejo de base de datos de pacientes, agenda de turnos y registros clínicos en tiempo real, facilitando la administración diaria del consultorio.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Next.js</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Supabase</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">TypeScript</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Tailwind</span>
            </div>
            <a href="https://active-recovery.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">
              Visitar Proyecto <span className="material-symbols-outlined text-[18px]">launch</span>
            </a>
          </div>
        </article>

        {/* Project 3: TCM Gym */}
        <article className="group bg-surface-container-lowest rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-surface-container-low p-4 pb-0">
            <img 
              alt="TCM Gym Interface" 
              className="w-full h-full object-cover object-top rounded-t-2xl shadow-xl transform transition-transform duration-700 group-hover:scale-105" 
              src="/images/tcm_gym.png"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-label-caps font-label-caps rounded-full shadow-sm font-bold tracking-wider backdrop-blur-md">PROTOTIPO</span>
            </div>
          </div>
          <div className="p-stack-md flex flex-col flex-1">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">TCM Gym</h3>
            <p className="text-secondary text-sm mb-6 flex-1">Plataforma web interactiva para gimnasio enfocada en exhibir los servicios, planes de entrenamiento y horarios de forma dinámica y atractiva para nuevos socios.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">React</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Tailwind CSS</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Vite</span>
            </div>
            <a href="https://tcm-gym.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">
              Visitar Proyecto <span className="material-symbols-outlined text-[18px]">launch</span>
            </a>
          </div>
        </article>

        {/* Project 4: La Sierra Hamburguesería */}
        <article className="group bg-surface-container-lowest rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-surface-container-low p-4 pb-0">
            <img 
              alt="La Sierra Hamburguesería Web" 
              className="w-full h-full object-cover object-top rounded-t-2xl shadow-xl transform transition-transform duration-700 group-hover:scale-105 blur-sm" 
              src="/images/lasierra.png"
            />
            <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-label-caps font-label-caps rounded-full shadow-sm font-bold tracking-wider backdrop-blur-md">PROTOTIPO</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-label-caps font-label-caps rounded-full shadow-sm font-bold tracking-wider backdrop-blur-md">EN DESARROLLO</span>
            </div>
          </div>
          <div className="p-stack-md flex flex-col flex-1">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">La Sierra Hamburguesería</h3>
            <p className="text-secondary text-sm mb-6 flex-1">Catálogo digital y sistema de e-commerce para local gastronómico. Incluye gestión de menú, carrito de compras e integración con backend en tiempo real.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">React</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Firebase</span>
              <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full">Tailwind CSS</span>
            </div>
            <a href="https://lasierra-hamburgueseria.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">
              Visitar Proyecto <span className="material-symbols-outlined text-[18px]">launch</span>
            </a>
          </div>
        </article>

        {/* Project 4: CTA */}
        <article className="group bg-surface-container-lowest rounded-3xl overflow-hidden border-2 border-dashed border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center cursor-pointer p-stack-lg min-h-[400px]">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors duration-500">
            <span className="material-symbols-outlined text-[40px] text-primary group-hover:text-white transition-colors">rocket_launch</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg font-bold mb-3">Tu Proyecto Aquí</h3>
          <p className="text-secondary text-body-md mb-8 max-w-sm mx-auto">
            Trabajemos juntos para construir tu próxima gran idea. Transformo tu visión en una experiencia digital de alto rendimiento.
          </p>
          <button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all">
            Hablemos de tu idea
          </button>
        </article>
      </div>
    </main>
  );
}
