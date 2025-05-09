
import { Code, Database, Layout, Server } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Building responsive and interactive user interfaces using modern frontend technologies like React and Angular.",
    highlights: ["Responsive Design", "UI/UX Implementation", "State Management", "Performance Optimization"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Creating robust server-side applications using Node.js, Express, and other backend technologies.",
    highlights: ["API Development", "Authentication", "Server Configuration", "Performance Optimization"],
  },
  {
    title: "Database Design",
    icon: Database,
    description: "Designing and optimizing database schemas and queries for MongoDB and other database systems.",
    highlights: ["Schema Design", "Query Optimization", "Data Modeling", "Database Management"],
  },
  {
    title: "Full Stack Development",
    icon: Code,
    description: "End-to-end development of web applications, from designing responsive UIs to building robust backends.",
    highlights: ["MERN Stack", "Full Application Lifecycle", "Deployment", "Maintenance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">What I Offer</p>
          <h2 className="heading text-3xl md:text-4xl">My Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-secondary/40 border-border transition-all hover:bg-secondary/60 animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-purple rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-light"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg">
            I offer end-to-end web development services, from designing responsive UIs to building robust backends. Let's work together to bring your web application ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
