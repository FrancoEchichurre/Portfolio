export default function Footer() {
  return (
    <>
      {/* Mobile Footer */}
      <footer className="md:hidden w-full py-stack-lg border-t border-border-subtle bg-surface-container-lowest dark:bg-inverse-surface">
        <div className="flex flex-col justify-between items-center px-margin-mobile max-w-container-max mx-auto gap-4">
          <span className="font-body-md text-body-md text-primary dark:text-primary-fixed-dim">
              © 2026 Franco Echichurre
          </span>
          <div className="flex gap-6">
            <a className="font-body-md text-body-md text-secondary hover:text-primary hover:opacity-80 transition-opacity active:scale-95" href="https://github.com/FrancoEchichurre" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="font-body-md text-body-md text-secondary hover:text-primary hover:opacity-80 transition-opacity active:scale-95" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-body-md text-body-md text-secondary hover:text-primary hover:opacity-80 transition-opacity active:scale-95" href="mailto:franco@example.com">Mail</a>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-surface-container-low dark:bg-surface-dim w-full py-stack-lg border-t border-outline-variant/30 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div className="font-headline-lg-mobile text-headline-lg-mobile font-black text-primary">Franco.dev</div>
          <div className="text-on-surface-variant font-label-caps text-label-caps text-center md:text-left">
            © 2026 Franco Echichurre. Built with architectural clarity.
          </div>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="https://github.com/FrancoEchichurre" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="mailto:franco@example.com">Mail</a>
          </div>
        </div>
      </footer>
    </>
  );
}
