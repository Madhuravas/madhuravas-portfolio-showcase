
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Resident Portal",
    description: "Angular-based web interface for managing identity data with secure authentication, multi-lingual support, and responsive design.",
    technologies: ["Angular", "TypeScript", "Material UI", "i18n", "REST APIs"],
    image: "/lovable-uploads/resident-portal.png",
  },
  {
    title: "Compass Admin",
    description: "ReactJS admin dashboard for secure credential management with Keycloak-based authentication and a responsive UI for streamlined data entry and role-based access control.",
    technologies: ["React", "Redux", "Keycloak", "Tailwind CSS", "DaisyUI"],
    image: "/lovable-uploads/compass-portal.png",
  },
  {
    title: "DevTinder",
    description: "MERN stack app for developer networking, with real-time chat, profile matching, and project collaboration features deployed on AWS.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Mongoose", "JWT", "AWS"],
    image: "/lovable-uploads/devTinder-portal.png",
    github: "https://github.com/Madhuravas/devTinder"
  },
  {
    title: "REST Countries Explorer",
    description: "Frontend Mentor challenge solution using REST Countries API. Includes filtering by region, dark mode toggle, and country detail pages.",
    technologies: ["React", "JavaScript", "REST API", "Styled Components"],
    image: "/lovable-uploads/rest-countries.png", // Make sure this image exists
    github: "https://github.com/Madhuravas/rest-countries",
    demo: "https://rest-countries-yvgq.vercel.app/",
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
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-background/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span>Code</span>
                    </a>
                  </Button>}
                  {project.demo && <Button size="sm" className="bg-gradient-purple hover:opacity-90 flex items-center gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>}
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
