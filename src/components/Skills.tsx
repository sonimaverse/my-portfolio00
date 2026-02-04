const skills = [
  {
    name: "C++",
    level: 85,
    description: "System programming, algorithms, data structures",
    icon: "⚡",
  },
  {
    name: "HTML",
    level: 95,
    description: "Semantic markup, accessibility, SEO",
    icon: "🌐",
  },
  {
    name: "CSS",
    level: 90,
    description: "Flexbox, Grid, animations, responsive design",
    icon: "🎨",
  },
  {
    name: "JavaScript",
    level: 88,
    description: "ES6+, DOM manipulation, async programming",
    icon: "⚙️",
  },
];

const otherSkills = ["Git", "React", "Node.js", "Python", "SQL", "REST APIs", "Linux", "Problem Solving"];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Main Skills */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-mono text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <span className="font-mono text-primary">{skill.level}%</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Other Skills */}
          <div className="text-center">
            <h3 className="font-mono text-lg text-muted-foreground mb-6">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary border border-border rounded-full font-mono text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
