import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Sonima Bookstore",
    description:
      "An online bookstore web application with a clean, user-friendly interface. Features book browsing, categories, and a responsive design built with modern web technologies.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/sonimaverse/sonima-bookstoree",
    live: "https://sonimaverse.github.io/sonima-bookstoree/",
  },
  {
    title: "Daycare Management",
    description:
      "A web application designed for daycare center management. Provides an organized platform for managing children, schedules, and daycare operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sonimaverse/daycare",
  },
  {
    title: "Mock Quiz App",
    description:
      "An interactive quiz application for testing knowledge. Features multiple-choice questions, score tracking, and instant feedback for users.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sonimaverse/mock-quiz",
  },
];

const otherProjects = [
  {
    title: "Love Website",
    description: "A creative and heartfelt personal website project with beautiful animations and design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sonimaverse/love-website",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio showcasing my projects and skills, built with React and modern web technologies.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sonimaverse",
  },
  {
    title: "More Projects Coming",
    description: "Currently learning React.js and building more interactive web applications. Stay tuned!",
    tech: ["React.js", "Learning"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover-glow transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <span className="font-mono text-primary text-sm">Featured Project</span>
                    <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary rounded-md font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="font-mono text-xl text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover-glow transition-all group"
              >
                <Folder className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="font-mono text-xs text-muted-foreground">
                        {tech}
                        {i < project.tech.length - 1 && " •"}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
