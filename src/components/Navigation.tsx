import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* =========================================
          MOBILE VIEW (md:hidden)
          ========================================= */}
      
      {/* Mobile TopAppBar */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface-glass dark:bg-surface-glass backdrop-blur-md border-b border-border-subtle shadow-sm flex justify-between items-center px-margin-mobile h-16">
        <button 
          onClick={toggleDrawer}
          aria-label="Open menu" 
          className="p-2 -ml-2 text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-full active:scale-95 transition-transform duration-200 focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link to="/" className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim cursor-pointer">
            Franco.dev
        </Link>
        <button className="text-primary dark:text-primary-fixed-dim font-label-caps text-label-caps hover:bg-surface-container-low dark:hover:bg-surface-container-high px-3 py-2 rounded-lg active:scale-95 transition-transform duration-200 cursor-pointer">
            Contact
        </button>
      </header>

      {/* Mobile NavigationDrawer Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-on-surface/20 z-[55] backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleDrawer}
      ></div>

      {/* Mobile NavigationDrawer */}
      <nav 
        className={`md:hidden fixed inset-y-0 left-0 z-[60] flex flex-col p-stack-md bg-surface dark:bg-background h-full w-72 rounded-r-xl shadow-xl transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center gap-4 mb-stack-lg">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0 border border-border-subtle">
            <img alt="Franco Echichurre" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAkh_P3TYxjKVDzkX75YB5g2Q7cgSGaTKw5mRc0asbQvfM40h14a52Jpr4pcGrL6jGc78nzeOXD9_cBgnCdppsZm9ReCxlv0aM2pGuJIGL_BpeyNdBib8M55zmsudZWN6Yc1L2kAp1xgGiMhosYzzoI-ZCnFdS6SXGBkL0k5-OpU8ftnVcI4zF5at4tm1FK91aTNF7Eby7PV-3wf7-dcICEeuG9puju-SbCQMa1ToJwDsDkoQBrOEq"/>
          </div>
          <div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-primary truncate">Franco Echichurre</h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Full Stack Developer</p>
            <p className="font-label-caps text-label-caps text-primary-container mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
              Disponible para proyectos
            </p>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          <li>
            <Link to="/projects" className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold active:scale-98 transition-all hover:bg-surface-container-high cursor-pointer">
              <span className="material-symbols-outlined fill">code</span>
              <span className="font-label-caps text-label-caps">Proyectos</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg active:scale-98 transition-all cursor-pointer">
              <span className="material-symbols-outlined">home</span>
              <span className="font-label-caps text-label-caps">Inicio</span>
            </Link>
          </li>

          <li>
            <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg active:scale-98 transition-all" href="#">
              <span className="material-symbols-outlined">work</span>
              <span className="font-label-caps text-label-caps">Experiencia</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* =========================================
          DESKTOP VIEW (hidden md:block)
          ========================================= */}
      
      {/* Desktop TopNavBar */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-white/80 dark:bg-surface/80 backdrop-blur-md border-b border-primary/10 shadow-[0_4px_20px_rgba(0,162,255,0.05)]">
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <Link to="/" className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-container cursor-pointer">Franco.dev</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/projects" className={`font-bold font-body-md text-body-md py-1 cursor-pointer transition-colors ${location.pathname === '/projects' ? 'text-primary dark:text-primary-container border-b-2 border-primary' : 'text-secondary dark:text-secondary-fixed hover:text-primary'}`}>Projects</Link>

            <a className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors font-body-md text-body-md" href="#">Experience</a>
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 active:scale-95 cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>
    </>
  );
}
