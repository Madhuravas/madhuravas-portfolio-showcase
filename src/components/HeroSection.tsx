
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Tech logos component to display floating tech icons
const TechLogos = () => {
  const icons = [
    { icon: "mongodb", top: "30%", right: "20%", delay: "0s" },
    { icon: "express", top: "60%", right: "15%", delay: "0.3s" },
    { icon: "react", top: "25%", right: "30%", delay: "0.6s" },
    { icon: "node", top: "70%", right: "28%", delay: "0.9s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute tech-icon-container animate-float"
          style={{
            top: icon.top,
            right: icon.right,
            animationDelay: icon.delay,
          }}
        >
          <img 
            src={`/lovable-uploads/742d1e65-9865-449e-a302-5367a4ef0560.png`} 
            alt="Profile placeholder"
            className="h-8 w-8 rounded-full object-cover opacity-40"
          />
        </div>
      ))}
      <div className="absolute inset-0 mask-image-radial opacity-20 bg-gradient-purple-diagonal"></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-purple-light font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
              Madhuravas Reddy
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
              <span className="gradient-text font-semibold">MERN Stack Developer</span>
            </h2>
            <p className="text-lg mb-8">
              Building fast, scalable web apps with MongoDB, Express.js, React, and Node.js.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-purple hover:opacity-90" asChild>
                <a href="#projects">View Portfolio</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-5 mt-8">
              <a href="https://github.com/Madhuravas" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/madhuravas-reddy-8a4b0b230/" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:madhuravas@example.com" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-purple rounded-full overflow-hidden p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-dark p-1">
                  <img 
                    src={`/lovable-uploads/742d1e65-9865-449e-a302-5367a4ef0560.png`} 
                    alt="Madhuravas Reddy" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-5 right-0 bg-secondary border border-border p-4 rounded-lg backdrop-blur-sm animate-pulse-slow">
                <p className="text-sm font-medium gradient-text">MERN Stack Developer</p>
                <p className="text-xs text-muted-foreground">3+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TechLogos />
    </section>
  );
};

export default HeroSection;
