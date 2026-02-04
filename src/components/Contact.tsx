import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API or email logic here
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Intro Text */}
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question, 
              a project idea, or just want to say hi, my inbox is always open!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono text-sm">sonimapokhrel017@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-mono text-sm">Your City, Country</p>
                </div>
              </div>

              {/* Terminal-style Box */}
              <div className="p-4 bg-background border border-border rounded-lg font-mono text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> echo "Let's build something amazing!"
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-mono text-sm"
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-mono text-sm"
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-mono text-sm resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity glow-box flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 animate-bounce" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
