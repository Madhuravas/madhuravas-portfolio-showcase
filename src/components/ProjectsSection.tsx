
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Resident Portal",
    description: "Angular-based web interface for managing identity data with secure authentication, multi-lingual support, and responsive design.",
    technologies: ["Angular", "TypeScript", "Material UI", "i18n", "REST APIs"],
    image: "/lovable-uploads/82493ad4-cf0d-4ccb-a82c-c18fe58347ed.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Compass Admin",
    description: "ReactJS admin portal with Keycloak-based authentication and responsive UI for managing user permissions and system configurations.",
    technologies: ["React", "Redux", "Keycloak", "Tailwind CSS", "Node.js"],
    image: "/lovable-uploads/82493ad4-cf0d-4ccb-a82c-c18fe58347ed.png",
    github: "#",
    demo: "#",
  },
  {
    title: "DevTinder",
    description: "MERN stack app for developer networking, with real-time chat, profile matching, and project collaboration features deployed on AWS.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "AWS"],
    image: "/lovable-uploads/82493ad4-cf0d-4ccb-a82c-c18fe58347ed.png",
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">My Recent Work</p>
          <h2 className="heading text-3xl md:text-4xl">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border bg-secondary/20 transition-all hover:border-purple-light/30 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline"
                      className="bg-background/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="bg-background/50">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="bg-gradient-purple hover:opacity-90 flex items-center gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
