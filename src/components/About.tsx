import { Code2, Coffee, Rocket, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and scalability",
  },
  {
    icon: Coffee,
    title: "Problem Solver",
    description: "Tackling complex challenges head-on",
  },
  {
    icon: Code2,
    title: "Continuous Learning",
    description: "Always expanding my skill set",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student with a strong interest in software and web development. 
                I have hands-on experience with <span className="text-primary font-mono">C</span>, <span className="text-primary font-mono">C++</span>, and <span className="text-accent font-mono">JavaScript</span>, 
                and I'm currently building projects while learning <span className="text-primary font-mono">React.js</span> to create modern and interactive web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My projects focus on applying core programming concepts, writing clean and structured code, 
                and gradually improving user interface and functionality. I enjoy breaking down problems, 
                understanding how things work under the hood, and turning ideas into working solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to grow as a full-stack developer by strengthening my fundamentals, building 
                real-world projects, and continuously learning new technologies. I'm motivated, curious, 
                and always looking for opportunities to improve my skills and create meaningful digital products.
              </p>

              {/* Code Block Style */}
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">developer</span> = {"{"}
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">name</span>: <span className="text-primary">"Sonima Pokharel"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">role</span>: <span className="text-primary">"CS Student"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-foreground">available</span>: <span className="text-accent">true</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover-glow transition-all group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
