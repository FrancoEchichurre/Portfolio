import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navigation Drawer Shell */}
      <div 
        id="nav-drawer" 
        className={`fixed inset-y-0 left-0 z-[60] p-stack-md flex flex-col h-full w-80 rounded-r-xl bg-surface dark:bg-background shadow-xl transition-transform duration-300 md:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile font-extrabold text-primary">Franco.dev</h2>
          <button 
            id="close-drawer" 
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            onClick={toggleDrawer}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-3 bg-primary-fixed text-on-primary-fixed-variant rounded-xl font-bold active:scale-98 duration-150" href="#">
            <span className="material-symbols-outlined">home</span>
            Home
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-secondary-container rounded-xl transition-all active:scale-98 duration-150" href="#stack" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">terminal</span>
            Technology
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-secondary-container rounded-xl transition-all active:scale-98 duration-150" href="#projects" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">layers</span>
            Projects
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-secondary-container rounded-xl transition-all active:scale-98 duration-150" href="https://wa.me/59895063978" target="_blank" rel="noopener noreferrer" onClick={toggleDrawer}>
            <span className="material-symbols-outlined">mail</span>
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay for Drawer */}
      <div 
        id="drawer-overlay" 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* TopAppBar */}
      <header 
        id="top-bar" 
        className={`bg-surface-glass dark:bg-surface-glass fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b border-border-subtle transition-all duration-300 ${
          isScrolled ? 'shadow-md bg-surface-glass/90' : 'shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-container-max mx-auto">
          <button 
            id="menu-btn" 
            className="md:hidden text-primary dark:text-primary-fixed active:scale-95 duration-200 hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 cursor-pointer"
            onClick={toggleDrawer}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed flex-1 text-center md:text-left tracking-tight">
            Franco.dev
          </div>
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#projects">Projects</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#experience">Experience</a>
          </nav>
          <button className="md:hidden text-primary dark:text-primary-fixed active:scale-95 duration-200 hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 invisible">
            {/* Spacer for centering logo on mobile */}
            <span className="material-symbols-outlined text-[24px]">code</span>
          </button>
        </div>
      </header>
    </>
  );
}
