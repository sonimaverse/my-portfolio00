import { useEffect, useState } from "react";
import { ArrowDown, Github, Facebook, Mail } from "lucide-react";

const roles = [
  "C++ Developer",
  "Frontend Developer",
  "JavaScript Enthusiast",
  "Problem Solver",
];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Terminal-style Intro */}
        <div className="inline-block mb-6 px-4 py-2 bg-card rounded-lg border border-border">
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm <span className="text-gradient">Sonima Pokharel</span>
        </h1>

        {/* Typing Animation */}
        <div className="h-12 mb-8">
          <p className="font-mono text-xl md:text-2xl text-muted-foreground">
            {">"} {displayText}
            <span className="terminal-cursor text-primary">|</span>
          </p>
        </div>

        {/* Short Intro */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          CS student passionate about building solutions with{" "}
          <span className="text-primary font-mono">C/C++</span>,{" "}
          <span className="text-accent font-mono">JavaScript</span>, and
          currently learning <span className="text-primary font-mono">React.js</span>.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/sonimaverse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 bg-card border border-border rounded-lg hover-glow hover:border-primary transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/sonima.pokharel.3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-3 bg-card border border-border rounded-lg hover-glow hover:border-primary transition-all"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:sonimapokhrel017@gmail.com"
            aria-label="Email"
            className="p-3 bg-card border border-border rounded-lg hover-glow hover:border-primary transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity glow-box"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary font-mono font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#about"
          aria-label="Scroll Down"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
