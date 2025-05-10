
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-gradient-purple w-8 h-8 rounded-full flex items-center justify-center">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="text-lg font-semibold">Madhuravas Reddy</span>
          </div>
          
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/Madhuravas" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/madhuravas-reddy-8a4b0b230/" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/madhu__1116__/" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:madhuravas@example.com" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {year} Madhuravas Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
