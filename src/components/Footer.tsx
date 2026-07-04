export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-highest w-full py-stack-lg border-t border-border-subtle flex flex-col items-center justify-center gap-stack-sm px-margin-mobile">
      <div className="w-full max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-label-caps text-label-caps font-black text-primary text-lg">
          Franco.dev
        </div>
        <div className="text-on-surface-variant font-label-caps text-label-caps text-center md:text-left text-[10px] md:text-[12px]">
          © 2026 Franco Echichurre. Built with Architectural Clarity.
        </div>
        <div className="flex items-center gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps active:opacity-80 cursor-pointer" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps active:opacity-80 cursor-pointer" href="https://github.com/FrancoEchichurre" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps active:opacity-80 cursor-pointer" href="mailto:franco@example.com">Mail</a>
        </div>
      </div>
    </footer>
  );
}
