export default function Experience() {
  return (
    <section id="experience" className="w-full bg-surface-container-lowest py-16 md:py-24 border-b border-border-subtle">
      <div className="max-w-3xl mx-auto px-margin-mobile sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            EXPERIENCIA & FORMACIÓN
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Trayectoria profesional, proyectos independientes y educación técnica especializada.
          </p>
        </div>

        <div className="space-y-8">
          {/* Tarjeta 1 */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-background">Desarrollador de Software Freelance</h3>
                <h4 className="text-primary font-medium mt-1">Proyectos Independientes</h4>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed/50 text-primary text-sm font-bold w-fit">
                2025 — Actualidad
              </div>
            </div>
            
            <ul className="list-disc list-inside text-on-surface-variant space-y-3 font-body-md text-body-md">
              <li>
                <strong className="text-on-background">E-commerce y Pasarelas de Pago:</strong> Integración de tiendas online mediante Shopify e implementación de arquitecturas para cobros internacionales y locales utilizando Stripe y Mercado Pago.
              </li>
              <li>
                <strong className="text-on-background">Digitalización Comercial:</strong> Diseño, desarrollo y despliegue en Vercel de sitios web institucionales (ej. hamburguesería La Sierra), enfocados en optimizar la confianza de la marca y la conversión de clientes.
              </li>
              <li>
                <strong className="text-on-background">Desarrollo de Plataformas:</strong> Modelado técnico y estructuración de negocios para plataformas de servicios (ej. centro de recuperación deportiva), abarcando desde la interfaz hasta la lógica de reservas.
              </li>
            </ul>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-background">Full Stack Engineer</h3>
                <h4 className="text-primary font-medium mt-1">EducaciónIT</h4>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-sm font-bold w-fit">
                Finalizado en 2025
              </div>
            </div>
            
            <ul className="list-disc list-inside text-on-surface-variant space-y-3 font-body-md text-body-md mb-6">
              <li>
                Bootcamp intensivo de programación estructurado en más de 150 horas de formación práctica y teórica.
              </li>
              <li>
                Desarrollo completo de aplicaciones web, desde el diseño de la interfaz hasta la arquitectura de bases de datos relacionales y no relacionales.
              </li>
            </ul>

            {/* Diploma Image */}
            <div className="mt-6 rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm">
              <img 
                src="/images/diploma.png" 
                alt="Certificado de aprobación Full Stack Engineer - EducaciónIT" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
