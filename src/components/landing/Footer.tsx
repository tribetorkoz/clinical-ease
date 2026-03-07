const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">C</span>
            </div>
            <span className="font-bold text-foreground tracking-tight">
              CLINICALL <span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 CLINICALL AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
