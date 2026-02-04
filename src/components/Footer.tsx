import { Github, Facebook, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sonimaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/sonima.pokharel.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:sonimapokhrel017@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Signature */}
          <p className="font-mono text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary text-lg"></span> by{" "}
            <span className="text-foreground font-semibold">Sonima Pokharel</span>
          </p>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
